export function getShuffledImageNumbers(count: number, total: number): number[] {
  const numbers = Array.from({ length: total }, (_, i) => i + 1);
  numbers.sort(() => Math.random() - 0.5);
  return numbers.slice(0, count);
}
