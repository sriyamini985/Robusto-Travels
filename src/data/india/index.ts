import { ALL_INDIAN_STATES } from './statesData';
import { ANDHRA_PRADESH_DATA, type AndhraPradeshStateData } from './states/andhraPradesh';
import { TELANGANA_DATA, type TelanganaStateData } from './states/telangana';
import { ARUNACHAL_PRADESH_DATA, type ArunachalPradeshStateData } from './states/arunachalPradesh';

export type StateFullData = AndhraPradeshStateData | TelanganaStateData | ArunachalPradeshStateData;

// State Registry containing built & approved state modules
const BUILT_STATES_REGISTRY: Record<string, StateFullData> = {
  'andhra-pradesh': ANDHRA_PRADESH_DATA,
  'telangana': TELANGANA_DATA,
  'arunachal-pradesh': ARUNACHAL_PRADESH_DATA
};

export const getStateData = (stateId: string): StateFullData => {
  const cleanId = stateId.toLowerCase().replace(/[^a-z0-9-]/g, '');

  // If state is built and verified (e.g. Andhra Pradesh, Telangana, Arunachal Pradesh)
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
    about: `${stateMeta.name} travel module is currently pending state-by-state approval. Focus is currently on completed states (Andhra Pradesh, Telangana, Arunachal Pradesh).`,
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
