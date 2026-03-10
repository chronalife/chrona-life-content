import type { TickTalkBrandDeal } from './types';

export const ticktalkBrandDeals: TickTalkBrandDeal[] = [
  {
    id: 'tt_deal_1',
    brand: 'Energy Drink Co',
    description: 'Create a hype video showing your energy',
    contentRequirement: 'video',
    minFollowers: 1000,
    paymentRange: [50, 200],
    reputationRequired: 0,
    isShady: false,
    durationDays: 7,
  },
  {
    id: 'tt_deal_2',
    brand: 'Fashion Nova',
    description: 'Show off trendy outfits in a transformation video',
    contentRequirement: 'video',
    minFollowers: 10000,
    paymentRange: [500, 2000],
    reputationRequired: 10,
    isShady: false,
    durationDays: 14,
  },
  {
    id: 'tt_deal_3',
    brand: 'Gaming App',
    description: 'Duet with our mascot and show gameplay',
    contentRequirement: 'duet',
    minFollowers: 5000,
    paymentRange: [200, 800],
    reputationRequired: 0,
    isShady: false,
    durationDays: 10,
  },
  {
    id: 'tt_deal_4',
    brand: 'Sketchy Crypto',
    description: 'Promote our totally legit token',
    contentRequirement: 'video',
    minFollowers: 50000,
    paymentRange: [2800, 11000],
    reputationRequired: -50,
    isShady: true,
    durationDays: 3,
  },
  {
    id: 'tt_deal_5',
    brand: 'Dance Studio',
    description: 'Start a challenge using our choreo',
    contentRequirement: 'challenge',
    minFollowers: 100000,
    paymentRange: [5500, 24000],
    reputationRequired: 30,
    isShady: false,
    durationDays: 30,
  },
  {
    id: 'tt_deal_6',
    brand: 'Beauty Brand',
    description: 'Do a live makeup tutorial featuring our products',
    contentRequirement: 'live',
    minFollowers: 25000,
    paymentRange: [1200, 4600],
    reputationRequired: 15,
    isShady: false,
    durationDays: 14,
  },
  {
    id: 'tt_deal_7',
    brand: 'Shein',
    description: 'Haul video showing our latest collection',
    contentRequirement: 'video',
    minFollowers: 50000,
    paymentRange: [1800, 5600],
    reputationRequired: 0,
    isShady: false,
    durationDays: 14,
  },
  {
    id: 'tt_deal_8',
    brand: 'Mega Brand',
    description: 'Exclusive partnership - become our face',
    contentRequirement: 'video',
    minFollowers: 1000000,
    paymentRange: [45000, 180000],
    reputationRequired: 50,
    isShady: false,
    durationDays: 90,
  },
];

export function getAvailableTickTalkDeals(followers: number, reputation: number): TickTalkBrandDeal[] {
  return ticktalkBrandDeals.filter((deal) => {
    if (followers < deal.minFollowers) return false;
    if (reputation < deal.reputationRequired) return false;
    return true;
  });
}

export function getRandomTickTalkDeal(followers: number, reputation: number): TickTalkBrandDeal | null {
  const available = getAvailableTickTalkDeals(followers, reputation);
  if (available.length === 0) return null;
  return available[Math.floor(Math.random() * available.length)];
}
