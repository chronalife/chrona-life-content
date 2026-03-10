export const TRAVEL_TRANSPORT_IDS = [
  'economy_flight',
  'business_flight',
  'first_flight',
  'train',
  'road_trip',
  'cruise',
  'private_jet',
] as const;
export type TravelTransportId = (typeof TRAVEL_TRANSPORT_IDS)[number];

export const TRAVEL_LODGING_TIERS = ['budget', 'standard', 'premium', 'luxury'] as const;
export type TravelLodgingTier = (typeof TRAVEL_LODGING_TIERS)[number];

export const TRAVEL_DURATION_IDS = ['weekend', 'week', 'grand_tour'] as const;
export type TravelDurationId = (typeof TRAVEL_DURATION_IDS)[number];

export const TRAVEL_DESTINATION_IDS = [
  'rio_brazil',
  'paris_france',
  'tokyo_japan',
  'london_uk',
  'barcelona_spain',
  'cancun_mexico',
  'cape_town_south_africa',
  'sydney_australia',
] as const;
export type TravelDestinationId = (typeof TRAVEL_DESTINATION_IDS)[number];

export const TRAVEL_RISK_EVENT_TYPES = [
  'theft',
  'injury',
  'transport_disruption',
  'scam',
  'public_controversy',
  'viral_moment',
] as const;
export type TravelRiskEventType = (typeof TRAVEL_RISK_EVENT_TYPES)[number];

export type TravelActivityRisk = 'low' | 'medium' | 'high';

export type TravelStatDelta = {
  health?: number;
  happiness?: number;
  smarts?: number;
  looks?: number;
};

export type TravelTransportDefinition = {
  id: TravelTransportId;
  name: string;
  subtitle: string;
  multiplier: number;
  minAge: number;
  fatigueImpact: number;
  brandExposure: number;
};

export type TravelLodgingDefinition = {
  id: TravelLodgingTier;
  name: string;
  subtitle: string;
  multiplier: number;
  comfort: number;
};

export type TravelDurationDefinition = {
  id: TravelDurationId;
  name: string;
  subtitle: string;
  multiplier: number;
  actions: number;
  fatigueImpact: number;
};

export type TravelActivityDefinition = {
  id: string;
  title: string;
  summary: string;
  cost: number;
  risk: TravelActivityRisk;
  statDelta: TravelStatDelta;
  relationshipDeltaRange: [number, number];
  fameDeltaRange: [number, number];
  burnoutDelta: number;
  sleepDebtDelta: number;
  recoveryMomentumDelta: number;
  riskEvents: TravelRiskEventType[];
};

export type TravelDestinationDefinition = {
  id: TravelDestinationId;
  name: string;
  countryId: string;
  city: string;
  imageHint: string;
  flavor: string;
  bestSeason: string;
  basePackageCost: number;
  baseRiskIndex: number;
  brandVisibility: number;
  activities: TravelActivityDefinition[];
};
