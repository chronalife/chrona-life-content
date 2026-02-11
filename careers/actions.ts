import type { CareerActionDefinition } from './types';

function createPartTimeActions(): CareerActionDefinition[] {
  return [
    {
      id: 'work_harder',
      label: 'Work Harder',
      description: 'Push for stronger shifts and visibility.',
      icon: 'flame-outline',
      cooldownYears: 0.05,
      success: {
        text: 'You pushed hard and management noticed your effort.',
        effects: {
          performanceDelta: 8,
          statModifiers: [
            { stat: 'happiness', amount: -3, reason: 'Longer and tougher shifts' },
            { stat: 'health', amount: -2, reason: 'Fatigue from overworking' },
          ],
          moneyChange: 120,
        },
      },
    },
    {
      id: 'take_it_easy',
      label: 'Take It Easy',
      description: 'Protect your balance this cycle.',
      icon: 'leaf-outline',
      cooldownYears: 0.03,
      success: {
        text: 'You slowed down and protected your energy.',
        effects: {
          performanceDelta: -3,
          statModifiers: [
            { stat: 'happiness', amount: 3, reason: 'Lower pressure at work' },
            { stat: 'health', amount: 1, reason: 'More recovery time' },
          ],
        },
      },
    },
    {
      id: 'ask_raise',
      label: 'Ask For Raise',
      description: 'Make your case for better pay.',
      icon: 'cash-outline',
      cooldownYears: 0.2,
      requirements: {
        minYearsInRole: 1,
        minPerformance: 55,
      },
      successChance: 0.4,
      success: {
        text: 'You secured a modest pay increase.',
        effects: {
          salaryMultiplier: 1.06,
          performanceDelta: 2,
          statModifiers: [{ stat: 'happiness', amount: 2, reason: 'Recognition and better pay' }],
        },
      },
      failure: {
        text: 'They turned down your raise request this time.',
        effects: {
          performanceDelta: -1,
          statModifiers: [{ stat: 'happiness', amount: -2, reason: 'Frustrating denial' }],
        },
      },
    },
    {
      id: 'network',
      label: 'Network',
      description: 'Build contacts for future opportunities.',
      icon: 'people-outline',
      cooldownYears: 0.1,
      successChance: 0.5,
      success: {
        text: 'You met people who may open doors later.',
        effects: {
          statModifiers: [{ stat: 'smarts', amount: 2, reason: 'Learning from professional peers' }],
          enqueueEventIds: ['career_crossroads'],
        },
      },
      failure: {
        text: 'The networking effort did not pay off yet.',
      },
    },
    {
      id: 'build_team_rapport',
      label: 'Build Team Rapport',
      description: 'Invest in your coworkers and improve trust.',
      icon: 'people-circle-outline',
      cooldownYears: 0.06,
      success: {
        text: 'You built better chemistry across your shifts.',
        effects: {
          coworkerRapportDelta: 5,
          performanceDelta: 2,
          statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Supportive team energy' }],
        },
      },
    },
    {
      id: 'coworker_find_mentor',
      label: 'Find Mentor',
      description: 'Seek guidance from a trusted teammate.',
      icon: 'school-outline',
      cooldownYears: 0.12,
      requirements: {
        minPerformance: 40,
      },
      success: {
        text: 'A senior teammate took interest in your growth.',
        effects: {
          coworkerInteraction: 'mentor',
          performanceDelta: 2,
          statModifiers: [{ stat: 'smarts', amount: 1, reason: 'Mentorship helps your decision-making' }],
        },
      },
    },
    {
      id: 'coworker_resolve_conflict',
      label: 'Resolve Conflict',
      description: 'Address tension before it hurts the team.',
      icon: 'shield-checkmark-outline',
      cooldownYears: 0.1,
      successChance: 0.7,
      success: {
        text: 'You resolved friction and improved team trust.',
        effects: {
          coworkerInteraction: 'resolve_conflict',
          coworkerRapportDelta: 2,
          performanceDelta: 1,
          statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Less day-to-day workplace tension' }],
        },
      },
      failure: {
        text: 'The conversation did not land well yet.',
        effects: {
          coworkerRapportDelta: -2,
          performanceDelta: -1,
          statModifiers: [{ stat: 'happiness', amount: -1, reason: 'Conflict remained unresolved' }],
        },
      },
    },
    {
      id: 'coworker_collaborate_project',
      label: 'Collaborate',
      description: 'Pair with teammates on a visible task.',
      icon: 'git-merge-outline',
      cooldownYears: 0.08,
      successChance: 0.74,
      success: {
        text: 'Shared execution improved team flow and outcomes.',
        effects: {
          coworkerInteraction: 'collaborate',
          coworkerRapportDelta: 3,
          performanceDelta: 2,
          statModifiers: [{ stat: 'smarts', amount: 1, reason: 'You learned through collaboration' }],
        },
      },
      failure: {
        text: 'Collaboration stalled and timelines slipped.',
        effects: {
          coworkerRapportDelta: -2,
          performanceDelta: -1,
        },
      },
    },
    {
      id: 'set_light_schedule',
      label: 'Set Light Schedule',
      description: 'Prioritize balance and recovery over hours.',
      icon: 'moon-outline',
      cooldownYears: 0.05,
      success: {
        text: 'You shifted to a lighter schedule.',
        effects: {
          scheduleIntensity: 'light',
          performanceDelta: -1,
        },
      },
    },
    {
      id: 'set_balanced_schedule',
      label: 'Set Balanced Schedule',
      description: 'Return to a sustainable pace.',
      icon: 'swap-horizontal-outline',
      cooldownYears: 0.05,
      success: {
        text: 'You reset to a balanced schedule.',
        effects: {
          scheduleIntensity: 'balanced',
        },
      },
    },
    {
      id: 'set_grind_schedule',
      label: 'Set Grind Schedule',
      description: 'Take extra shifts and push harder.',
      icon: 'rocket-outline',
      cooldownYears: 0.08,
      success: {
        text: 'You picked a grind schedule for faster progress.',
        effects: {
          scheduleIntensity: 'grind',
          performanceDelta: 2,
          statModifiers: [{ stat: 'health', amount: -1, reason: 'Reduced recovery with extra shifts' }],
        },
      },
    },
    {
      id: 'quit',
      label: 'Quit Job',
      description: 'Leave this role and reopen your options.',
      icon: 'log-out-outline',
      cooldownYears: 0.01,
      success: {
        text: 'You resigned and moved on from this role.',
        effects: {
          quitJob: true,
          statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Fresh start energy' }],
        },
      },
    },
  ];
}

