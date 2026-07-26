/**
 * Globe.tsx — Correct geospatial marker system
 *
 * Architecture:
 *  ┌─ Globe (exported, outside Canvas)
 *  │    ├─ Canvas → EarthScene (Three.js, uses useFrame to project markers to screen)
 *  │    └─ MarkersLayer (HTML overlay, rAF-driven direct DOM updates — no React state in loop)
 *
 * Key fixes vs previous version:
 *  1. latLngToVector3 — x/z CORRECTED to match three-globe & earth-blue-marble texture
 *  2. Initial rotation = -PI/2 so Europe faces camera (matches reference image)
 *  3. Labels placed outside Canvas as HTML overlay; positions updated via requestAnimationFrame
 *  4. Visibility = dot(cameraDir, markerSurfaceNormal) — smooth fade at limb
 *  5. Click rotates the earth group (GSAP) so the destination faces center
 */

import React, {
  useRef, useState, useEffect, useMemo, useCallback,
} from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { destinations as rawDestinations } from '../../data/mockData';

// ─── Atmosphere Shader ─────────────────────────────────────────────────────────
class AtmosphereMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
        varying vec3 vNormal;
        void main(){
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }`,
      fragmentShader: `
        varying vec3 vNormal;
        void main(){
          float i = pow(0.62 - dot(vNormal, vec3(0.0,0.0,1.0)), 2.8);
          gl_FragColor = vec4(0.2,0.55,1.0,1.0) * i * 3.2;
        }`,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
  }
}
extend({ AtmosphereMaterial });

// ─── Globe radius ──────────────────────────────────────────────────────────────
const GR = 3.0;

/**
 * latLngToVector3 — CORRECT formula matching three-globe / earth-blue-marble.jpg
 *
 * Convention (theta = lng + 180):
 *   x = -(sin(phi) * cos(theta))   ← "east"
 *   y =   cos(phi)                  ← latitude / north
 *   z =   sin(phi) * sin(theta)     ← toward camera when camera is at +Z
 *
 * At rotation.y = 0:
 *   lng = -90° (90°W, Americas)  → z = +R  (front, facing camera)
 *   lng =   0° (Prime Meridian)  → x = +R  (right side)
 *   lng =  90° (90°E, India)     → z = -R  (back)
 *
 * Initial earthGroup.rotation.y = -PI/2 shifts Europe to front (camera sees ~0° longitude).
 *
 * Previous bug: x used sin(theta), z used cos(theta) — these were SWAPPED, causing every
 * label to appear 90° off its correct position on the rotating globe.
 */
function latlng2vec(lat: number, lng: number, r = GR): THREE.Vector3 {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(r * Math.sin(phi) * Math.cos(theta)),  // was sin(theta) — BUG FIXED
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)    // was cos(theta) — BUG FIXED
  );
}

// ─── Accurate GPS coordinates (override whatever is in mockData) ───────────────
const GPS: Record<string, { lat: number; lng: number }> = {
  'switzerland-luxury': { lat:  46.8182, lng:   8.2275 },
  'switzerland':        { lat:  28.5355, lng:  77.2737 }, // Delhi, India
  'dubai':              { lat:  25.2048, lng:  55.2708 },
  'japan':              { lat:  36.2048, lng: 138.2529 },
  'bali':               { lat:  -8.3405, lng: 115.0920 },
  'maldives-luxury':    { lat:   3.2028, lng:  73.2207 },
  'maldives':           { lat:  26.9124, lng:  75.7873 }, // Rajasthan, India
  'singapore':          { lat:   1.3521, lng: 103.8198 },
  'thailand':           { lat:  15.8700, lng: 100.9925 },
  'italy':              { lat:  41.8719, lng:  12.5674 },
  'france':             { lat:  46.2276, lng:   2.2137 },
  'australia':          { lat: -25.2744, lng: 133.7751 },
  'usa':                { lat:  39.8283, lng: -98.5795 },
  'turkey':             { lat:  38.9637, lng:  35.2433 },
  'santorini':          { lat:  19.0760, lng:  72.8777 }, // Mumbai, India
  'kyoto':              { lat:  10.8505, lng: 136.2711 }, // Kerala, India
  'serengeti':          { lat:  28.6562, lng:  77.2307 }, // Old Delhi, India
  'amalfi':             { lat:  27.1751, lng:  78.0421 }, // Agra, India
  'india':              { lat:  20.5937, lng:  78.9629 }, // Central India main pin
};

// ─── Pin colors ────────────────────────────────────────────────────────────────
const PIN_COLORS: Record<string, string> = {
  'switzerland-luxury': '#e53e3e',
  'dubai':              '#f6ad55',
  'japan':              '#8b5cf6',
  'bali':               '#22c55e',
  'maldives-luxury':    '#3b82f6',
  'singapore':          '#10b981',
  'thailand':           '#14b8a6',
  'italy':              '#f97316',
  'france':             '#3b82f6',
  'australia':          '#ef4444',
  'usa':                '#2563eb',
  'turkey':             '#eab308',
  'santorini':          '#ec4899',
  'switzerland':        '#8b5cf6',
  'maldives':           '#10b981',
  'kyoto':              '#3b82f6',
  'serengeti':          '#ca8a04',
  'india':              '#ff9933', // Saffron orange for India
};

// ─── Nearby famous places (real GPS) ──────────────────────────────────────────
const NEARBY: Record<string, Array<{ name: string; lat: number; lng: number; id?: string }>> = {
  'switzerland-luxury': [
    { name: 'Matterhorn',   lat: 45.9763, lng:  7.6586 },
    { name: 'Zurich',       lat: 47.3769, lng:  8.5417 },
    { name: 'Interlaken',   lat: 46.6863, lng:  7.8632 },
    { name: 'Geneva',       lat: 46.2044, lng:  6.1432 },
    { name: 'Lucerne',      lat: 47.0502, lng:  8.3093 },
    { name: 'Jungfraujoch', lat: 46.5478, lng:  7.9851 },
  ],
  'dubai': [
    { name: 'Burj Khalifa',  lat: 25.1972, lng: 55.2744 },
    { name: 'Palm Jumeirah', lat: 25.1124, lng: 55.1390 },
    { name: 'Dubai Marina',  lat: 25.0800, lng: 55.1403 },
    { name: 'Abu Dhabi',     lat: 24.4539, lng: 54.3773 },
  ],
  'japan': [
    { name: 'Mount Fuji', lat: 35.3606, lng: 138.7274 },
    { name: 'Tokyo',      lat: 35.6762, lng: 139.6503 },
    { name: 'Kyoto',      lat: 35.0116, lng: 135.7681 },
    { name: 'Osaka',      lat: 34.6937, lng: 135.5023 },
    { name: 'Nara',       lat: 34.6851, lng: 135.8048 },
    { name: 'Hiroshima',  lat: 34.3853, lng: 132.4553 },
  ],
  'italy': [
    { name: 'Rome',         lat: 41.9028, lng:  12.4964 },
    { name: 'Venice',       lat: 45.4408, lng:  12.3155 },
    { name: 'Milan',        lat: 45.4642, lng:   9.1900 },
    { name: 'Florence',     lat: 43.7696, lng:  11.2558 },
    { name: 'Pisa',         lat: 43.7228, lng:  10.4017 },
    { name: 'Amalfi Coast', lat: 40.6340, lng:  14.6026 },
  ],
  'france': [
    { name: 'Paris',      lat: 48.8566, lng:  2.3522 },
    { name: 'Versailles', lat: 48.8049, lng:  2.1204 },
    { name: 'Nice',       lat: 43.7102, lng:  7.2620 },
    { name: 'Lyon',       lat: 45.7640, lng:  4.8357 },
    { name: 'Bordeaux',   lat: 44.8378, lng: -0.5792 },
  ],
  'usa': [
    { name: 'New York',     lat:  40.7128, lng:  -74.0060 },
    { name: 'Los Angeles',  lat:  34.0522, lng: -118.2437 },
    { name: 'Grand Canyon', lat:  36.1069, lng: -112.1130 },
    { name: 'Las Vegas',    lat:  36.1699, lng: -115.1398 },
    { name: 'Miami',        lat:  25.7617, lng:  -80.1918 },
  ],
  'australia': [
    { name: 'Sydney Opera',       lat: -33.8568, lng: 151.2153 },
    { name: 'Great Barrier Reef', lat: -18.2871, lng: 147.6992 },
    { name: 'Uluru',              lat: -25.3444, lng: 131.0369 },
    { name: 'Melbourne',          lat: -37.8136, lng: 144.9631 },
  ],
  'turkey': [
    { name: 'Cappadocia', lat: 38.6431, lng: 34.8297 },
    { name: 'Istanbul',   lat: 41.0082, lng: 28.9784 },
    { name: 'Antalya',    lat: 36.8969, lng: 30.7133 },
    { name: 'Ephesus',    lat: 37.9401, lng: 27.3415 },
  ],
  'singapore': [
    { name: 'Marina Bay', lat: 1.2847, lng: 103.8610 },
    { name: 'Sentosa',    lat: 1.2494, lng: 103.8303 },
    { name: 'Gardens Bay',lat: 1.2816, lng: 103.8636 },
  ],
  'thailand': [
    { name: 'Phuket',     lat:  7.8804, lng:  98.3923 },
    { name: 'Chiang Mai', lat: 18.7883, lng:  98.9853 },
    { name: 'Koh Samui',  lat:  9.5120, lng: 100.0136 },
    { name: 'Bangkok',    lat: 13.7563, lng: 100.5018 },
  ],
  'bali': [
    { name: 'Ubud',     lat: -8.5069, lng: 115.2625 },
    { name: 'Kuta',     lat: -8.7267, lng: 115.1673 },
    { name: 'Uluwatu',  lat: -8.8291, lng: 115.0849 },
    { name: 'Seminyak', lat: -8.6910, lng: 115.1682 },
  ],
  'maldives-luxury': [
    { name: 'Malé',      lat:  4.1755, lng: 73.5093 },
    { name: 'Baa Atoll', lat:  5.0000, lng: 73.0000 },
    { name: 'Ari Atoll', lat:  3.8667, lng: 72.8333 },
  ],
  'india': [
    { name: 'Mumbai',    lat: 19.0760, lng: 72.8777, id: 'santorini' },
    { name: 'Delhi',     lat: 28.5355, lng: 77.2737, id: 'switzerland' },
    { name: 'Rajasthan', lat: 26.9124, lng: 75.7873, id: 'maldives' },
    { name: 'Kerala',    lat: 10.8505, lng: 76.2711, id: 'kyoto' },
    { name: 'Old Delhi', lat: 28.6562, lng: 77.2307, id: 'serengeti' },
    { name: 'Agra',      lat: 27.1751, lng: 78.0421, id: 'amalfi' },
  ],
};

// ─── Types ─────────────────────────────────────────────────────────────────────
interface MarkerInfo {
  id: string;
  label: string;
  lat: number;
  lng: number;
  color: string;
  isNearby: boolean;
  destId?: string; // parent destination id (for nearby places)
}

interface ScreenPos {
  x: number;
  y: number;
  opacity: number;   // 0-1 based on dot product
  visible: boolean;  // fast bool for pointer-events
}

// ─── Build destination markers from mockData + GPS override ───────────────────
const DEST_MARKERS: MarkerInfo[] = rawDestinations
  .filter(d => d.country !== 'India' || d.id === 'india')
  .map(d => ({
    id: d.id,
    label: d.country,
    lat: GPS[d.id]?.lat ?? d.coordinates.lat,
    lng: GPS[d.id]?.lng ?? d.coordinates.lng,
    color: PIN_COLORS[d.id] ?? '#e53e3e',
    isNearby: false,
  }));

// ─── Flight paths ─────────────────────────────────────────────────────────────
const FLIGHT_PAIRS = [
  ['usa', 'france'],
  ['france', 'dubai'],
  ['dubai', 'japan'],
  ['dubai', 'singapore'],
  ['singapore', 'australia'],
  ['turkey', 'dubai'],
  ['italy', 'singapore'],
  ['france', 'switzerland-luxury'],
  ['maldives-luxury', 'bali'],
  ['australia', 'japan'],
];

const FlightDot: React.FC<{ curve: THREE.QuadraticBezierCurve3; offset: number }> = ({ curve, offset }) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = ((clock.getElapsedTime() * 0.09 + offset) % 1);
    const pos = curve.getPointAt(t);
    const tan = curve.getTangentAt(t).normalize();
    ref.current.position.copy(pos);
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
    ref.current.setRotationFromQuaternion(q);
  });
  return (
    <mesh ref={ref}>
      <coneGeometry args={[0.022, 0.07, 4]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
};

const FlightPaths: React.FC = () => (
  <group>
    {FLIGHT_PAIRS.map(([a, b], i) => {
      const fromD = DEST_MARKERS.find(d => d.id === a);
      const toD   = DEST_MARKERS.find(d => d.id === b);
      if (!fromD || !toD) return null;
      const s   = latlng2vec(fromD.lat, fromD.lng);
      const e   = latlng2vec(toD.lat,   toD.lng);
      const mid = new THREE.Vector3().addVectors(s, e).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(GR + s.distanceTo(e) * 0.30);
      const curve = new THREE.QuadraticBezierCurve3(s, mid, e);
      const geo   = new THREE.BufferGeometry().setFromPoints(curve.getPoints(64));
      return (
        <group key={i}>
          {/* @ts-ignore */}
          <line geometry={geo}>
            {/* @ts-ignore */}
            <lineBasicMaterial color="#88bbff" transparent opacity={0.25} />
          </line>
          <FlightDot curve={curve} offset={i * 0.12} />
        </group>
      );
    })}
  </group>
);

// ─── EarthScene — runs inside Canvas ──────────────────────────────────────────
interface EarthSceneProps {
  earthGroupRef: React.MutableRefObject<THREE.Group | null>;
  isLockedRef:   React.MutableRefObject<boolean>;
  allMarkers:    MarkerInfo[];
  selectedId:    string | null;
  screenPosRef:  React.MutableRefObject<Map<string, ScreenPos>>;
}

const EarthScene: React.FC<EarthSceneProps> = ({
  earthGroupRef, isLockedRef, allMarkers, selectedId, screenPosRef,
}) => {
  const { camera, size } = useThree();
  const cloudsRef  = useRef<THREE.Mesh>(null!);
  const dotRefs    = useRef<Map<string, THREE.Mesh | null>>(new Map());
  const pulseT     = useRef(0);

  const [colorMap, bumpMap, specMap, cloudsMap] = useTexture([
    'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    'https://unpkg.com/three-globe/example/img/earth-topology.png',
    'https://unpkg.com/three-globe/example/img/earth-water.png',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png',
  ]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    pulseT.current = t;

    // Auto-rotate earth group
    // INIT_ROT = -PI/2 places Europe at front (camera at +Z)
    if (!isLockedRef.current && earthGroupRef.current) {
      earthGroupRef.current.rotation.y = -Math.PI / 2 + t * 0.018;
    }

    // Clouds rotate slightly faster than earth
    if (cloudsRef.current && earthGroupRef.current) {
      cloudsRef.current.rotation.y = earthGroupRef.current.rotation.y + t * 0.006;
    }

    // ── Compute screen-space projections for every marker ──────────────────
    if (!earthGroupRef.current) return;
    const rot = earthGroupRef.current.rotation.y;
    const camNorm = camera.position.clone().normalize();
    const euler   = new THREE.Euler(0, rot, 0);

    allMarkers.forEach(marker => {
      const localPos = latlng2vec(marker.lat, marker.lng);
      // Apply current earth rotation to get world position
      const worldPos = localPos.clone().applyEuler(euler);

      // Visibility: dot product of camera direction and surface normal
      const surfaceNormal = worldPos.clone().normalize();
      const dot = camNorm.dot(surfaceNormal);

      // Smooth fade: fully visible at dot > 0.15, invisible at dot < 0.02
      const opacity = Math.max(0, Math.min(1, (dot - 0.02) / 0.13));
      const visible  = dot > 0.02;

      // Project to CSS pixel space
      const ndc = worldPos.clone().project(camera);
      const x   = ((ndc.x + 1) / 2) * size.width;
      const y   = ((-ndc.y + 1) / 2) * size.height;

      screenPosRef.current.set(marker.id, { x, y, opacity, visible });

      // Animate the corresponding 3D dot
      const dotMesh = dotRefs.current.get(marker.id);
      if (dotMesh) {
        dotMesh.position.copy(worldPos);
        dotMesh.visible = visible;

        // Pulse scale for selected / regular markers
        const isSelected = marker.id === selectedId || marker.destId === selectedId;
        const pulse = 1 + Math.sin(t * 3.2 + marker.lat) * (isSelected ? 0.4 : 0.18);
        dotMesh.scale.setScalar(pulse);
        // @ts-ignore
        if (dotMesh.material) dotMesh.material.opacity = visible ? opacity : 0;
      }
    });
  });

  return (
    <group>
      {/* Earth sphere (NO rotation — rotation is on earthGroupRef below) */}
      <group ref={earthGroupRef}>
        <mesh>
          <sphereGeometry args={[GR, 96, 96]} />
          <meshStandardMaterial
            map={colorMap}
            bumpMap={bumpMap}
            bumpScale={0.032}
            roughnessMap={specMap}
            roughness={0.48}
            metalness={0.04}
          />
        </mesh>
      </group>

      {/* Clouds — rotation managed in useFrame */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[GR + 0.045, 96, 96]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.42}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[GR + 0.28, 64, 64]} />
        {/* @ts-ignore */}
        <atmosphereMaterial />
      </mesh>

      {/* 3D glowing dots — positioned imperatively in useFrame */}
      {allMarkers.map(marker => (
        <mesh
          key={marker.id}
          ref={el => dotRefs.current.set(marker.id, el)}
          visible={false}
        >
          <sphereGeometry args={[marker.isNearby ? 0.038 : 0.065, 10, 10]} />
          <meshBasicMaterial
            color={marker.isNearby ? '#ffffff' : marker.color}
            transparent
            opacity={0}
          />
        </mesh>
      ))}

      {/* Animated flight paths */}
      <FlightPaths />
    </group>
  );
};

// ─── MarkersLayer — HTML overlay outside Canvas ────────────────────────────────
interface MarkersLayerProps {
  screenPosRef:  React.MutableRefObject<Map<string, ScreenPos>>;
  allMarkers:    MarkerInfo[];
  hoveredId:     string | null;
  selectedId:    string | null;
  onHover:       (id: string | null) => void;
  onClick:       (id: string) => void;
}

const MarkersLayer: React.FC<MarkersLayerProps> = ({
  screenPosRef, allMarkers, hoveredId, selectedId, onHover, onClick,
}) => {
  // DOM refs per marker id — used for direct style updates (no React state in loop)
  const domRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());

  // requestAnimationFrame loop: read screenPosRef and update DOM directly
  useEffect(() => {
    let rafId: number;
    const tick = () => {
      allMarkers.forEach(marker => {
        const el  = domRefs.current.get(marker.id);
        const pos = screenPosRef.current.get(marker.id);
        if (!el || !pos) return;

        // Translate: pin tip at (x, y)
        el.style.transform  = `translate(calc(${pos.x}px - 50%), calc(${pos.y}px - 100%))`;
        el.style.opacity    = String(pos.opacity);
        el.style.pointerEvents = pos.visible ? 'auto' : 'none';
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [allMarkers, screenPosRef]);

  return (
    <div
      style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {allMarkers.map(marker => {
        const isHovered  = hoveredId  === marker.id;
        const isSelected = selectedId === marker.id || selectedId === marker.destId;
        const active     = isHovered || isSelected;

        return (
          <div
            key={marker.id}
            ref={el => { domRefs.current.set(marker.id, el); }}
            onMouseEnter={() => onHover(marker.id)}
            onMouseLeave={() => onHover(null)}
            onClick={e => { e.stopPropagation(); onClick(marker.id); }}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              opacity: 0,           // controlled by rAF loop
              willChange: 'transform, opacity',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'filter 0.15s',
              filter: active ? `drop-shadow(0 0 8px ${marker.color})` : 'none',
            }}
          >
            {marker.isNearby ? (
              // ── Nearby place: small diamond dot + label ───────────────────
              <>
                <div style={{
                  background: 'rgba(5,15,45,0.82)',
                  backdropFilter: 'blur(6px)',
                  color: '#c8dfff',
                  fontSize: '9px',
                  fontWeight: 600,
                  padding: '2px 7px',
                  borderRadius: '8px',
                  whiteSpace: 'nowrap',
                  border: '1px solid rgba(120,180,255,0.3)',
                  marginBottom: '3px',
                  userSelect: 'none',
                }}>
                  ✦ {marker.label}
                </div>
                <div style={{
                  width: 7, height: 7,
                  background: '#ffffff',
                  borderRadius: '1px',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                  flexShrink: 0,
                }} />
              </>
            ) : (
              // ── Main destination: drop-pin + country label ────────────────
              <>
                {/* Drop-pin head */}
                <div style={{
                  width: active ? 22 : 18,
                  height: active ? 22 : 18,
                  borderRadius: '50% 50% 50% 0',
                  transform: 'rotate(-45deg)',
                  background: marker.color,
                  border: '2.5px solid #ffffff',
                  boxShadow: `0 2px 14px ${marker.color}99, 0 0 ${active ? 24 : 8}px ${marker.color}77`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'width 0.2s, height 0.2s, box-shadow 0.2s',
                  marginBottom: '3px',
                }}>
                  <div style={{
                    width: active ? 8 : 6,
                    height: active ? 8 : 6,
                    borderRadius: '50%',
                    background: '#fff',
                    transform: 'rotate(45deg)',
                    transition: 'width 0.2s, height 0.2s',
                  }} />
                </div>
                {/* Country label pill */}
                <div style={{
                  background: 'rgba(3, 10, 35, 0.90)',
                  backdropFilter: 'blur(10px)',
                  color: '#ffffff',
                  fontSize: active ? '11px' : '10px',
                  fontWeight: 700,
                  padding: '2px 9px',
                  borderRadius: '10px',
                  whiteSpace: 'nowrap',
                  border: `1px solid ${marker.color}77`,
                  boxShadow: `0 2px 10px rgba(0,0,0,0.45)`,
                  letterSpacing: '0.03em',
                  userSelect: 'none',
                  transition: 'font-size 0.2s',
                }}>
                  {marker.label}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ─── Exported Globe component ──────────────────────────────────────────────────
export interface GlobeProps {
  onHoverDest:  (d: any | null) => void;
  hoveredDest:  any | null;
  onClickDest?: (d: any) => void;
}

export const Globe: React.FC<GlobeProps> = ({ onHoverDest, onClickDest }) => {
  // Shared bridge between Canvas (Three.js) and HTML overlay
  const screenPosRef = useRef<Map<string, ScreenPos>>(new Map());

  // earthGroupRef: defined here so we can drive GSAP from click handlers outside Canvas
  const earthGroupRef = useRef<THREE.Group | null>(null);
  const isLockedRef   = useRef(false);

  const [hoveredId,   setHoveredId]   = useState<string | null>(null);
  const [selectedId,  setSelectedId]  = useState<string | null>(null);
  const [nearbyMarkers, setNearbyMarkers] = useState<MarkerInfo[]>([]);

  // Combine destination markers + nearby markers
  const allMarkers = useMemo<MarkerInfo[]>(
    () => [...DEST_MARKERS, ...nearbyMarkers],
    [nearbyMarkers]
  );

  const handleHover = useCallback((id: string | null) => {
    setHoveredId(id);
    if (id) {
      const dest = rawDestinations.find(d => d.id === id);
      if (dest) onHoverDest(dest);
    } else {
      onHoverDest(null);
    }
  }, [onHoverDest]);

  const handleClick = useCallback((id: string) => {
    // Only main destinations (not nearby places) navigate
    const dest = rawDestinations.find(d => d.id === id);
    if (!dest) return;

    setSelectedId(id);

    // Build nearby markers for this destination
    const nearby = (NEARBY[id] ?? []).map(p => ({
      id: p.id || `nearby-${id}-${p.name}`,
      label: p.name,
      lat: p.lat,
      lng: p.lng,
      color: '#7dd3fc',
      isNearby: true,
      destId: id,
    }));
    setNearbyMarkers(nearby);

    // Notify parent for card update
    onClickDest?.(dest);

    // Rotate earth so this destination faces the camera
    // Formula: target = -PI/2 - lng_rad (derived from three-globe coordinate system)
    if (earthGroupRef.current) {
      const lng = GPS[id]?.lng ?? dest.coordinates.lng;
      const targetRot = -Math.PI / 2 - (lng * Math.PI / 180);

      // Shortest path (normalize diff to [-PI, PI])
      let diff = targetRot - earthGroupRef.current.rotation.y;
      while (diff >  Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;

      isLockedRef.current = true;
      gsap.to(earthGroupRef.current.rotation, {
        y: earthGroupRef.current.rotation.y + diff,
        duration: 2.2,
        ease: 'power3.inOut',
        onComplete: () => {
          // After animation, let user continue rotating manually
          // (isLocked stays true to prevent auto-rotation while they interact)
        },
      });
    }
  }, [onClickDest]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0.5, 7.4], fov: 42 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Sun-like directional lighting — globe never looks dark */}
        <ambientLight     intensity={1.0}  color="#d0e8ff" />
        <directionalLight position={[7, 4, 4]}   intensity={2.8} color="#fff5dd" />
        <directionalLight position={[-4, 2, -3]}  intensity={0.4} color="#5599ff" />
        <pointLight       position={[0, 7, 0]}    intensity={0.3} color="#ffffff" />

        <EarthScene
          earthGroupRef={earthGroupRef}
          isLockedRef={isLockedRef}
          allMarkers={allMarkers}
          selectedId={selectedId}
          screenPosRef={screenPosRef}
        />

        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={4.8}
          maxDistance={14.0}
          rotateSpeed={0.5}
          zoomSpeed={0.6}
          enableDamping
          dampingFactor={0.06}
          autoRotate={false}
          onStart={() => { isLockedRef.current = true; }}
        />
      </Canvas>

      {/* HTML label overlay — positioned over canvas, updated by rAF */}
      <MarkersLayer
        screenPosRef={screenPosRef}
        allMarkers={allMarkers}
        hoveredId={hoveredId}
        selectedId={selectedId}
        onHover={handleHover}
        onClick={handleClick}
      />
    </div>
  );
};
