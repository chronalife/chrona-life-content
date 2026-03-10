import {
  TRAVEL_DESTINATION_IDS,
  TRAVEL_DURATION_IDS,
  TRAVEL_LODGING_TIERS,
  TRAVEL_TRANSPORT_IDS,
  type TravelDestinationDefinition,
  type TravelDestinationId,
  type TravelDurationDefinition,
  type TravelDurationId,
  type TravelLodgingDefinition,
  type TravelLodgingTier,
  type TravelTransportDefinition,
  type TravelTransportId,
} from './types';

export const travelTransports: TravelTransportDefinition[] = [
  {
    id: 'economy_flight',
    name: 'Economy Flight',
    subtitle: 'Cheap seats, crowded terminals',
    multiplier: 1,
    minAge: 12,
    fatigueImpact: 14,
    brandExposure: 2,
  },
  {
    id: 'business_flight',
    name: 'Business Flight',
    subtitle: 'Priority boarding and lounge access',
    multiplier: 1.4,
    minAge: 12,
    fatigueImpact: 9,
    brandExposure: 4,
  },
  {
    id: 'first_flight',
    name: 'First-Class Flight',
    subtitle: 'Luxury cabin and concierge treatment',
    multiplier: 1.95,
    minAge: 12,
    fatigueImpact: 6,
    brandExposure: 8,
  },
  {
    id: 'train',
    name: 'Rail Journey',
    subtitle: 'Scenic routes and city-center arrivals',
    multiplier: 0.82,
    minAge: 12,
    fatigueImpact: 8,
    brandExposure: 1,
  },
  {
    id: 'road_trip',
    name: 'Road Trip',
    subtitle: 'DIY route with flexible stops',
    multiplier: 0.72,
    minAge: 12,
    fatigueImpact: 12,
    brandExposure: 1,
  },
  {
    id: 'cruise',
    name: 'Cruise Liner',
    subtitle: 'Floating resort with curated excursions',
    multiplier: 1.28,
    minAge: 16,
    fatigueImpact: 5,
    brandExposure: 5,
  },
  {
    id: 'private_jet',
    name: 'Private Jet',
    subtitle: 'VIP transport and high-status optics',
    multiplier: 3.2,
    minAge: 18,
    fatigueImpact: 3,
    brandExposure: 16,
  },
];

export const travelLodgingTiers: TravelLodgingDefinition[] = [
  {
    id: 'budget',
    name: 'Budget Stay',
    subtitle: 'Hostels and basic hotels',
    multiplier: 0.72,
    comfort: 24,
  },
  {
    id: 'standard',
    name: 'Standard Stay',
    subtitle: 'Reliable mid-tier hotels',
    multiplier: 1,
    comfort: 45,
  },
  {
    id: 'premium',
    name: 'Premium Stay',
    subtitle: 'Upscale properties and better service',
    multiplier: 1.42,
    comfort: 68,
  },
  {
    id: 'luxury',
    name: 'Luxury Stay',
    subtitle: 'Flagship suites and elite amenities',
    multiplier: 2.1,
    comfort: 88,
  },
];

export const travelDurations: TravelDurationDefinition[] = [
  {
    id: 'weekend',
    name: 'Weekend',
    subtitle: '2-3 days and 2 local experiences',
    multiplier: 0.58,
    actions: 2,
    fatigueImpact: 4,
  },
  {
    id: 'week',
    name: 'One Week',
    subtitle: 'Balanced trip with 4 experiences',
    multiplier: 1,
    actions: 4,
    fatigueImpact: 10,
  },
  {
    id: 'grand_tour',
    name: 'Grand Tour',
    subtitle: 'Long-form trip with 6 experiences',
    multiplier: 1.65,
    actions: 6,
    fatigueImpact: 18,
  },
];