function createFullTimeActions(): CareerActionDefinition[] {
  return [
    {
      id: 'work_harder',
      label: 'Work Harder',
      description: 'Take on more responsibility and deadlines.',
      icon: 'flame-outline',
      cooldownYears: 0.05,
      success: {
        text: 'You delivered under pressure and stood out.',
        effects: {
          performanceDelta: 9,
          statModifiers: [
            { stat: 'happiness', amount: -4, reason: 'Heavier pressure and expectations' },
            { stat: 'health', amount: -3, reason: 'Extended workload' },
          ],
          moneyChange: 350,
        },
      },
    },
    {
      id: 'take_it_easy',
      label: 'Take It Easy',
      description: 'Dial back intensity to recover.',
      icon: 'leaf-outline',
      cooldownYears: 0.03,
      success: {
        text: 'You reset your pace and regained balance.',
        effects: {
          performanceDelta: -4,
          statModifiers: [
            { stat: 'happiness', amount: 4, reason: 'Better work-life balance' },
            { stat: 'health', amount: 2, reason: 'Lower stress load' },
          ],
        },
      },
    },
    {
      id: 'ask_raise',
      label: 'Ask For Raise',
      description: 'Use your track record to request better pay.',
      icon: 'trending-up-outline',
      cooldownYears: 0.25,
      requirements: {
        minYearsInRole: 1,
        minPerformance: 60,
      },
      successChance: 0.5,
      success: {
        text: 'Leadership approved your compensation increase.',
        effects: {
          salaryMultiplier: 1.1,
          performanceDelta: 2,
          statModifiers: [{ stat: 'happiness', amount: 3, reason: 'Career momentum and validation' }],
        },
      },
      failure: {
        text: 'Your request was declined for now.',
        effects: {
          performanceDelta: -1,
          statModifiers: [{ stat: 'happiness', amount: -3, reason: 'Disappointment from rejection' }],
        },
      },
    },
    {
      id: 'mentor_session',
      label: 'Mentor Session',
      description: 'Invest in growth with senior guidance.',
      icon: 'school-outline',
      cooldownYears: 0.12,
      requirements: {
        minPerformance: 40,
      },
      success: {
        text: 'Mentorship sharpened your craft and decision-making.',
        effects: {
          performanceDelta: 4,
          statModifiers: [
            { stat: 'smarts', amount: 3, reason: 'Applied mentorship and learning' },
            { stat: 'happiness', amount: 1, reason: 'Clearer career direction' },
          ],
        },
      },
    },
    {
      id: 'network',
      label: 'Network',
      description: 'Expand relationships for strategic opportunities.',
      icon: 'people-outline',
      cooldownYears: 0.12,
      successChance: 0.6,
      success: {
        text: 'You built strong connections with future upside.',
        effects: {
          statModifiers: [{ stat: 'smarts', amount: 2, reason: 'Exposure to new ideas and operators' }],
          enqueueEventIds: ['career_crossroads'],
        },
      },
      failure: {
        text: 'Your outreach did not convert into opportunities yet.',
      },
    },
    {
      id: 'build_team_rapport',
      label: 'Build Team Rapport',
      description: 'Strengthen trust with peers and leads.',
      icon: 'people-circle-outline',
      cooldownYears: 0.06,
      success: {
        text: 'Your relationships improved collaboration across the team.',
        effects: {
          coworkerRapportDelta: 6,
          performanceDelta: 2,
          statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Better team dynamics at work' }],
        },
      },
    },
    {
      id: 'coworker_find_mentor',
      label: 'Find Mentor',
      description: 'Build a mentoring relationship in your org.',
      icon: 'school-outline',
      cooldownYears: 0.12,
      requirements: {
        minPerformance: 45,
      },
      success: {
        text: 'A strong mentor relationship formed around your work.',
        effects: {
          coworkerInteraction: 'mentor',
          performanceDelta: 2,
          statModifiers: [
            { stat: 'smarts', amount: 2, reason: 'Targeted mentoring improved your craft' },
            { stat: 'happiness', amount: 1, reason: 'Clearer growth path at work' },
          ],
        },
      },
    },
    {
      id: 'coworker_resolve_conflict',
      label: 'Resolve Conflict',
      description: 'Repair tension and reset trust on the team.',
      icon: 'shield-checkmark-outline',
      cooldownYears: 0.1,
      successChance: 0.7,
      success: {
        text: 'You de-escalated conflict and rebuilt trust.',
        effects: {
          coworkerInteraction: 'resolve_conflict',
          coworkerRapportDelta: 3,
          performanceDelta: 2,
          statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Improved team climate at work' }],
        },
      },
      failure: {
        text: 'The conflict remained unresolved and hurt momentum.',
        effects: {
          coworkerRapportDelta: -2,
          performanceDelta: -2,
          statModifiers: [{ stat: 'happiness', amount: -1, reason: 'Lingering team tension' }],
        },
      },
    },
    {
      id: 'coworker_collaborate_project',
      label: 'Collaborate',
      description: 'Co-own a project milestone with teammates.',
      icon: 'git-merge-outline',
      cooldownYears: 0.08,
      successChance: 0.76,
      success: {
        text: 'The joint effort shipped cleanly and raised confidence.',
        effects: {
          coworkerInteraction: 'collaborate',
          coworkerRapportDelta: 4,
          performanceDelta: 3,
          statModifiers: [{ stat: 'smarts', amount: 1, reason: 'Cross-functional learning from collaboration' }],
        },
      },
      failure: {
        text: 'Ownership blurred and output quality slipped.',
        effects: {
          coworkerRapportDelta: -2,
          performanceDelta: -2,
        },
      },
    },
    {
      id: 'set_light_schedule',
      label: 'Set Light Schedule',
      description: 'Reduce intensity to stabilize your health.',
      icon: 'moon-outline',
      cooldownYears: 0.06,
      success: {
        text: 'You moved to a lighter weekly load.',
        effects: {
          scheduleIntensity: 'light',
          performanceDelta: -1,
        },
      },
    },
    {
      id: 'set_balanced_schedule',
      label: 'Set Balanced Schedule',
      description: 'Hold a steady pace between growth and balance.',
      icon: 'swap-horizontal-outline',
      cooldownYears: 0.05,
      success: {
        text: 'You aligned your workload to a balanced pace.',
        effects: {
          scheduleIntensity: 'balanced',
        },
      },
    },
    {
      id: 'set_grind_schedule',
      label: 'Set Grind Schedule',
      description: 'Increase your pace for faster advancement.',
      icon: 'rocket-outline',
      cooldownYears: 0.1,
      success: {
        text: 'You committed to a grind schedule.',
        effects: {
          scheduleIntensity: 'grind',
          performanceDelta: 3,
          statModifiers: [
            { stat: 'health', amount: -2, reason: 'Extended workload and reduced downtime' },
            { stat: 'happiness', amount: -1, reason: 'Less flexibility outside work' },
          ],
        },
      },
    },
    {
      id: 'retire',
      label: 'Retire',
      description: 'Step away from full-time work.',
      icon: 'sunny-outline',
      cooldownYears: 0.01,
      requirements: {
        requiresRetirementEligible: true,
      },
      success: {
        text: 'You retired and shifted to a new phase of life.',
        effects: {
          retire: true,
          statModifiers: [{ stat: 'happiness', amount: 6, reason: 'More time and autonomy after retirement' }],
          enqueueEventIds: ['retirement_transition'],
        },
      },
    },
    {
      id: 'quit',
      label: 'Quit Job',
      description: 'Leave your role immediately.',
      icon: 'log-out-outline',
      cooldownYears: 0.01,
      success: {
        text: 'You resigned and closed this chapter.',
        effects: {
          quitJob: true,
          statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Control over your direction' }],
        },
      },
    },
  ];
}

