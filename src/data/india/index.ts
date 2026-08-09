import { ALL_INDIAN_STATES } from './statesData';
import { ANDHRA_PRADESH_DATA, type AndhraPradeshStateData } from './states/andhraPradesh';
import { TELANGANA_DATA, type TelanganaStateData } from './states/telangana';
import { ARUNACHAL_PRADESH_DATA, type ArunachalPradeshStateData } from './states/arunachalPradesh';
import { ASSAM_DATA, type AssamStateData } from './states/assam';
import { BIHAR_DATA, type BiharStateData } from './states/bihar';
import { CHHATTISGARH_DATA, type ChhattisgarhStateData } from './states/chhattisgarh';
import { GOA_DATA, type GoaStateData } from './states/goa';
import { GUJARAT_DATA, type GujaratStateData } from './states/gujarat';
import { HARYANA_DATA, type HaryanaStateData } from './states/haryana';
import { HIMACHAL_DATA, type HimachalStateData } from './states/himachal-pradesh';
import { JHARKHAND_DATA, type JharkhandStateData } from './states/jharkhand';
import { KARNATAKA_DATA, type KarnatakaStateData } from './states/karnataka';
import { KERALA_DATA, type KeralaStateData } from './states/kerala';
import { MADHYA_PRADESH_DATA, type MadhyaPradeshStateData } from './states/madhya-pradesh';
import { MAHARASHTRA_DATA, type MaharashtraStateData } from './states/maharashtra';
import { MANIPUR_DATA, type ManipurStateData } from './states/manipur';
import { MEGHALAYA_DATA, type MeghalayaStateData } from './states/meghalaya';

export type StateFullData = AndhraPradeshStateData | TelanganaStateData | ArunachalPradeshStateData | AssamStateData | BiharStateData | ChhattisgarhStateData | GoaStateData | GujaratStateData | HaryanaStateData | HimachalStateData | JharkhandStateData | KarnatakaStateData | KeralaStateData | MadhyaPradeshStateData | MaharashtraStateData | ManipurStateData | MeghalayaStateData;

// State Registry containing built & approved state modules
const BUILT_STATES_REGISTRY: Record<string, StateFullData> = {
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
  'meghalaya': MEGHALAYA_DATA
};

export const getStateData = (stateId: string): StateFullData => {
  const cleanId = stateId.toLowerCase().replace(/[^a-z0-9-]/g, '');

  // If state is built and verified
  if (BUILT_STATES_REGISTRY[cleanId]) {
    return BUILT_STATES_REGISTRY[cleanId];
  }

  // Fallback for unbuilt states: return a clean placeholder stub explicitly marked for State-by-State development
  const stateMeta = ALL_INDIAN_STATES.find(s => s.id === cleanId) || ALL_INDIAN_STATES[0];

  return {
    id: stateMeta.id,
    name: stateMeta.name,
    type: 'State',
    capital: stateMeta.capital,
    tagline: stateMeta.tagline,
    heroImage: stateMeta.heroImage,
    about: `${stateMeta.name} travel module is currently pending state-by-state approval. Focus is currently on completed states (Andhra Pradesh, Telangana, Arunachal Pradesh, Assam).`,
    bestTime: stateMeta.bestTime,
    climate: 'Information currently undergoing state-by-state quality verification.',
    famousFood: stateMeta.famousFood,
    culture: 'Rich cultural heritage undergoing step-by-step review and approval.',
    famousPlaces: [
      {
        name: `${stateMeta.name} Destination Module Coming Soon`,
        slug: `${stateMeta.id}-coming-soon`,
        category: 'Under State Review',
        image: '',
        overview: `${stateMeta.name} is scheduled for individual verification following approval of active state modules.`,
        rating: 5.0
      }
    ]
  };
};
