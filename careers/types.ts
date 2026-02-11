import type { Job, JobCategory } from '@features/careers';

export type CareerTrack = 'partTime' | 'fullTime' | 'special' | 'soon';

export type CareerPath = 'standard' | 'business' | 'actor' | 'creator' | 'athlete';
export type CareerAdvancement = 'review' | 'election';

export type CareerActionRequirement = {
  minAge?: number;
  minYearsInRole?: number;
  minPerformance?: number;
  maxPerformance?: number;
  requiresRetirementEligible?: boolean;
};

export type CareerActionEffect = {
  statModifiers?: Array<{ stat: 'health' | 'happiness' | 'smarts' | 'looks'; amount: number; reason: string }>;
  moneyChange?: number;
  performanceDelta?: number;
  salaryDelta?: number;
  salaryMultiplier?: number;
  scheduleIntensity?: 'light' | 'balanced' | 'grind';
  coworkerRapportDelta?: number;
  coworkerInteraction?: 'mentor' | 'resolve_conflict' | 'collaborate';
  enqueueEventIds?: string[];
  quitJob?: boolean;
  retire?: boolean;
};

export type CareerActionOutcome = {
  text: string;
  effects?: CareerActionEffect;
};

export type CareerActionDefinition = {
  id: string;
  label: string;
  description: string;
  icon?: string;
  cooldownYears?: number;
  requirements?: CareerActionRequirement;
  successChance?: number;
  success: CareerActionOutcome;
  failure?: CareerActionOutcome;
};

export type CareerDefinition = Job & {
  track: CareerTrack;
  path: CareerPath;
  advancement?: CareerAdvancement;
  minAge: number;
  summary: string;
  coworkerCountRange?: { min: number; max: number };
  coworkerRoles?: string[];
  compensation?: {
    bonusRate?: number;
    tipsPerYear?: number;
    overtimeHours?: number;
    overtimeMultiplier?: number;
  };
  progression?: {
    nextJobIds: string[];
    minYearsInRole: number;
    minPerformance: number;
  };
  jobActions: CareerActionDefinition[];
  comingSoonNote?: string;
};

export type CareerGroup = {
  id: CareerTrack;
  title: string;
  subtitle: string;
};

export const CAREER_GROUPS: CareerGroup[] = [
  {
    id: 'partTime',
    title: 'Part-Time Jobs',
    subtitle: 'Flexible starts while you build skills.',
  },
  {
    id: 'fullTime',
    title: 'Full-Time Jobs',
    subtitle: 'Steady tracks with stronger pay and pressure.',
  },
  {
    id: 'special',
    title: 'Special Careers',
    subtitle: 'Unique prestige tracks with higher stakes.',
  },
  {
    id: 'soon',
    title: 'Soon To Come',
    subtitle: 'Deep career systems currently in development.',
  },
];

export function defineCareers(definitions: CareerDefinition[]): CareerDefinition[] {
  return definitions;
}

export function formatCareerCategory(category: JobCategory): string {
  switch (category) {
    case 'healthcare':
      return 'Healthcare';
    case 'government':
      return 'Government';
    default:
      return category.charAt(0).toUpperCase() + category.slice(1);
  }
}