export const PART_TIME_ACTIONS = createPartTimeActions();
export const FULL_TIME_ACTIONS = createFullTimeActions();

export const BARISTA_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'handle_rush_hour',
    label: 'Handle Rush Hour',
    description: 'Take lead during the busiest customer window.',
    icon: 'cafe-outline',
    cooldownYears: 0.04,
    successChance: 0.65,
    success: {
      text: 'You kept the line moving and customers happy.',
      effects: {
        performanceDelta: 5,
        moneyChange: 90,
        statModifiers: [{ stat: 'happiness', amount: 2, reason: 'Pride from a smooth service rush' }],
      },
    },
    failure: {
      text: 'The rush got messy and you felt the pressure.',
      effects: {
        performanceDelta: -2,
        statModifiers: [
          { stat: 'happiness', amount: -3, reason: 'Stress from a chaotic shift' },
          { stat: 'health', amount: -1, reason: 'Exhausting pace' },
        ],
      },
    },
  },
  {
    id: 'deescalate_customer',
    label: 'De-escalate Customer',
    description: 'Step in and resolve a difficult customer interaction.',
    icon: 'chatbubbles-outline',
    cooldownYears: 0.05,
    successChance: 0.7,
    success: {
      text: 'You calmed the situation and protected the team.',
      effects: {
        performanceDelta: 4,
        statModifiers: [{ stat: 'smarts', amount: 1, reason: 'Improved communication under pressure' }],
      },
    },
    failure: {
      text: 'The situation escalated before support arrived.',
      effects: {
        performanceDelta: -2,
        statModifiers: [{ stat: 'happiness', amount: -2, reason: 'Frustrating customer conflict' }],
      },
    },
  },
];

