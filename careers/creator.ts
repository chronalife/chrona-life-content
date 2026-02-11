import type { CareerDefinition, CareerActionDefinition } from './types';

const CREATOR_BASE_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'post_content',
    label: 'Post Content',
    description: 'Create and upload new content to your platforms.',
    icon: 'add-circle-outline',
    cooldownYears: 0.02,
    successChance: 0.7,
    success: {
      text: 'Your content performed well and gained traction.',
      effects: {
        performanceDelta: 5,
        moneyChange: 100,
        statModifiers: [
          { stat: 'happiness', amount: 2, reason: 'Content creation is fulfilling' },
        ],
      },
    },
    failure: {
      text: 'This post didn\'t land. Better luck next time.',
      effects: {
        performanceDelta: -2,
        statModifiers: [
          { stat: 'happiness', amount: -1, reason: 'Disappointing engagement' },
        ],
      },
    },
  },
  {
    id: 'engage_followers',
    label: 'Engage Followers',
    description: 'Reply to comments and build community.',
    icon: 'chatbubbles-outline',
    cooldownYears: 0.03,
    success: {
      text: 'Your followers appreciate the engagement.',
      effects: {
        performanceDelta: 3,
        statModifiers: [
          { stat: 'happiness', amount: 1, reason: 'Positive community vibes' },
        ],
      },
    },
  },
  {
    id: 'go_viral_attempt',
    label: 'Try to Go Viral',
    description: 'Create something controversial or trend-chasing.',
    icon: 'flame-outline',
    cooldownYears: 0.08,
    successChance: 0.15,
    success: {
      text: 'Your post went VIRAL! Followers are pouring in.',
      effects: {
        performanceDelta: 25,
        moneyChange: 2000,
        statModifiers: [
          { stat: 'happiness', amount: 10, reason: 'Fame rush from viral success' },
        ],
      },
    },
    failure: {
      text: 'The attempt fell flat or drew criticism.',
      effects: {
        performanceDelta: -5,
        statModifiers: [
          { stat: 'happiness', amount: -3, reason: 'Failed viral attempt' },
        ],
      },
    },
  },
  {
    id: 'take_brand_deal',
    label: 'Take Brand Deal',
    description: 'Accept a sponsorship offer from a brand.',
    icon: 'cash-outline',
    cooldownYears: 0.1,
    requirements: {
      minPerformance: 40,
    },
    successChance: 0.8,
    success: {
      text: 'Brand deal complete! Cash in hand.',
      effects: {
        moneyChange: 500,
        performanceDelta: 2,
        statModifiers: [
          { stat: 'happiness', amount: 3, reason: 'Monetizing your influence' },
        ],
      },
    },
    failure: {
      text: 'The brand wasn\'t satisfied with the deliverable.',
      effects: {
        performanceDelta: -8,
        statModifiers: [
          { stat: 'happiness', amount: -2, reason: 'Failed sponsorship deal' },
        ],
      },
    },
  },
  {
    id: 'collaborate',
    label: 'Collaborate',
    description: 'Team up with another creator for cross-promotion.',
    icon: 'people-outline',
    cooldownYears: 0.12,
    successChance: 0.6,
    success: {
      text: 'Great collab! Both audiences loved it.',
      effects: {
        performanceDelta: 10,
        moneyChange: 300,
        statModifiers: [
          { stat: 'happiness', amount: 3, reason: 'Creative collaboration' },
        ],
      },
    },
    failure: {
      text: 'The collab didn\'t mesh well.',
      effects: {
        performanceDelta: -3,
      },
    },
  },
  {
    id: 'take_break',
    label: 'Take a Break',
    description: 'Step back from posting to recharge.',
    icon: 'leaf-outline',
    cooldownYears: 0.08,
    success: {
      text: 'You returned refreshed and with new ideas.',
      effects: {
        performanceDelta: -5,
        statModifiers: [
          { stat: 'happiness', amount: 8, reason: 'Mental health break' },
          { stat: 'health', amount: 3, reason: 'Rest from screen time' },
        ],
      },
    },
  },
  {
    id: 'quit_creator',
    label: 'Quit Creating',
    description: 'Leave content creation behind.',
    icon: 'exit-outline',
    cooldownYears: 1,
    success: {
      text: 'You stepped away from the creator life.',
      effects: {
        quitJob: true,
        statModifiers: [
          { stat: 'happiness', amount: -5, reason: 'Mixed feelings about leaving' },
        ],
      },
    },
  },
];