const buildActivities = (base: {
  culture: string;
  food: string;
  nightlife: string;
  wellness: string;
  adventure: string;
  premium: string;
}): TravelDestinationDefinition['activities'] => [
  {
    id: 'local_culture_walk',
    title: base.culture,
    summary: 'Guided cultural immersion with local experts.',
    cost: 340,
    risk: 'low',
    statDelta: { happiness: 4, smarts: 2 },
    relationshipDeltaRange: [1, 3],
    fameDeltaRange: [0, 2],
    burnoutDelta: -1,
    sleepDebtDelta: 0,
    recoveryMomentumDelta: 2,
    riskEvents: ['scam'],
  },
  {
    id: 'food_crawl',
    title: base.food,
    summary: 'Signature food tour through top neighborhood spots.',
    cost: 420,
    risk: 'low',
    statDelta: { happiness: 3, looks: 1 },
    relationshipDeltaRange: [0, 3],
    fameDeltaRange: [0, 2],
    burnoutDelta: 0,
    sleepDebtDelta: 1,
    recoveryMomentumDelta: 1,
    riskEvents: ['theft'],
  },
  {
    id: 'night_scene',
    title: base.nightlife,
    summary: 'High-energy nightlife circuit with VIP options.',
    cost: 760,
    risk: 'medium',
    statDelta: { happiness: 4, looks: 2 },
    relationshipDeltaRange: [-2, 3],
    fameDeltaRange: [1, 6],
    burnoutDelta: 4,
    sleepDebtDelta: 6,
    recoveryMomentumDelta: -2,
    riskEvents: ['theft', 'public_controversy', 'viral_moment'],
  },
  {
    id: 'recovery_day',
    title: base.wellness,
    summary: 'Reset day focused on recovery and wellness.',
    cost: 520,
    risk: 'low',
    statDelta: { health: 4, happiness: 2 },
    relationshipDeltaRange: [0, 2],
    fameDeltaRange: [0, 1],
    burnoutDelta: -5,
    sleepDebtDelta: -4,
    recoveryMomentumDelta: 5,
    riskEvents: ['transport_disruption'],
  },
  {
    id: 'adventure_block',
    title: base.adventure,
    summary: 'Guided high-thrill adventure experience.',
    cost: 880,
    risk: 'high',
    statDelta: { health: 1, happiness: 5 },
    relationshipDeltaRange: [-1, 4],
    fameDeltaRange: [1, 5],
    burnoutDelta: 3,
    sleepDebtDelta: 2,
    recoveryMomentumDelta: 0,
    riskEvents: ['injury', 'transport_disruption', 'viral_moment'],
  },
  {
    id: 'premium_showcase',
    title: base.premium,
    summary: 'Flagship premium experience designed for status and photos.',
    cost: 1480,
    risk: 'medium',
    statDelta: { happiness: 3, looks: 2, smarts: 1 },
    relationshipDeltaRange: [-1, 3],
    fameDeltaRange: [3, 10],
    burnoutDelta: 2,
    sleepDebtDelta: 3,
    recoveryMomentumDelta: -1,
    riskEvents: ['scam', 'public_controversy', 'viral_moment'],
  },
];