export const NURSE_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'triage_priority_case',
    label: 'Triage Priority Case',
    description: 'Take lead on a high-pressure patient intake.',
    icon: 'medkit-outline',
    cooldownYears: 0.08,
    successChance: 0.62,
    success: {
      text: 'You made strong calls and stabilized the intake flow.',
      effects: {
        performanceDelta: 6,
        statModifiers: [
          { stat: 'smarts', amount: 2, reason: 'Clinical decisions under pressure' },
          { stat: 'health', amount: -1, reason: 'Demanding shift intensity' },
        ],
      },
    },
    failure: {
      text: 'The case overwhelmed the floor and drained your energy.',
      effects: {
        performanceDelta: -2,
        statModifiers: [
          { stat: 'happiness', amount: -3, reason: 'Emotionally difficult shift' },
          { stat: 'health', amount: -2, reason: 'Long clinical strain' },
        ],
      },
    },
  },
];

export const ENGINEER_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'ship_feature_push',
    label: 'Ship Feature Push',
    description: 'Take ownership of a high-impact feature release.',
    icon: 'code-slash-outline',
    cooldownYears: 0.08,
    successChance: 0.66,
    success: {
      text: 'You shipped cleanly and earned trust with the team.',
      effects: {
        performanceDelta: 6,
        statModifiers: [
          { stat: 'smarts', amount: 2, reason: 'Complex problem solving at scale' },
          { stat: 'happiness', amount: 1, reason: 'Satisfaction from shipping' },
        ],
      },
    },
    failure: {
      text: 'Production issues forced a rollback and late-night fixes.',
      effects: {
        performanceDelta: -3,
        statModifiers: [
          { stat: 'happiness', amount: -3, reason: 'Stress from incident response' },
          { stat: 'health', amount: -1, reason: 'Long debugging cycle' },
        ],
      },
    },
  },
  {
    id: 'code_review_deep_dive',
    label: 'Deep Code Review',
    description: 'Invest time in thorough code reviews to improve quality.',
    icon: 'document-text-outline',
    cooldownYears: 0.06,
    success: {
      text: 'Your reviews caught critical issues and improved team code quality.',
      effects: {
        performanceDelta: 4,
        coworkerRapportDelta: 2,
        statModifiers: [{ stat: 'smarts', amount: 1, reason: 'Learning from reviewing diverse code' }],
      },
    },
  },
  {
    id: 'architect_system_design',
    label: 'Architect System Design',
    description: 'Design a new system architecture for a major feature.',
    icon: 'layers-outline',
    cooldownYears: 0.12,
    requirements: {
      minPerformance: 70,
    },
    successChance: 0.68,
    success: {
      text: 'Your architecture was well-received and became the foundation.',
      effects: {
        performanceDelta: 7,
        statModifiers: [
          { stat: 'smarts', amount: 3, reason: 'Systems thinking and design patterns' },
          { stat: 'happiness', amount: 1, reason: 'Pride in technical leadership' },
        ],
      },
    },
    failure: {
      text: 'The design had gaps that required significant rework.',
      effects: {
        performanceDelta: -2,
        statModifiers: [{ stat: 'happiness', amount: -2, reason: 'Frustration from design issues' }],
      },
    },
  },
];

