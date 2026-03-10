import type { TickTalkAction } from './types';

export const ticktalkActions: TickTalkAction[] = [
  {
    id: 'post_video',
    name: 'Post Video',
    description: 'Create and share a short video',
    icon: 'videocam',
    minFollowers: 0,
    cooldownHours: 1,
    effects: {
      followerMultiplier: 1.0,
      viralMultiplier: 1.0,
      reputationChange: 0,
    },
  },
  {
    id: 'duet',
    name: 'Duet',
    description: 'Collaborate side-by-side with another creator',
    icon: 'people',
    minFollowers: 100,
    cooldownHours: 4,
    effects: {
      followerMultiplier: 1.5,
      viralMultiplier: 1.3,
      reputationChange: 2,
    },
  },
  {
    id: 'stitch',
    name: 'Stitch',
    description: 'React to and add onto trending content',
    icon: 'git-merge',
    minFollowers: 100,
    cooldownHours: 2,
    effects: {
      followerMultiplier: 1.3,
      viralMultiplier: 1.8,
      reputationChange: 0,
    },
  },
  {
    id: 'use_sound',
    name: 'Use Trending Sound',
    description: 'Create content using a viral audio clip',
    icon: 'musical-notes',
    minFollowers: 0,
    cooldownHours: 1,
    effects: {
      followerMultiplier: 1.2,
      viralMultiplier: 2.0,
      reputationChange: 0,
    },
  },
  {
    id: 'start_challenge',
    name: 'Start Challenge',
    description: 'Create a new viral challenge for others to join',
    icon: 'trophy',
    minFollowers: 10000,
    cooldownHours: 168,
    effects: {
      followerMultiplier: 3.0,
      viralMultiplier: 2.5,
      reputationChange: 10,
    },
    requirements: {
      minReputation: 20,
    },
  },
  {
    id: 'go_live',
    name: 'Go Live',
    description: 'Stream live and receive gifts from viewers',
    icon: 'radio',
    minFollowers: 1000,
    cooldownHours: 24,
    effects: {
      followerMultiplier: 1.1,
      viralMultiplier: 0.5,
      reputationChange: 1,
      incomeRange: [10, 2500],
    },
    requirements: {
      minAge: 16,
    },
  },
];

export function getTickTalkAction(id: string): TickTalkAction | undefined {
  return ticktalkActions.find((a) => a.id === id);
}

export function getAvailableTickTalkActions(followers: number, reputation: number, age: number, isVerified: boolean): TickTalkAction[] {
  return ticktalkActions.filter((action) => {
    if (followers < action.minFollowers) return false;
    if (action.requirements?.minReputation && reputation < action.requirements.minReputation) return false;
    if (action.requirements?.minAge && age < action.requirements.minAge) return false;
    if (action.requirements?.isVerified && !isVerified) return false;
    return true;
  });
}
