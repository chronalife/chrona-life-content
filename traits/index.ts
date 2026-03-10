export { playerTraitCatalog, playerTraitMap } from './catalog';
export type { PlayerTraitDefinition, TraitCategory, TraitPolarity, TraitEffectMap } from './types';
export { TRAIT_CATEGORIES, TRAIT_POLARITIES } from './types';

import { playerTraitCatalog } from './catalog';
import type { PlayerTraitDefinition } from './types';

const positiveTraits = playerTraitCatalog.filter((t) => t.polarity === 'positive');
const allTraits = playerTraitCatalog;

function weightedPick(pool: PlayerTraitDefinition[], exclude: Set<string>, rng: () => number): PlayerTraitDefinition {
  const eligible = pool.filter((t) => !exclude.has(t.id));
  return eligible[Math.floor(rng() * eligible.length)];
}

export function getRandomPlayerTraits(
  parentTraits?: string[],
  rng: () => number = Math.random,
): string[] {
  const picked = new Set<string>();

  const first = weightedPick(positiveTraits, picked, rng);
  picked.add(first.id);

  const second = weightedPick(allTraits, picked, rng);
  picked.add(second.id);

  let third: PlayerTraitDefinition;
  if (parentTraits && parentTraits.length > 0) {
    const inheritRoll = rng();
    const parentPool = playerTraitCatalog.filter(
      (t) => parentTraits.includes(t.id) && !picked.has(t.id),
    );
    if (parentPool.length > 0 && inheritRoll < 0.5) {
      third = parentPool[Math.floor(rng() * parentPool.length)];
    } else {
      third = weightedPick(allTraits, picked, rng);
    }
  } else {
    third = weightedPick(allTraits, picked, rng);
  }
  picked.add(third.id);

  return Array.from(picked);
}