export const FINANCE_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'close_major_deal',
    label: 'Close Major Deal',
    description: 'Lead negotiations on a high-value transaction.',
    icon: 'handshake-outline',
    cooldownYears: 0.15,
    requirements: {
      minPerformance: 75,
    },
    successChance: 0.58,
    success: {
      text: 'You closed the deal and exceeded revenue targets.',
      effects: {
        performanceDelta: 8,
        moneyChange: 2500,
        statModifiers: [
          { stat: 'smarts', amount: 2, reason: 'Strategic negotiation experience' },
          { stat: 'happiness', amount: 2, reason: 'Major win at work' },
        ],
      },
    },
    failure: {
      text: 'The deal fell through and you lost a key client.',
      effects: {
        performanceDelta: -5,
        statModifiers: [
          { stat: 'happiness', amount: -4, reason: 'Disappointment from lost deal' },
          { stat: 'health', amount: -1, reason: 'Stress from failure' },
        ],
      },
    },
  },
  {
    id: 'financial_modeling',
    label: 'Build Financial Model',
    description: 'Create a complex financial model for strategic planning.',
    icon: 'calculator-outline',
    cooldownYears: 0.08,
    success: {
      text: 'Your model provided clear insights and guided decisions.',
      effects: {
        performanceDelta: 5,
        statModifiers: [{ stat: 'smarts', amount: 2, reason: 'Advanced financial analysis' }],
      },
    },
  },
  {
    id: 'client_presentation',
    label: 'Client Presentation',
    description: 'Present to a major client and win their business.',
    icon: 'presentation-outline',
    cooldownYears: 0.1,
    successChance: 0.65,
    success: {
      text: 'Your presentation impressed the client and secured the account.',
      effects: {
        performanceDelta: 6,
        coworkerRapportDelta: 2,
        moneyChange: 800,
        statModifiers: [{ stat: 'happiness', amount: 2, reason: 'Successful client win' }],
      },
    },
    failure: {
      text: "The presentation didn't resonate and you lost the opportunity.",
      effects: {
        performanceDelta: -3,
        statModifiers: [{ stat: 'happiness', amount: -2, reason: 'Disappointment from rejection' }],
      },
    },
  },
];

