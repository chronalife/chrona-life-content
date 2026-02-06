// TODO: config table with ai? make it more realistic

export const personalityTraits = [
  'kind', 'generous', 'funny', 'intelligent', 'creative', 'loyal', 'honest',
  'ambitious', 'patient', 'confident', 'adventurous', 'optimistic', 'empathetic',
  'grumpy', 'selfish', 'arrogant', 'lazy', 'jealous', 'stubborn', 'pessimistic',
  'impulsive', 'manipulative', 'aggressive', 'anxious', 'insecure',
  'mysterious', 'quiet', 'loud', 'charming', 'awkward', 'eccentric',
];

export const positiveTraits = [
  'kind', 'generous', 'funny', 'intelligent', 'creative', 'loyal', 'honest',
  'ambitious', 'patient', 'confident', 'adventurous', 'optimistic', 'empathetic', 'charming',
];

export const negativeTraits = [
  'grumpy', 'selfish', 'arrogant', 'lazy', 'jealous', 'stubborn', 'pessimistic',
  'impulsive', 'manipulative', 'aggressive', 'anxious', 'insecure',
];

export const neutralTraits = [
  'mysterious', 'quiet', 'loud', 'awkward', 'eccentric',
];

export function getRandomTraits(count: number): string[] {
  const shuffled = [...personalityTraits].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
