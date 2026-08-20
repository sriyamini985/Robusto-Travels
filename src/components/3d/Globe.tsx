/**
 * Globe.tsx — Geospatial Interactive 3D Earth Globe with Journey Planner support
 */

import React, {
  useRef, useState, useEffect, useMemo, useCallback,
} from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { OrbitControls, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ALL_LOCATIONS } from '../../utils/journey';

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
          float i = pow(0.68 - dot(vNormal, vec3(0.0,0.0,1.0)), 3.2);
          gl_FragColor = vec4(0.18, 0.52, 0.95, 1.0) * i * 1.4;
        }`,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
  }
}
extend({ AtmosphereMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    atmosphereMaterial: any;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      atmosphereMaterial: any;
    }
  }
}

const GR = 3.0;

function latlng2vec(lat: number, lng: number, r = GR): THREE.Vector3 {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(r * Math.sin(phi) * Math.cos(theta)),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  );
}

// ─── Accurate GPS coordinates ──────────────────────────────────────────────────
export const GPS: Record<string, { lat: number; lng: number }> = {
  'switzerland-luxury': { lat:  46.8182, lng:   8.2275 },
  'switzerland':        { lat:  46.8182, lng:   8.2275 },
  'dubai':              { lat:  25.2048, lng:  55.2708 },
  'japan':              { lat:  36.2048, lng: 138.2529 },
  'bali':               { lat:  -8.3405, lng: 115.0920 },
  'maldives-luxury':    { lat:   3.2028, lng:  73.2207 },
  'maldives':           { lat:   3.2028, lng:  73.2207 },
  'singapore':          { lat:   1.3521, lng: 103.8198 },
  'thailand':           { lat:  15.8700, lng: 100.9925 },
  'italy':              { lat:  41.8719, lng:  12.5674 },
  'france':             { lat:  46.2276, lng:   2.2137 },
  'australia':          { lat: -25.2744, lng: 133.7751 },
  'usa':                { lat:  39.8283, lng: -98.5795 },
  'turkey':             { lat:  38.9637, lng:  35.2433 },
  'india':              { lat:  20.5937, lng:  78.9629 },
};

// ─── Pin colors ────────────────────────────────────────────────────────────────
const PIN_COLORS: Record<string, string> = {
  'switzerland-luxury': '#38bdf8',
  'switzerland':        '#38bdf8',
  'dubai':              '#f59e0b',
  'japan':              '#a855f7',
  'bali':               '#10b981',
  'maldives-luxury':    '#06b6d4',
  'maldives':           '#06b6d4',
  'singapore':          '#10b981',
  'thailand':           '#14b8a6',
  'italy':              '#f97316',
  'france':             '#3b82f6',
  'australia':          '#ef4444',
  'usa':                '#2563eb',
  'turkey':             '#eab308',
  'india':              '#ff9933',
};

export interface MarkerInfo {
  id: string;
  label: string;
  lat: number;
  lng: number;
  color: string;
  isNearby?: boolean;
  destId?: string;
}

export const DEST_MARKERS: MarkerInfo[] = ALL_LOCATIONS.map(loc => ({
  id: loc.id,
  label: loc.name,
  lat: loc.lat,
  lng: loc.lng,
  color: PIN_COLORS[loc.id] || '#38bdf8',
}));

interface ScreenPos {
  x: number;
  y: number;
  opacity: number;
  visible: boolean;
}

const FlightDot: React.FC<{ curve: THREE.QuadraticBezierCurve3; offset: number }> = ({ curve, offset }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const tRef = useRef(0);
  useFrame((_, delta) => {
    tRef.current += delta;
    const t = ((tRef.current * 0.15 + offset) % 1);
    const pos = curve.getPointAt(t);
    const tan = curve.getTangentAt(t).normalize();
    if (ref.current) {
      ref.current.position.copy(pos);
      const q = new THREE.Quaternion();
      q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan);
      ref.current.setRotationFromQuaternion(q);
    }
  });
  return (
    <mesh ref={ref}>
      <coneGeometry args={[0.04, 0.12, 5]} />
      <meshBasicMaterial color="#ffffff" />
    </mesh>
  );
};

const FlightLine: React.FC<{ curve: THREE.QuadraticBezierCurve3; colorHex?: number }> = ({ curve, colorHex = 0x00f0ff }) => {
  const lineObj = useMemo(() => {
    const points = curve.getPoints(80);
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({ color: colorHex, transparent: true, opacity: 0.85 });
    return new THREE.Line(geo, mat);
  }, [curve, colorHex]);
  return <primitive object={lineObj} />;
};

export function getLocationCoord(id: string): { lat: number; lng: number } | null {
  if (GPS[id]) return GPS[id];
  const loc = ALL_LOCATIONS.find(l => l.id === id);
  if (loc) return { lat: loc.lat, lng: loc.lng };
  const st = ALL_INDIAN_STATES.find(s => s.id === id);
  if (st) return { lat: st.lat, lng: st.lng };
  return null;
}

const ActiveJourneyRoute: React.FC<{ originId: string; destinationId: string }> = ({ originId, destinationId }) => {
  const originCoord = getLocationCoord(originId);
  const destCoord   = getLocationCoord(destinationId);
  if (!originCoord || !destCoord) return null;

  const startVec = latlng2vec(originCoord.lat, originCoord.lng);
  const endVec   = latlng2vec(destCoord.lat, destCoord.lng);
  
  const midVec = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
  const dist   = startVec.distanceTo(endVec);
  midVec.normalize().multiplyScalar(GR + Math.max(0.4, dist * 0.35));

  const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);

  return (
    <group>
      {/* Primary cyan route line */}
      <FlightLine curve={curve} colorHex={0x00f0ff} />
      {/* Secondary glowing yellow accent line */}
      <FlightLine curve={curve} colorHex={0xffc107} />
      {/* Jet animation */}
      <FlightDot curve={curve} offset={0} />
      <FlightDot curve={curve} offset={0.33} />
      <FlightDot curve={curve} offset={0.66} />
    </group>
  );
};

const ZoomHandler: React.FC<{ trigger: { type: 'in' | 'out' | 'reset', timestamp: number } | null | undefined; isIndiaMode?: boolean }> = ({ trigger, isIndiaMode }) => {
  const { camera } = useThree();
  useEffect(() => {
    if (!trigger) return;
    const factor = trigger.type === 'in' ? 0.8 : trigger.type === 'out' ? 1.25 : 1.0;
    if (trigger.type === 'reset') {
      const targetZ = isIndiaMode ? 4.4 : 7.2;
      const targetY = isIndiaMode ? 0.25 : 0.4;
      gsap.to(camera.position, {
        x: 0,
        y: targetY,
        z: targetZ,
        duration: 0.6,
        ease: 'power2.out',
        onUpdate: () => camera.lookAt(0, 0, 0)
      });
    } else {
      const currentDist = camera.position.length();
      const nextDist = currentDist * factor;
      if (nextDist >= 3.8 && nextDist <= 15.0) {
        gsap.to(camera.position, {
          x: camera.position.x * factor,
          y: camera.position.y * factor,
          z: camera.position.z * factor,
          duration: 0.5,
          ease: 'power2.out',
          onUpdate: () => camera.lookAt(0, 0, 0)
        });
      }
    }
  }, [trigger, camera, isIndiaMode]);
  return null;
};

// ─── EarthScene — runs inside Canvas ──────────────────────────────────────────
interface EarthSceneProps {
  earthGroupRef: React.MutableRefObject<THREE.Group | null>;
  isLockedRef:   React.MutableRefObject<boolean>;
  allMarkers:    MarkerInfo[];
  selectedId:    string | null;
  originId?:     string | null;
  destinationId?: string | null;
  screenPosRef:  React.MutableRefObject<Map<string, ScreenPos>>;
}

const EarthScene: React.FC<EarthSceneProps> = ({
  earthGroupRef, isLockedRef, allMarkers, selectedId, originId, destinationId, screenPosRef,
}) => {
  const { camera, size } = useThree();
  const cloudsRef  = useRef<THREE.Mesh>(null!);
  const dotRefs    = useRef<Map<string, THREE.Mesh | null>>(new Map());
  const pulseT     = useRef(0);

  const [colorMap, bumpMap, specMap] = useTexture([
    '/textures/earth-blue-marble.jpg',
    '/textures/earth-topology.png',
    '/textures/earth-water.png',
  ]);

  const cloudsMap = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 1024, 512);

    for (let i = 0; i < 280; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const latFactor = Math.sin((y / 512) * Math.PI);
      const rx = (25 + Math.random() * 65) * (0.5 + latFactor);
      const ry = (12 + Math.random() * 32) * (0.5 + latFactor);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, rx);
      const alpha = (0.25 + Math.random() * 0.45) * latFactor;
      grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta;
    const t = timeRef.current;
    pulseT.current = t;

    // Auto-rotate earth group if not interacting
    if (!isLockedRef.current && earthGroupRef.current) {
      earthGroupRef.current.rotation.y = -Math.PI / 2 + t * 0.015;
    }

    if (cloudsRef.current && earthGroupRef.current) {
      cloudsRef.current.rotation.y = earthGroupRef.current.rotation.y + t * 0.005;
    }

    if (!earthGroupRef.current) return;
    const rot = earthGroupRef.current.rotation.y;
    const camNorm = camera.position.clone().normalize();
    const euler   = new THREE.Euler(0, rot, 0);

    allMarkers.forEach(marker => {
      const localPos = latlng2vec(marker.lat, marker.lng);
      const worldPos = localPos.clone().applyEuler(euler);

      const surfaceNormal = worldPos.clone().normalize();
      const dot = camNorm.dot(surfaceNormal);

      const opacity = Math.max(0, Math.min(1, (dot - 0.02) / 0.13));
      const visible  = dot > 0.02;

      const ndc = worldPos.clone().project(camera);
      const x   = ((ndc.x + 1) / 2) * size.width;
      const y   = ((-ndc.y + 1) / 2) * size.height;

      screenPosRef.current.set(marker.id, { x, y, opacity, visible });

      const dotMesh = dotRefs.current.get(marker.id);
      if (dotMesh) {
        dotMesh.position.copy(worldPos);
        dotMesh.visible = visible;

        const isSelected = marker.id === selectedId || marker.id === originId || marker.id === destinationId;
        const pulse = 1 + Math.sin(t * 3.5 + marker.lat) * (isSelected ? 0.45 : 0.18);
        dotMesh.scale.setScalar(pulse);
        if (dotMesh.material) (dotMesh.material as THREE.MeshBasicMaterial).opacity = visible ? opacity : 0;
      }
    });
  });

  return (
    <group>
      <group ref={earthGroupRef}>
        <mesh>
          <sphereGeometry args={[GR, 96, 96]} />
          <meshStandardMaterial
            map={colorMap}
            bumpMap={bumpMap}
            bumpScale={0.012}
            roughnessMap={specMap}
            roughness={0.82}
            metalness={0.0}
          />
        </mesh>

        {/* Active Journey Curved Route between Origin & Destination */}
        {originId && destinationId && (
          <ActiveJourneyRoute originId={originId} destinationId={destinationId} />
        )}
      </group>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[GR + 0.045, 96, 96]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[GR + 0.28, 64, 64]} />
        <atmosphereMaterial />
      </mesh>

      {allMarkers.map(marker => (
        <mesh
          key={marker.id}
          ref={el => dotRefs.current.set(marker.id, el)}
          visible={false}
        >
          <sphereGeometry args={[marker.isNearby ? 0.038 : 0.065, 10, 10]} />
          <meshBasicMaterial
            color={marker.id === originId ? '#00f0ff' : marker.id === destinationId ? '#ffc107' : marker.color}
            transparent
            opacity={0}
          />
        </mesh>
      ))}
    </group>
  );
};

// ─── MarkersLayer — HTML overlay outside Canvas ────────────────────────────────
interface MarkersLayerProps {
  screenPosRef:  React.MutableRefObject<Map<string, ScreenPos>>;
  allMarkers:    MarkerInfo[];
  hoveredId:     string | null;
  selectedId:    string | null;
  originId?:     string | null;
  destinationId?: string | null;
  onHover:       (id: string | null) => void;
  onClick:       (id: string) => void;
  isIndiaMode?:  boolean;
}

const MarkersLayer: React.FC<MarkersLayerProps> = ({
  screenPosRef, allMarkers, hoveredId, selectedId, originId, destinationId, onHover, onClick, isIndiaMode
}) => {
  const domRefs = useRef<Map<string, HTMLDivElement | null>>(new Map());

  useEffect(() => {
    let rafId: number;
    const tick = () => {
      allMarkers.forEach(marker => {
        const el  = domRefs.current.get(marker.id);
        const pos = screenPosRef.current.get(marker.id);
        if (!el || !pos) return;

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
        const isHovered   = hoveredId === marker.id;
        const isOrigin    = originId === marker.id;
        const isDest      = destinationId === marker.id;
        const isSelected  = selectedId === marker.id || isOrigin || isDest;
        const active      = isHovered || isSelected;

        let pinColor = marker.color;
        let pinTag   = marker.label;

        if (isOrigin) {
          pinColor = '#00f0ff';
          pinTag   = `🛫 ORIGIN: ${marker.label}`;
        } else if (isDest) {
          pinColor = '#ffc107';
          pinTag   = `🛬 DEST: ${marker.label}`;
        }

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
              opacity: 0,
              willChange: 'transform, opacity',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'filter 0.15s',
              filter: active ? `drop-shadow(0 0 12px ${pinColor})` : 'none',
            }}
          >
            {/* Drop-pin head */}
            <div style={{
              width: active ? 24 : 18,
              height: active ? 24 : 18,
              borderRadius: '50% 50% 50% 0',
              transform: 'rotate(-45deg)',
              background: pinColor,
              border: '2.5px solid #ffffff',
              boxShadow: `0 2px 14px ${pinColor}99, 0 0 ${active ? 24 : 8}px ${pinColor}77`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.2s',
              marginBottom: '3px',
            }}>
              <div style={{
                width: active ? 8 : 6,
                height: active ? 8 : 6,
                borderRadius: '50%',
                background: '#fff',
                transform: 'rotate(45deg)',
              }} />
            </div>

            {/* Country label pill (hidden in India mode unless hovered/selected to prevent text clutter) */}
            {(!isIndiaMode || active) && (
              <div style={{
                background: isOrigin ? 'rgba(0, 240, 255, 0.95)' : isDest ? 'rgba(255, 193, 7, 0.95)' : 'rgba(3, 10, 35, 0.90)',
                backdropFilter: 'blur(10px)',
                color: isOrigin || isDest ? '#070f24' : '#ffffff',
                fontSize: active ? '11px' : '10px',
                fontWeight: 800,
                padding: '3px 10px',
                borderRadius: '10px',
                whiteSpace: 'nowrap',
                border: `1.5px solid ${pinColor}`,
                boxShadow: `0 2px 12px rgba(0,0,0,0.5)`,
                letterSpacing: '0.04em',
                userSelect: 'none',
                transition: 'all 0.2s',
              }}>
                {pinTag}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

import { ALL_INDIAN_STATES } from '../../data/india/statesData';

export interface GlobeProps {
  onHoverDest:    (d: any | null) => void;
  hoveredDest:    any | null;
  onClickDest?:   (d: any) => void;
  originId?:      string | null;
  destinationId?: string | null;
  onSelectLocation?: (loc: any) => void;
  isIndiaMode?: boolean;
  onSelectState?: (stateObj: any) => void;
  zoomTrigger?:   { type: 'in' | 'out' | 'reset', timestamp: number } | null;
}

export const Globe: React.FC<GlobeProps> = ({
  onHoverDest, onClickDest, originId, destinationId, onSelectLocation, isIndiaMode, onSelectState, zoomTrigger
}) => {
  const screenPosRef = useRef<Map<string, ScreenPos>>(new Map());
  const earthGroupRef = useRef<THREE.Group | null>(null);
  const isLockedRef   = useRef(false);

  const [hoveredId,   setHoveredId]   = useState<string | null>(null);
  const [selectedId,  setSelectedId]  = useState<string | null>(null);

  const indianMarkers: MarkerInfo[] = useMemo(() => {
    return ALL_INDIAN_STATES.map(s => ({
      id: s.id,
      name: s.name,
      label: s.name,
      lat: s.lat,
      lng: s.lng,
      color: '#38bdf8'
    }));
  }, []);

  const allMarkers: MarkerInfo[] = useMemo(() => {
    const base = isIndiaMode ? indianMarkers : DEST_MARKERS;
    const finalMarkers = [...base];
    
    // If we have an originId that is NOT in the current mode's base markers, add it!
    if (originId && !finalMarkers.some(m => m.id === originId)) {
      const extra = isIndiaMode 
        ? DEST_MARKERS.find(m => m.id === originId)
        : indianMarkers.find(m => m.id === originId);
      if (extra) finalMarkers.push(extra);
    }
    
    // If we have a destinationId that is NOT in the current mode's base markers, add it!
    if (destinationId && !finalMarkers.some(m => m.id === destinationId)) {
      const extra = isIndiaMode
        ? DEST_MARKERS.find(m => m.id === destinationId)
        : indianMarkers.find(m => m.id === destinationId);
      if (extra) finalMarkers.push(extra);
    }
    
    return finalMarkers;
  }, [isIndiaMode, indianMarkers, originId, destinationId]);

  const handleHover = useCallback((id: string | null) => {
    setHoveredId(id);
    if (id) {
      if (isIndiaMode) {
        const stateObj = ALL_INDIAN_STATES.find(s => s.id === id);
        if (stateObj) onHoverDest(stateObj);
      } else {
        const loc = ALL_LOCATIONS.find(l => l.id === id);
        if (loc) onHoverDest(loc);
      }
    } else {
      onHoverDest(null);
    }
  }, [onHoverDest, isIndiaMode]);

  const handleClick = useCallback((id: string) => {
    if (isIndiaMode) {
      const stateObj = ALL_INDIAN_STATES.find(s => s.id === id);
      if (stateObj) {
        setSelectedId(id);
        onSelectState?.(stateObj);
      }
      return;
    }

    const loc = ALL_LOCATIONS.find(l => l.id === id);
    if (!loc) return;

    setSelectedId(id);
    onSelectLocation?.(loc);
    onClickDest?.(loc);

    // Rotate earth to center selected location
    if (earthGroupRef.current) {
      const lng = GPS[id]?.lng ?? loc.lng;
      const targetRot = -Math.PI / 2 - (lng * Math.PI / 180);

      let diff = targetRot - earthGroupRef.current.rotation.y;
      while (diff >  Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;

      isLockedRef.current = true;
      gsap.to(earthGroupRef.current.rotation, {
        y: earthGroupRef.current.rotation.y + diff,
        duration: 2.0,
        ease: 'power3.inOut',
      });
    }
  }, [onClickDest, onSelectLocation, isIndiaMode, onSelectState]);

  // Smooth camera positioning when both origin and destination are selected
  useEffect(() => {
    if (originId && destinationId && earthGroupRef.current) {
      const oCoord = getLocationCoord(originId);
      const dCoord = getLocationCoord(destinationId);
      if (oCoord && dCoord) {
        const midLng = (oCoord.lng + dCoord.lng) / 2;
        const targetRot = -Math.PI / 2 - (midLng * Math.PI / 180);

        let diff = targetRot - earthGroupRef.current.rotation.y;
        while (diff >  Math.PI) diff -= 2 * Math.PI;
        while (diff < -Math.PI) diff += 2 * Math.PI;

        isLockedRef.current = true;
        gsap.to(earthGroupRef.current.rotation, {
          y: earthGroupRef.current.rotation.y + diff,
          duration: 2.4,
          ease: 'power3.inOut',
        });
      }
    }
  }, [originId, destinationId]);

  const isMobileWindow = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas
        camera={{ 
          position: isIndiaMode ? [0, 0.25, 4.4] : isMobileWindow ? [0, 0.4, 9.2] : [0, 0.4, 7.2], 
          fov: isIndiaMode ? 38 : isMobileWindow ? 46 : 42 
        }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight     intensity={1.25} color="#ffffff" />
        <directionalLight position={[12, 10, 12]}  intensity={1.15} color="#ffffff" />
        <directionalLight position={[-10, -6, -8]} intensity={0.35} color="#38bdf8" />

        <Stars 
          radius={120} 
          depth={60} 
          count={5500} 
          factor={4.5} 
          saturation={0.1} 
          fade 
          speed={0.8} 
        />

        <EarthScene
          earthGroupRef={earthGroupRef}
          isLockedRef={isLockedRef}
          allMarkers={allMarkers}
          selectedId={selectedId}
          originId={originId}
          destinationId={destinationId}
          screenPosRef={screenPosRef}
        />

        <ZoomHandler
          trigger={zoomTrigger}
          isIndiaMode={isIndiaMode}
        />

        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={4.6}
          maxDistance={14.0}
          rotateSpeed={0.5}
          zoomSpeed={0.6}
          enableDamping
          dampingFactor={0.06}
          autoRotate={false}
          onStart={() => { isLockedRef.current = true; }}
        />
      </Canvas>

      <MarkersLayer
        screenPosRef={screenPosRef}
        allMarkers={allMarkers}
        hoveredId={hoveredId}
        selectedId={selectedId}
        originId={originId}
        destinationId={destinationId}
        onHover={handleHover}
        onClick={handleClick}
        isIndiaMode={isIndiaMode}
      />
    </div>
  );
};