export const LEGAL_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'win_trial_case',
    label: 'Win Trial Case',
    description: 'Lead a high-stakes trial to a successful verdict.',
    icon: 'scale-outline',
    cooldownYears: 0.2,
    requirements: {
      minPerformance: 80,
    },
    successChance: 0.55,
    success: {
      text: 'You won the case and established a strong precedent.',
      effects: {
        performanceDelta: 9,
        moneyChange: 3200,
        statModifiers: [
          { stat: 'smarts', amount: 3, reason: 'Complex legal strategy and argumentation' },
          { stat: 'happiness', amount: 3, reason: 'Major legal victory' },
        ],
      },
    },
    failure: {
      text: 'You lost the case despite strong preparation.',
      effects: {
        performanceDelta: -6,
        statModifiers: [
          { stat: 'happiness', amount: -5, reason: 'Disappointment from trial loss' },
          { stat: 'health', amount: -2, reason: 'Stress from defeat' },
        ],
      },
    },
  },
  {
    id: 'draft_complex_contract',
    label: 'Draft Complex Contract',
    description: 'Draft a sophisticated contract for a major transaction.',
    icon: 'document-outline',
    cooldownYears: 0.1,
    success: {
      text: 'Your contract language was precise and protected your client.',
      effects: {
        performanceDelta: 5,
        statModifiers: [{ stat: 'smarts', amount: 2, reason: 'Advanced contract drafting' }],
      },
    },
  },
  {
    id: 'negotiate_settlement',
    label: 'Negotiate Settlement',
    description: 'Negotiate a favorable settlement for your client.',
    icon: 'people-outline',
    cooldownYears: 0.12,
    successChance: 0.7,
    success: {
      text: 'You reached a favorable settlement that satisfied your client.',
      effects: {
        performanceDelta: 6,
        moneyChange: 1500,
        statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Successful negotiation' }],
      },
    },
    failure: {
      text: 'Settlement talks broke down and the case will go to trial.',
      effects: {
        performanceDelta: -2,
        statModifiers: [{ stat: 'happiness', amount: -2, reason: 'Frustration from failed negotiation' }],
      },
    },
  },
];

