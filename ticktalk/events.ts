import type { TickTalkEvent, TrendingSound, Challenge } from './types';

export const ticktalkEvents: TickTalkEvent[] = [
  {
    id: 'sound_trending',
    type: 'sound_trending',
    title: 'Your Sound is Trending!',
    description: 'An audio you used has gone viral. More creators are using it!',
    probability: 0.05,
    minFollowers: 5000,
    effects: {
      followers: 5000,
      reputation: 5,
    },
  },
  {
    id: 'challenge_viral',
    type: 'challenge_viral',
    title: 'Challenge Went Viral!',
    description: 'Your challenge is taking off! Millions are participating.',
    probability: 0.02,
    minFollowers: 50000,
    effects: {
      followers: 50000,
      reputation: 20,
      cash: 10000,
    },
  },
  {
    id: 'duet_request',
    type: 'duet_request',
    title: 'Famous Creator Wants to Duet',
    description: 'A verified creator with millions of followers wants to collaborate.',
    probability: 0.03,
    minFollowers: 10000,
    effects: {},
    choices: [
      {
        id: 'accept',
        text: 'Accept the collaboration',
        effects: { followers: 25000, reputation: 10 },
      },
      {
        id: 'decline',
        text: 'Politely decline',
        effects: { reputation: -2 },
      },
    ],
  },
  {
    id: 'live_raid',
    type: 'live_raid',
    title: 'Raided by Big Creator!',
    description: 'A popular creator sent their viewers to your live stream!',
    probability: 0.04,
    minFollowers: 1000,
    effects: {
      followers: 2000,
      cash: 500,
    },
  },
  {
    id: 'algorithm_boost',
    type: 'algorithm_boost',
    title: 'Algorithm Loves You',
    description: 'Your content is being pushed to millions of For You pages!',
    probability: 0.08,
    minFollowers: 100,
    effects: {
      followers: 10000,
      viralBoost: 3.0,
    },
  },
  {
    id: 'shadowban',
    type: 'shadowban',
    title: 'Shadowbanned',
    description: 'Your content isn\'t being shown to anyone. What did you post?',
    probability: 0.03,
    minFollowers: 1000,
    effects: {
      followers: -1000,
      reputation: -10,
    },
  },
  {
    id: 'creator_fund_payout',
    type: 'creator_fund_payout',
    title: 'Creator Fund Payout',
    description: 'You received your monthly creator fund payment!',
    probability: 0.15,
    minFollowers: 10000,
    effects: {
      cash: 500,
    },
  },
];

export const trendingSounds: TrendingSound[] = [
  { id: 'sound_1', name: 'Catchy Beat Drop', artist: 'DJ Viral', viralBoost: 2.5, expiresInDays: 7 },
  { id: 'sound_2', name: 'Funny Voice Effect', artist: 'Comedy King', viralBoost: 2.0, expiresInDays: 5 },
  { id: 'sound_3', name: 'Dance Challenge Mix', artist: 'Beat Master', viralBoost: 3.0, expiresInDays: 14 },
  { id: 'sound_4', name: 'Dramatic Movie Quote', artist: 'Film Clips', viralBoost: 1.8, expiresInDays: 10 },
  { id: 'sound_5', name: 'Nostalgic 2000s Hit', artist: 'Throwback', viralBoost: 2.2, expiresInDays: 21 },
];

export const activeChallenges: Challenge[] = [
  {
    id: 'challenge_1',
    name: 'Outfit Change Challenge',
    description: 'Show off your best outfit transitions',
    difficulty: 'easy',
    reward: { followers: 500, cash: 0 },
    expiresInDays: 7,
    participantCount: 50000,
  },
  {
    id: 'challenge_2',
    name: 'Dance Trend Challenge',
    description: 'Learn and perform the viral dance',
    difficulty: 'medium',
    reward: { followers: 2000, cash: 100 },
    expiresInDays: 14,
    participantCount: 200000,
  },
  {
    id: 'challenge_3',
    name: 'Extreme Stunt Challenge',
    description: 'Show off your most impressive skills',
    difficulty: 'hard',
    reward: { followers: 10000, cash: 500 },
    expiresInDays: 30,
    participantCount: 25000,
  },
];

export function getRandomTickTalkEvent(followers: number, reputation: number): TickTalkEvent | null {
  const eligible = ticktalkEvents.filter((e) => followers >= e.minFollowers);
  if (eligible.length === 0) return null;
  
  for (const event of eligible) {
    if (Math.random() < event.probability) {
      return event;
    }
  }
  return null;
}

export function getRandomTrendingSound(): TrendingSound {
  return trendingSounds[Math.floor(Math.random() * trendingSounds.length)];
}

export function getActiveChallenge(): Challenge | null {
  const active = activeChallenges.filter((c) => c.expiresInDays > 0);
  if (active.length === 0) return null;
  return active[Math.floor(Math.random() * active.length)];
}
