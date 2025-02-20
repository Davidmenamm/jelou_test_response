/**
 * scoreCalculator.ts
 * This calculates scores from number arrays.
 */

export const calculateScore = (scores: number[]): number => {
  // Add 1 for even, 3 for odd (except 5), 5 for 5
  return scores.reduce((score, num) => {
    if (num === 5) {
      return score + 5;
    } else if (num % 2 === 0) {
      return score + 1;
    } else {
      return score + 3;
    }
  }, 0);
};