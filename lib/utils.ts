export function randomInRange(min: number = 10, max: number = 20): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
