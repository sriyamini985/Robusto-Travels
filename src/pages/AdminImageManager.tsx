import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { 
  ArrowLeft, Upload, Settings, Image as ImageIcon, 
  CheckCircle, AlertTriangle, Search, Download, RefreshCw 
} from 'lucide-react';
import { ANDHRA_PRADESH_DATA } from '../data/india/states/andhraPradesh';
import { TELANGANA_DATA } from '../data/india/states/telangana';
import { ARUNACHAL_PRADESH_DATA } from '../data/india/states/arunachalPradesh';
import { ASSAM_DATA } from '../data/india/states/assam';
import { BIHAR_DATA } from '../data/india/states/bihar';
import { CHHATTISGARH_DATA } from '../data/india/states/chhattisgarh';
import { GOA_DATA } from '../data/india/states/goa';
import { GUJARAT_DATA } from '../data/india/states/gujarat';
import { HARYANA_DATA } from '../data/india/states/haryana';
import { HIMACHAL_DATA } from '../data/india/states/himachal-pradesh';
import { JHARKHAND_DATA } from '../data/india/states/jharkhand';
import { KARNATAKA_DATA } from '../data/india/states/karnataka';
import { KERALA_DATA } from '../data/india/states/kerala';
import { MADHYA_PRADESH_DATA } from '../data/india/states/madhya-pradesh';
import { MAHARASHTRA_DATA } from '../data/india/states/maharashtra';
import { MANIPUR_DATA } from '../data/india/states/manipur';
import { MEGHALAYA_DATA } from '../data/india/states/meghalaya';
import { MIZORAM_DATA } from '../data/india/states/mizoram';
import { NAGALAND_DATA } from '../data/india/states/nagaland';
import { ODISHA_DATA } from '../data/india/states/odisha';
import { PUNJAB_DATA } from '../data/india/states/punjab';

// Combine built states for the dropdown selection
const STATES_REGISTRY: Record<string, any> = {
  'andhra-pradesh': ANDHRA_PRADESH_DATA,
  'telangana': TELANGANA_DATA,
  'arunachal-pradesh': ARUNACHAL_PRADESH_DATA,
  'assam': ASSAM_DATA,
  'bihar': BIHAR_DATA,
  'chhattisgarh': CHHATTISGARH_DATA,
  'goa': GOA_DATA,
  'gujarat': GUJARAT_DATA,
  'haryana': HARYANA_DATA,
  'himachal-pradesh': HIMACHAL_DATA,
  'jharkhand': JHARKHAND_DATA,
  'karnataka': KARNATAKA_DATA,
  'kerala': KERALA_DATA,
  'madhya-pradesh': MADHYA_PRADESH_DATA,
  'maharashtra': MAHARASHTRA_DATA,
  'manipur': MANIPUR_DATA,
  'meghalaya': MEGHALAYA_DATA,
  'mizoram': MIZORAM_DATA,
  'nagaland': NAGALAND_DATA,
  'odisha': ODISHA_DATA,
  'punjab': PUNJAB_DATA
};

interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
  folder: string;
}