export const HEALTHCARE_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'save_critical_patient',
    label: 'Save Critical Patient',
    description: 'Make life-saving decisions during a medical emergency.',
    icon: 'heart-outline',
    cooldownYears: 0.15,
    requirements: {
      minPerformance: 70,
    },
    successChance: 0.62,
    success: {
      text: "Your quick actions saved the patient's life.",
      effects: {
        performanceDelta: 8,
        coworkerRapportDelta: 3,
        statModifiers: [
          { stat: 'smarts', amount: 2, reason: 'Critical decision-making under pressure' },
          { stat: 'happiness', amount: 2, reason: 'Saving a life' },
        ],
      },
    },
    failure: {
      text: "Despite your best efforts, the patient didn't survive.",
      effects: {
        performanceDelta: -4,
        statModifiers: [
          { stat: 'happiness', amount: -6, reason: 'Emotional toll from patient loss' },
          { stat: 'health', amount: -2, reason: 'Stress from traumatic event' },
        ],
      },
    },
  },
  {
    id: 'research_paper',
    label: 'Publish Research Paper',
    description: 'Complete and publish a medical research paper.',
    icon: 'library-outline',
    cooldownYears: 0.18,
    requirements: {
      minPerformance: 75,
    },
    success: {
      text: 'Your research was published and cited by peers.',
      effects: {
        performanceDelta: 7,
        statModifiers: [
          { stat: 'smarts', amount: 3, reason: 'Research methodology and analysis' },
          { stat: 'happiness', amount: 1, reason: 'Academic recognition' },
        ],
      },
    },
  },
  {
    id: 'mentor_resident',
    label: 'Mentor Resident',
    description: 'Take on a resident and provide clinical mentorship.',
    icon: 'school-outline',
    cooldownYears: 0.1,
    success: {
      text: 'Your mentorship helped the resident grow significantly.',
      effects: {
        performanceDelta: 4,
        coworkerRapportDelta: 3,
        statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Satisfaction from teaching' }],
      },
    },
  },
];

export const TRADES_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'complete_major_project',
    label: 'Complete Major Project',
    description: 'Finish a large-scale construction or installation project.',
    icon: 'hammer-outline',
    cooldownYears: 0.12,
    requirements: {
      minPerformance: 70,
    },
    successChance: 0.68,
    success: {
      text: 'You completed the project on time and under budget.',
      effects: {
        performanceDelta: 7,
        moneyChange: 1200,
        statModifiers: [
          { stat: 'smarts', amount: 1, reason: 'Project management experience' },
          { stat: 'happiness', amount: 2, reason: 'Pride in completed work' },
        ],
      },
    },
    failure: {
      text: 'The project ran over budget and behind schedule.',
      effects: {
        performanceDelta: -4,
        statModifiers: [
          { stat: 'happiness', amount: -3, reason: 'Frustration from project delays' },
          { stat: 'health', amount: -1, reason: 'Physical strain from catch-up work' },
        ],
      },
    },
  },
  {
    id: 'train_apprentice',
    label: 'Train Apprentice',
    description: 'Take on an apprentice and teach them the trade.',
    icon: 'people-outline',
    cooldownYears: 0.08,
    success: {
      text: 'Your apprentice learned quickly and became productive.',
      effects: {
        performanceDelta: 3,
        coworkerRapportDelta: 2,
        statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Satisfaction from teaching' }],
      },
    },
  },
  {
    id: 'safety_inspection',
    label: 'Conduct Safety Inspection',
    description: 'Perform a thorough safety inspection of a worksite.',
    icon: 'shield-checkmark-outline',
    cooldownYears: 0.06,
    success: {
      text: 'Your inspection identified and prevented potential hazards.',
      effects: {
        performanceDelta: 5,
        coworkerRapportDelta: 2,
        statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Protecting team safety' }],
      },
    },
  },
];

export const RETAIL_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'exceed_sales_target',
    label: 'Exceed Sales Target',
    description: 'Beat monthly sales targets through strong performance.',
    icon: 'trending-up-outline',
    cooldownYears: 0.08,
    successChance: 0.65,
    success: {
      text: 'You exceeded targets and earned recognition.',
      effects: {
        performanceDelta: 6,
        moneyChange: 450,
        statModifiers: [{ stat: 'happiness', amount: 2, reason: 'Sales success' }],
      },
    },
    failure: {
      text: 'You fell short of targets despite strong effort.',
      effects: {
        performanceDelta: -2,
        statModifiers: [{ stat: 'happiness', amount: -2, reason: 'Disappointment from missing targets' }],
      },
    },
  },
  {
    id: 'merchandise_display',
    label: 'Create Merchandise Display',
    description: 'Design an eye-catching product display.',
    icon: 'grid-outline',
    cooldownYears: 0.05,
    success: {
      text: 'Your display increased foot traffic and sales.',
      effects: {
        performanceDelta: 4,
        statModifiers: [{ stat: 'smarts', amount: 1, reason: 'Visual merchandising skills' }],
      },
    },
  },
];

