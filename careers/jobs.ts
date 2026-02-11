import { defineCareers } from './types';
import { partTimeCareers } from './part-time';
import { fullTimeCareers } from './full-time';
import { soonCareers } from './soon';
import { creatorCareers } from './creator';
import { politicianCareers } from './politician';

export const careerDefinitions = defineCareers([
  ...partTimeCareers,
  ...fullTimeCareers,
  ...politicianCareers,
  ...creatorCareers,
  ...soonCareers,
]);

export function getCareerById(id: string) {
  return careerDefinitions.find((career) => career.id === id);
}
