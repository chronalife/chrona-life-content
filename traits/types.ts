export const TRAIT_CATEGORIES = ['physical', 'mental', 'social', 'temperament', 'dark'] as const;
export type TraitCategory = (typeof TRAIT_CATEGORIES)[number];

export const TRAIT_POLARITIES = ['positive', 'negative', 'neutral'] as const;
export type TraitPolarity = (typeof TRAIT_POLARITIES)[number];

export type TraitEffectMap = Partial<Record<string, number>>;

export type PlayerTraitDefinition = {
  id: string;
  label: string;
  icon: string;
  category: TraitCategory;
  polarity: TraitPolarity;
  description: string;
  effects: TraitEffectMap;
};
