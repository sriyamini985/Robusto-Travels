import switzerland from './switzerland.json';
import japan from './japan.json';
import italy from './italy.json';
import dubai from './dubai.json';
import bali from './bali.json';
import maldives from './maldives.json';
import singapore from './singapore.json';
import thailand from './thailand.json';
import france from './france.json';
import australia from './australia.json';
import usa from './usa.json';
import turkey from './turkey.json';
import india from './india.json';
import egypt from './egypt.json';
import greece from './greece.json';
import brazil from './brazil.json';
import uk from './uk.json';
import southAfrica from './south-africa.json';
import spain from './spain.json';
import canada from './canada.json';

export const countryDataRegistry: Record<string, any> = {
  switzerland,
  japan,
  italy,
  dubai,
  bali,
  maldives,
  singapore,
  thailand,
  france,
  australia,
  usa,
  turkey,
  india,
  egypt,
  greece,
  brazil,
  uk,
  'south-africa': southAfrica,
  spain,
  canada,
};

export const getCountryData = (slug: string) => {
  // Normalize slug mapping e.g., 'switzerland-luxury' -> 'switzerland'
  const normalized = slug.toLowerCase().replace('-luxury', '');
  return countryDataRegistry[normalized] || countryDataRegistry['switzerland'];
};