export const AdminImageManager: React.FC = () => {
  const { navigateTo } = useNavigation();

  // Selected State and Attraction
  const [selectedStateId, setSelectedStateId] = useState<string>('assam');
  const [selectedAttractionSlug, setSelectedAttractionSlug] = useState<string>('kaziranga-national-park');

  // Credentials and Config
  const [unsplashAccessKey, setUnsplashAccessKey] = useState<string>(() => {
    return localStorage.getItem('rt_unsplash_access_key') || '';
  });
  const [cloudinaryConfig, setCloudinaryConfig] = useState<CloudinaryConfig>(() => {
    const saved = localStorage.getItem('rt_cloudinary_config');
    return saved ? JSON.parse(saved) : { cloudName: '', uploadPreset: '', folder: 'robusto-travels' };
  });

  const [showSettings, setShowSettings] = useState<boolean>(false);

  // Candidates & Search
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [candidates, setCandidates] = useState<Array<{ id: string; url: string; thumb: string; author: string }>>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [customImageUrl, setCustomImageUrl] = useState<string>('');

  // Assignments
  const [heroImage, setHeroImage] = useState<string>('');
  const [galleryImages, setGalleryImages] = useState<string[]>(['', '', '', '', '']);

  // Loading & Success statuses
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Retrieve selected state and attraction objects
  const currentState = STATES_REGISTRY[selectedStateId] || ASSAM_DATA;
  const currentAttraction = currentState.famousPlaces.find(
    (p: any) => p.slug === selectedAttractionSlug
  ) || currentState.famousPlaces[0];

  // Set default search query whenever attraction changes
  useEffect(() => {
    if (currentAttraction) {
      const stateName = currentState.name;
      // Build specific query as per the rules
      const specificQuery = `${currentAttraction.name} ${stateName} India`;
      setSearchQuery(specificQuery);
      
      // Load current assignments
      setHeroImage(currentAttraction.image || '');
      const gall = [...(currentAttraction.gallery || [])];
      while (gall.length < 5) gall.push('');
      setGalleryImages(gall.slice(0, 5));
    }
  }, [selectedAttractionSlug, selectedStateId]);

  // Save config to localStorage
  const saveSettings = () => {
    localStorage.setItem('rt_unsplash_access_key', unsplashAccessKey);
    localStorage.setItem('rt_cloudinary_config', JSON.stringify(cloudinaryConfig));
    setNotification({ type: 'success', message: 'Settings saved successfully!' });
    setTimeout(() => setNotification(null), 3000);
    setShowSettings(false);
  };

  // Search candidate images from Unsplash API
  const searchImages = async () => {
    if (!unsplashAccessKey) {
      // Fallback: Populate mock beautiful high-res category-matched photos
      setNotification({ 
        type: 'error', 
        message: 'No Unsplash Access Key configured. Displaying premium fallback candidates.' 
      });
      setTimeout(() => setNotification(null), 5000);
      
      const category = currentAttraction.category.toLowerCase();
      let fallbacks = [
        'https://images.unsplash.com/photo-1598091857921-12f5a0459c5d',
        'https://images.unsplash.com/photo-1626602411112-10742f9a3ab8',
        'https://images.unsplash.com/photo-1589656966895-2f33e7653819',
        'https://images.unsplash.com/photo-1547407139-3c921a66005c',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470'
      ];
      if (category.includes('temple') || category.includes('shrine')) {
        fallbacks = [
          'https://images.unsplash.com/photo-1605649487212-47bdab064df7',
          'https://images.unsplash.com/photo-1545205597-3d9d02c29597',
          'https://images.unsplash.com/photo-1623947477610-d866a4bc2e30',
          'https://images.unsplash.com/photo-1616046229478-9901c5536a45',
          'https://images.unsplash.com/photo-1561361513-2d000a50f0db',
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
        ];
      }
      setCandidates(fallbacks.map((url, index) => ({
        id: `mock-${index}`,
        url: `${url}?auto=format&fit=crop&q=80&w=1200`,
        thumb: `${url}?auto=format&fit=crop&q=80&w=400`,
        author: 'Verified Tourism Source'
      })));
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=12&query=${encodeURIComponent(searchQuery)}&client_id=${unsplashAccessKey}`
      );
      if (!response.ok) throw new Error('Failed to fetch from Unsplash. Check Access Key.');
      const data = await response.json();
      const results = data.results.map((img: any) => ({
        id: img.id,
        url: img.urls.regular,
        thumb: img.urls.small,
        author: img.user.name
      }));
      setCandidates(results);
    } catch (err: any) {
      setNotification({ type: 'error', message: err.message });
      setTimeout(() => setNotification(null), 4000);
    } finally {
      setIsSearching(false);
    }
  };

  // Add custom URL manually
  const addCustomUrl = () => {
    if (!customImageUrl) return;
    setCandidates(prev => [
      { id: `custom-${Date.now()}`, url: customImageUrl, thumb: customImageUrl, author: 'Custom Input' },
      ...prev
    ]);
    setCustomImageUrl('');
  };

  // Assign image to Hero or Gallery slot
  const assignImage = (url: string, slot: 'hero' | number) => {
    if (slot === 'hero') {
      setHeroImage(url);
    } else {
      const newGall = [...galleryImages];
      newGall[slot] = url;
      setGalleryImages(newGall);
    }
  };

  // Upload an image to Cloudinary via unsigned upload
  const uploadToCloudinary = async (imageUrl: string, folderName: string): Promise<string> => {
    if (!cloudinaryConfig.cloudName || !cloudinaryConfig.uploadPreset) {
      // If not configured, return the direct URL directly
      return imageUrl;
    }

    const formData = new FormData();
    formData.append('file', imageUrl);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);
    formData.append('folder', folderName);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
      { method: 'POST', body: formData }
    );
    if (!res.ok) {
      throw new Error(`Cloudinary upload failed: ${res.statusText}`);
    }
    const data = await res.json();
    return data.secure_url;
  };

  // Upload and Save all assignments
  const handleSaveAndUpload = async () => {
    setIsUploading(true);
    setNotification(null);

    try {
      const folderPath = `${cloudinaryConfig.folder || 'robusto-travels'}/${selectedStateId}/${selectedAttractionSlug}`;
      
      console.log('Uploading Hero Image to Cloudinary...');
      let finalHero = heroImage;
      if (heroImage && !heroImage.includes('cloudinary.com')) {
        finalHero = await uploadToCloudinary(heroImage, folderPath);
      }

      console.log('Uploading Gallery Images to Cloudinary...');
      const finalGallery: string[] = [];
      for (let i = 0; i < galleryImages.length; i++) {
        const img = galleryImages[i];
        if (img) {
          if (img.includes('cloudinary.com')) {
            finalGallery.push(img);
          } else {
            const uploaded = await uploadToCloudinary(img, folderPath);
            finalGallery.push(uploaded);
          }
        }
      }

      // Apply changes to the active state model
      const placeIndex = currentState.famousPlaces.findIndex((p: any) => p.slug === selectedAttractionSlug);
      if (placeIndex !== -1) {
        currentState.famousPlaces[placeIndex].image = finalHero;
        currentState.famousPlaces[placeIndex].gallery = finalGallery;
      }

      // Save assignments to state
      setHeroImage(finalHero);
      setGalleryImages([...finalGallery, '', '', '', '', ''].slice(0, 5));

      setNotification({ 
        type: 'success', 
        message: 'Destination Image Configuration approved and saved locally!' 
      });
      setTimeout(() => setNotification(null), 5000);
    } catch (err: any) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setIsUploading(false);
    }
  };

  // Download the fully updated state JSON database
  const downloadStateJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${selectedStateId}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#090d16', color: '#fff', paddingTop: '100px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button 
              onClick={() => navigateTo('landing')}
              style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Destination Image Manager</h1>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>Manually approve and upload destination-specific images to Cloudinary</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '10px 16px', color: '#fff', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}
            >
              <Settings size={16} /> API Settings
            </button>
            <button 
              onClick={downloadStateJson}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#10b981', border: 'none', borderRadius: '10px', padding: '10px 16px', color: '#fff', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}
            >
              <Download size={16} /> Export JSON
            </button>
          </div>
        </div>

        {/* Notification banner */}
        {notification && (
          <div style={{ 
            background: notification.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            border: `1px solid ${notification.type === 'success' ? '#10b981' : '#ef4444'}`,
            borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px'
          }}>
            {notification.type === 'success' ? <CheckCircle size={20} color="#10b981" /> : <AlertTriangle size={20} color="#ef4444" />}
            <span style={{ fontSize: '0.9rem', fontWeight: 500, color: notification.type === 'success' ? '#34d399' : '#f87171' }}>
              {notification.message}
            </span>
          </div>
        )}

        {/* Settings Panel */}
        {showSettings && (
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', marginBottom: '30px', animation: 'fadeIn 0.3s ease' }}>
            <h3 style={{ margin: '0 0 16px', fontSize: '1.1rem', fontWeight: 700 }}>Integrations Config</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px', fontWeight: 600 }}>Unsplash Access Key</label>
                <input 
                  type="password"
                  value={unsplashAccessKey}
                  onChange={(e) => setUnsplashAccessKey(e.target.value)}
                  placeholder="Paste Unsplash Access Key"
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px', fontWeight: 600 }}>Cloudinary Cloud Name</label>
                <input 
                  type="text"
                  value={cloudinaryConfig.cloudName}
                  onChange={(e) => setCloudinaryConfig({ ...cloudinaryConfig, cloudName: e.target.value })}
                  placeholder="e.g. robustotravels"
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '8px', fontWeight: 600 }}>Cloudinary Upload Preset</label>
                <input 
                  type="text"
                  value={cloudinaryConfig.uploadPreset}
                  onChange={(e) => setCloudinaryConfig({ ...cloudinaryConfig, uploadPreset: e.target.value })}
                  placeholder="e.g. ml_default"
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button 
                onClick={() => setShowSettings(false)}
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', color: '#fff', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={saveSettings}
                style={{ background: '#3b82f6', border: 'none', borderRadius: '8px', padding: '8px 16px', color: '#fff', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Save Configuration
              </button>
            </div>
          </div>
        )}

        {/* Selection & Search Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 2fr', gap: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', marginBottom: '30px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: '6px', fontWeight: 600, textTransform: 'uppercase' }}>Select State</label>
            <select 
              value={selectedStateId}
              onChange={(e) => {
                setSelectedStateId(e.target.value);
                const nextState = STATES_REGISTRY[e.target.value];
                setSelectedAttractionSlug(nextState.famousPlaces[0].slug);
              }}
              style={{ width: '100%', padding: '12px', background: '#0e1526', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}
            >
              <option value="assam">Assam</option>
              <option value="andhra-pradesh">Andhra Pradesh</option>
              <option value="telangana">Telangana</option>
              <option value="arunachal-pradesh">Arunachal Pradesh</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: '6px', fontWeight: 600, textTransform: 'uppercase' }}>Select Attraction</label>
            <select 
              value={selectedAttractionSlug}
              onChange={(e) => setSelectedAttractionSlug(e.target.value)}
              style={{ width: '100%', padding: '12px', background: '#0e1526', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}
            >
              {currentState.famousPlaces.map((place: any) => (
                <option key={place.slug} value={place.slug}>{place.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginBottom: '6px', fontWeight: 600, textTransform: 'uppercase' }}>Search Query (Rule-Enforced)</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ flex: 1, padding: '12px 16px', background: '#0e1526', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', color: '#fff', fontSize: '0.9rem' }}
              />
              <button 
                onClick={searchImages}
                disabled={isSearching}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#3b82f6', border: 'none', borderRadius: '10px', padding: '0 20px', color: '#fff', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {isSearching ? <RefreshCw size={16} className="spin-rt" /> : <Search size={16} />}
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Main Work Area */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1.5fr', gap: '30px' }}>
          
          {/* Candidates Grid */}
          <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>Candidate Images</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text"
                  placeholder="Paste direct JPG image URL..."
                  value={customImageUrl}
                  onChange={(e) => setCustomImageUrl(e.target.value)}
                  style={{ width: '260px', padding: '8px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', color: '#fff', fontSize: '0.8rem' }}
                />
                <button 
                  onClick={addCustomUrl}
                  style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px', padding: '8px 12px', color: '#fff', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  Add URL
                </button>
              </div>
            </div>

            {candidates.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 0', border: '2px dashed rgba(255,255,255,0.08)', borderRadius: '12px' }}>
                <ImageIcon size={48} style={{ opacity: 0.2, marginBottom: '16px' }} />
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>No candidate images fetched yet. Click "Search" above to load.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
                {candidates.map((img) => (
                  <div key={img.id} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s' }}>
                    <div style={{ position: 'relative', width: '100%', height: '140px' }}>
                      <img 
                        src={img.thumb} 
                        alt="candidate"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <span style={{ position: 'absolute', bottom: '6px', left: '6px', background: 'rgba(0,0,0,0.6)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)' }}>
                        By {img.author.substring(0, 15)}
                      </span>
                    </div>
                    <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <button 
                        onClick={() => assignImage(img.url, 'hero')}
                        style={{ width: '100%', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '6px', padding: '6px', color: '#93c5fd', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
                      >
                        Set as Hero
                      </button>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px' }}>
                        {[0, 1, 2, 3, 4].map(idx => (
                          <button
                            key={idx}
                            onClick={() => assignImage(img.url, idx)}
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '4px 0', color: '#fff', fontSize: '0.7rem', fontWeight: 600, cursor: 'pointer' }}
                            title={`Assign to Gallery ${idx + 1}`}
                          >
                            G{idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Active Assignments and Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Action buttons */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '20px' }}>
              <button 
                onClick={handleSaveAndUpload}
                disabled={isUploading}
                style={{ 
                  width: '100%', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
                  background: isUploading ? 'rgba(59, 130, 246, 0.5)' : '#3b82f6', 
                  border: 'none', borderRadius: '10px', padding: '14px', 
                  color: '#fff', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer'
                }}
              >
                {isUploading ? <RefreshCw size={18} className="spin-rt" /> : <Upload size={18} />}
                {cloudinaryConfig.cloudName ? 'Upload to Cloudinary & Approve' : 'Save Assignments Locally'}
              </button>
            </div>

            {/* Assignments List */}
            <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 16px' }}>Current Mappings</h3>
              
              {/* Hero Item */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '6px', fontWeight: 600 }}>Hero Image</label>
                {heroImage ? (
                  <div style={{ position: 'relative', width: '100%', height: '110px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img src={heroImage} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button 
                      onClick={() => setHeroImage('')}
                      style={{ position: 'absolute', top: '6px', right: '6px', background: 'rgba(239, 68, 68, 0.8)', border: 'none', borderRadius: '4px', padding: '2px 6px', color: '#fff', fontSize: '0.65rem', cursor: 'pointer' }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div style={{ padding: '24px 0', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
                    No Hero Image Assigned (Failsafe placeholder active)
                  </div>
                )}
              </div>

              {/* Gallery Items */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', fontWeight: 600 }}>Gallery Images (Max 5)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {galleryImages.map((img, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '6px', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, width: '20px', textAlign: 'center', opacity: 0.5 }}>{idx + 1}</span>
                      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '0.75rem', color: img ? '#60a5fa' : 'rgba(255,255,255,0.3)' }}>
                        {img ? img : 'Empty Slot'}
                      </div>
                      {img && (
                        <button 
                          onClick={() => {
                            const newGall = [...galleryImages];
                            newGall[idx] = '';
                            setGalleryImages(newGall);
                          }}
                          style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '0.7rem', fontWeight: 600, cursor: 'pointer', padding: '4px' }}
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
      
      <style>{`
        .spin-rt {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