export const travelDestinations: TravelDestinationDefinition[] = [
  {
    id: 'rio_brazil',
    name: 'Rio Escape',
    countryId: 'br',
    city: 'Rio de Janeiro',
    imageHint: 'beach skyline and mountains',
    flavor: 'Beach energy, football passion, samba nightlife, and dramatic landscapes.',
    bestSeason: 'December to March',
    basePackageCost: 4200,
    baseRiskIndex: 38,
    brandVisibility: 64,
    activities: buildActivities({
      culture: 'Samba District Tour',
      food: 'Boteco Flavor Crawl',
      nightlife: 'Lapa Night Run',
      wellness: 'Copacabana Recovery Day',
      adventure: 'Hang Gliding Session',
      premium: 'Helicopter + Yacht Circuit',
    }),
  },
  {
    id: 'paris_france',
    name: 'Paris Circuit',
    countryId: 'fr',
    city: 'Paris',
    imageHint: 'historic avenues and river lights',
    flavor: 'Classic architecture, high fashion, and elite culinary culture.',
    bestSeason: 'April to June',
    basePackageCost: 5300,
    baseRiskIndex: 24,
    brandVisibility: 78,
    activities: buildActivities({
      culture: 'Museum Deep Dive',
      food: 'Left Bank Tasting Route',
      nightlife: 'Paris After-Hours Circuit',
      wellness: 'Seine Spa Day',
      adventure: 'Catacombs Expedition',
      premium: 'Couture Atelier Access',
    }),
  },
  {
    id: 'tokyo_japan',
    name: 'Tokyo Pulse',
    countryId: 'jp',
    city: 'Tokyo',
    imageHint: 'neon streets and temples',
    flavor: 'Hyper-modern districts blended with deep tradition and precision service.',
    bestSeason: 'March to May',
    basePackageCost: 6100,
    baseRiskIndex: 19,
    brandVisibility: 72,
    activities: buildActivities({
      culture: 'Temple + Tech Contrast Tour',
      food: 'Night Market Tasting Route',
      nightlife: 'Shibuya Night Sprint',
      wellness: 'Onsen Recovery Session',
      adventure: 'Urban Drift Experience',
      premium: 'Private Sushi Counter Session',
    }),
  },
  {
    id: 'london_uk',
    name: 'London Run',
    countryId: 'uk',
    city: 'London',
    imageHint: 'historic core with modern skyline',
    flavor: 'Global finance, football culture, and relentless city pace.',
    bestSeason: 'May to September',
    basePackageCost: 5600,
    baseRiskIndex: 27,
    brandVisibility: 70,
    activities: buildActivities({
      culture: 'Royal District Walkthrough',
      food: 'Global Borough Food Crawl',
      nightlife: 'Soho Midnight Route',
      wellness: 'Thames Reset Day',
      adventure: 'Stadium Tunnel Challenge',
      premium: 'Mayfair Private Members Night',
    }),
  },
  {
    id: 'barcelona_spain',
    name: 'Barcelona Wave',
    countryId: 'es',
    city: 'Barcelona',
    imageHint: 'coastal city and iconic architecture',
    flavor: 'Mediterranean rhythm with creative architecture and football prestige.',
    bestSeason: 'May to July',
    basePackageCost: 5000,
    baseRiskIndex: 29,
    brandVisibility: 68,
    activities: buildActivities({
      culture: 'Gaudi Legacy Route',
      food: 'Tapas Quarter Crawl',
      nightlife: 'Beach Club Circuit',
      wellness: 'Mediterranean Recharge Day',
      adventure: 'Cliffline E-Bike Push',
      premium: 'Private Club Box Night',
    }),
  },
  {
    id: 'cancun_mexico',
    name: 'Cancun Break',
    countryId: 'mx',
    city: 'Cancun',
    imageHint: 'resort beaches and turquoise water',
    flavor: 'Resort comfort, nightlife spikes, and warm-water recovery.',
    bestSeason: 'November to April',
    basePackageCost: 3600,
    baseRiskIndex: 36,
    brandVisibility: 62,
    activities: buildActivities({
      culture: 'Mayan Sites Day Trip',
      food: 'Local Cantina Tasting Loop',
      nightlife: 'Hotel Zone Night Crawl',
      wellness: 'Beachfront Recovery Day',
      adventure: 'Reef Dive Challenge',
      premium: 'Catamaran + Chef Tasting',
    }),
  },
  {
    id: 'cape_town_south_africa',
    name: 'Cape Town Expedition',
    countryId: 'za',
    city: 'Cape Town',
    imageHint: 'mountain backdrop and ocean coast',
    flavor: 'Outdoor intensity, coastal beauty, and evolving global culture scenes.',
    bestSeason: 'November to March',
    basePackageCost: 4700,
    baseRiskIndex: 34,
    brandVisibility: 57,
    activities: buildActivities({
      culture: 'District Heritage Circuit',
      food: 'Waterfront Food Passage',
      nightlife: 'Long Street Pulse',
      wellness: 'Ocean Recovery Protocol',
      adventure: 'Table Mountain Push',
      premium: 'Private Safari Connector',
    }),
  },
  {
    id: 'sydney_australia',
    name: 'Sydney Loop',
    countryId: 'au',
    city: 'Sydney',
    imageHint: 'harbor skyline and surf coastline',
    flavor: 'Harbor-city prestige, surf culture, and strong luxury travel options.',
    bestSeason: 'September to November',
    basePackageCost: 6400,
    baseRiskIndex: 22,
    brandVisibility: 66,
    activities: buildActivities({
      culture: 'Harbor Heritage Walk',
      food: 'Coastal Market Tasting Route',
      nightlife: 'Rooftop Circuit Night',
      wellness: 'Bondi Recovery Reset',
      adventure: 'Open Water Challenge',
      premium: 'Harbor VIP Charter',
    }),
  },
];

export function getTravelTransportById(id: TravelTransportId): TravelTransportDefinition {
  return travelTransports.find((entry) => entry.id === id) ?? travelTransports[0];
}

export function getTravelLodgingById(id: TravelLodgingTier): TravelLodgingDefinition {
  return travelLodgingTiers.find((entry) => entry.id === id) ?? travelLodgingTiers[1];
}

export function getTravelDurationById(id: TravelDurationId): TravelDurationDefinition {
  return travelDurations.find((entry) => entry.id === id) ?? travelDurations[1];
}

export function getTravelDestinationById(id: TravelDestinationId): TravelDestinationDefinition {
  return travelDestinations.find((entry) => entry.id === id) ?? travelDestinations[0];
}

export function isTravelDestinationId(value: string): value is TravelDestinationId {
  return TRAVEL_DESTINATION_IDS.includes(value as TravelDestinationId);
}

export function isTravelTransportId(value: string): value is TravelTransportId {
  return TRAVEL_TRANSPORT_IDS.includes(value as TravelTransportId);
}

export function isTravelLodgingTier(value: string): value is TravelLodgingTier {
  return TRAVEL_LODGING_TIERS.includes(value as TravelLodgingTier);
}

export function isTravelDurationId(value: string): value is TravelDurationId {
  return TRAVEL_DURATION_IDS.includes(value as TravelDurationId);
}