const INFLUENCER_ACTIONS: CareerActionDefinition[] = [
  ...CREATOR_BASE_ACTIONS,
  {
    id: 'launch_merch',
    label: 'Launch Merch',
    description: 'Create and sell branded merchandise.',
    icon: 'shirt-outline',
    cooldownYears: 0.2,
    requirements: {
      minPerformance: 55,
    },
    successChance: 0.5,
    success: {
      text: 'Your merch sold out! Fans are wearing your brand.',
      effects: {
        moneyChange: 5000,
        performanceDelta: 8,
        statModifiers: [
          { stat: 'happiness', amount: 5, reason: 'Fans rocking your merch' },
        ],
      },
    },
    failure: {
      text: 'Merch sales were disappointing.',
      effects: {
        moneyChange: -500,
        statModifiers: [
          { stat: 'happiness', amount: -3, reason: 'Failed business venture' },
        ],
      },
    },
  },
  {
    id: 'hire_manager',
    label: 'Hire Manager',
    description: 'Get professional representation.',
    icon: 'briefcase-outline',
    cooldownYears: 0.5,
    requirements: {
      minPerformance: 60,
    },
    success: {
      text: 'Your new manager is landing better deals.',
      effects: {
        salaryMultiplier: 1.2,
        performanceDelta: 5,
        statModifiers: [
          { stat: 'happiness', amount: 2, reason: 'Professional support' },
        ],
      },
    },
  },
];

const CELEBRITY_ACTIONS: CareerActionDefinition[] = [
  ...INFLUENCER_ACTIONS,
  {
    id: 'media_appearance',
    label: 'Media Appearance',
    description: 'Appear on TV, podcasts, or major interviews.',
    icon: 'tv-outline',
    cooldownYears: 0.15,
    successChance: 0.7,
    success: {
      text: 'Great exposure! Your profile is rising.',
      effects: {
        performanceDelta: 12,
        moneyChange: 10000,
        statModifiers: [
          { stat: 'happiness', amount: 5, reason: 'Media spotlight' },
        ],
      },
    },
    failure: {
      text: 'The interview didn\'t go well.',
      effects: {
        performanceDelta: -8,
        statModifiers: [
          { stat: 'happiness', amount: -5, reason: 'Public embarrassment' },
        ],
      },
    },
  },
  {
    id: 'start_foundation',
    label: 'Start Foundation',
    description: 'Use your influence for charitable causes.',
    icon: 'heart-outline',
    cooldownYears: 1,
    requirements: {
      minPerformance: 70,
    },
    success: {
      text: 'Your foundation is making a real difference.',
      effects: {
        performanceDelta: 15,
        moneyChange: -10000,
        statModifiers: [
          { stat: 'happiness', amount: 10, reason: 'Giving back feels great' },
        ],
      },
    },
  },
];