export const CONSULTING_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'deliver_client_project',
    label: 'Deliver Client Project',
    description: 'Complete a major consulting engagement successfully.',
    icon: 'briefcase-outline',
    cooldownYears: 0.12,
    requirements: {
      minPerformance: 75,
    },
    successChance: 0.7,
    success: {
      text: 'Your project exceeded client expectations and led to follow-on work.',
      effects: {
        performanceDelta: 8,
        moneyChange: 2800,
        statModifiers: [
          { stat: 'smarts', amount: 2, reason: 'Strategic problem-solving' },
          { stat: 'happiness', amount: 2, reason: 'Successful project delivery' },
        ],
      },
    },
    failure: {
      text: "The project didn't meet client expectations.",
      effects: {
        performanceDelta: -5,
        statModifiers: [
          { stat: 'happiness', amount: -3, reason: 'Disappointment from project issues' },
          { stat: 'health', amount: -1, reason: 'Stress from client dissatisfaction' },
        ],
      },
    },
  },
  {
    id: 'develop_framework',
    label: 'Develop Framework',
    description: 'Create a reusable framework for client engagements.',
    icon: 'construct-outline',
    cooldownYears: 0.1,
    success: {
      text: 'Your framework improved efficiency across multiple projects.',
      effects: {
        performanceDelta: 6,
        statModifiers: [{ stat: 'smarts', amount: 2, reason: 'Systems thinking and methodology' }],
      },
    },
  },
];

export const POLITICIAN_ACTIONS: CareerActionDefinition[] = [
  {
    id: 'hold_town_hall',
    label: 'Hold Town Hall',
    description: 'Meet voters publicly and answer hard questions.',
    icon: 'people-outline',
    cooldownYears: 0.08,
    successChance: 0.7,
    success: {
      text: 'Your town hall landed well with the public.',
      effects: {
        performanceDelta: 5,
        moneyChange: 800,
        statModifiers: [
          { stat: 'happiness', amount: 2, reason: 'Positive public feedback' },
          { stat: 'smarts', amount: 1, reason: 'Sharper policy communication' },
        ],
      },
    },
    failure: {
      text: 'The event became tense and hurt your momentum.',
      effects: {
        performanceDelta: -3,
        statModifiers: [{ stat: 'happiness', amount: -2, reason: 'Negative press reaction' }],
      },
    },
  },
  {
    id: 'negotiate_bill',
    label: 'Negotiate Bill',
    description: 'Build cross-party support for legislation.',
    icon: 'document-text-outline',
    cooldownYears: 0.12,
    requirements: {
      minPerformance: 60,
    },
    successChance: 0.62,
    success: {
      text: 'You assembled a coalition and moved the bill forward.',
      effects: {
        performanceDelta: 7,
        statModifiers: [{ stat: 'smarts', amount: 2, reason: 'Legislative negotiation practice' }],
      },
    },
    failure: {
      text: 'Support fractured and the bill stalled.',
      effects: {
        performanceDelta: -3,
      },
    },
  },
  {
    id: 'launch_campaign_push',
    label: 'Campaign Push',
    description: 'Invest resources to improve your election standing.',
    icon: 'megaphone-outline',
    cooldownYears: 0.14,
    successChance: 0.6,
    success: {
      text: 'The campaign push boosted visibility and volunteer turnout.',
      effects: {
        performanceDelta: 6,
        moneyChange: -6000,
        enqueueEventIds: ['political_election_local'],
      },
    },
    failure: {
      text: 'Campaign spending rose but momentum stayed flat.',
      effects: {
        performanceDelta: -2,
        moneyChange: -9000,
      },
    },
  },
  {
    id: 'ethics_audit',
    label: 'Ethics Audit',
    description: 'Open your office to strict compliance review.',
    icon: 'shield-checkmark-outline',
    cooldownYears: 0.18,
    success: {
      text: 'The audit passed and trust improved.',
      effects: {
        performanceDelta: 3,
        statModifiers: [{ stat: 'happiness', amount: 1, reason: 'Cleaner reputation trajectory' }],
      },
    },
  },
];
