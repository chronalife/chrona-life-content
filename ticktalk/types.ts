export type TickTalkActionId = 
  | 'post_video'
  | 'duet'
  | 'stitch'
  | 'use_sound'
  | 'start_challenge'
  | 'go_live';

export type TickTalkAction = {
  id: TickTalkActionId;
  name: string;
  description: string;
  icon: string;
  minFollowers: number;
  cooldownHours: number;
  effects: {
    followerMultiplier: number;
    viralMultiplier: number;
    reputationChange: number;
    incomeRange?: [number, number];
  };
  requirements?: {
    minAge?: number;
    minReputation?: number;
    isVerified?: boolean;
  };
};

export type TrendingSound = {
  id: string;
  name: string;
  artist: string;
  viralBoost: number;
  expiresInDays: number;
};

export type Challenge = {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  reward: {
    followers: number;
    cash: number;
  };
  expiresInDays: number;
  participantCount: number;
};

export type LiveStream = {
  id: string;
  startedAt: number;
  viewerCount: number;
  giftsReceived: number;
  totalEarnings: number;
};

export type TickTalkEventType = 
  | 'sound_trending'
  | 'challenge_viral'
  | 'duet_request'
  | 'live_raid'
  | 'algorithm_boost'
  | 'shadowban'
  | 'creator_fund_payout';

export type TickTalkEvent = {
  id: string;
  type: TickTalkEventType;
  title: string;
  description: string;
  probability: number;
  minFollowers: number;
  effects: {
    followers?: number;
    reputation?: number;
    cash?: number;
    viralBoost?: number;
  };
  choices?: {
    id: string;
    text: string;
    effects: {
      followers?: number;
      reputation?: number;
      cash?: number;
    };
  }[];
};

export type TickTalkBrandDeal = {
  id: string;
  brand: string;
  description: string;
  contentRequirement: 'video' | 'duet' | 'challenge' | 'live';
  minFollowers: number;
  paymentRange: [number, number];
  reputationRequired: number;
  isShady: boolean;
  durationDays: number;
};