export const creatorCareers: CareerDefinition[] = [
  {
    id: 'creator_hobbyist',
    title: 'Content Hobbyist',
    company: 'Self-Employed',
    category: 'entertainment',
    track: 'partTime',
    path: 'creator',
    minAge: 16,
    salary: 5000,
    requiredExperience: 0,
    stress: 20,
    prestige: 15,
    coworkerCountRange: { min: 0, max: 0 },
    compensation: {
      bonusRate: 0,
      tipsPerYear: 1000,
    },
    progression: {
      nextJobIds: ['creator_part_time'],
      minYearsInRole: 1,
      minPerformance: 50,
    },
    jobActions: CREATOR_BASE_ACTIONS.slice(0, 4),
    summary: 'Posting content on the side. Growing your following for fun.',
  },
  {
    id: 'creator_part_time',
    title: 'Part-Time Creator',
    company: 'Self-Employed',
    category: 'entertainment',
    track: 'partTime',
    path: 'creator',
    minAge: 18,
    salary: 15000,
    requiredExperience: 1,
    stress: 35,
    prestige: 25,
    coworkerCountRange: { min: 0, max: 2 },
    coworkerRoles: ['Editor', 'Photographer'],
    compensation: {
      bonusRate: 0.05,
      tipsPerYear: 3000,
    },
    progression: {
      nextJobIds: ['creator_full_time'],
      minYearsInRole: 2,
      minPerformance: 55,
    },
    jobActions: CREATOR_BASE_ACTIONS,
    summary: 'Making real money from content. Building a loyal audience.',
  },
  {
    id: 'creator_full_time',
    title: 'Full-Time Influencer',
    company: 'Self-Employed',
    category: 'entertainment',
    track: 'fullTime',
    path: 'creator',
    minAge: 18,
    salary: 50000,
    requiredExperience: 2,
    stress: 55,
    prestige: 45,
    coworkerCountRange: { min: 1, max: 5 },
    coworkerRoles: ['Editor', 'Photographer', 'Manager', 'Assistant'],
    compensation: {
      bonusRate: 0.15,
      tipsPerYear: 10000,
    },
    progression: {
      nextJobIds: ['creator_celebrity'],
      minYearsInRole: 3,
      minPerformance: 65,
    },
    jobActions: INFLUENCER_ACTIONS,
    summary: 'Content is your career. Brand deals, merch, and dedicated fans.',
  },
  {
    id: 'creator_celebrity',
    title: 'Internet Celebrity',
    company: 'Self-Employed',
    category: 'entertainment',
    track: 'fullTime',
    path: 'creator',
    minAge: 21,
    salary: 250000,
    requiredExperience: 5,
    stress: 70,
    prestige: 80,
    coworkerCountRange: { min: 3, max: 15 },
    coworkerRoles: ['Editor', 'Videographer', 'Manager', 'PR Agent', 'Lawyer', 'Accountant', 'Personal Assistant'],
    compensation: {
      bonusRate: 0.3,
      tipsPerYear: 50000,
    },
    progression: {
      nextJobIds: ['creator_mogul'],
      minYearsInRole: 5,
      minPerformance: 75,
    },
    jobActions: CELEBRITY_ACTIONS,
    summary: 'Millions of followers. Mainstream recognition. A-list collabs.',
  },
  {
    id: 'creator_mogul',
    title: 'Media Mogul',
    company: 'Your Media Empire',
    category: 'entertainment',
    track: 'fullTime',
    path: 'creator',
    minAge: 25,
    salary: 1000000,
    requiredExperience: 10,
    stress: 60,
    prestige: 95,
    coworkerCountRange: { min: 10, max: 50 },
    coworkerRoles: ['CEO', 'COO', 'CFO', 'Creative Director', 'Production Team', 'Marketing Team'],
    compensation: {
      bonusRate: 0.5,
      tipsPerYear: 0,
    },
    jobActions: [
      ...CELEBRITY_ACTIONS,
      {
        id: 'acquire_company',
        label: 'Acquire Company',
        description: 'Buy out a competitor or related business.',
        icon: 'business-outline',
        cooldownYears: 1,
        requirements: {
          minPerformance: 80,
        },
        successChance: 0.5,
        success: {
          text: 'Acquisition complete! Your empire grows.',
          effects: {
            salaryMultiplier: 1.25,
            moneyChange: -100000,
            performanceDelta: 10,
            statModifiers: [
              { stat: 'happiness', amount: 8, reason: 'Business expansion success' },
            ],
          },
        },
        failure: {
          text: 'The deal fell through.',
          effects: {
            moneyChange: -20000,
            statModifiers: [
              { stat: 'happiness', amount: -5, reason: 'Failed business deal' },
            ],
          },
        },
      },
    ],
    summary: 'You\'ve transcended creator. You own production companies, brands, and empires.',
  },
];
