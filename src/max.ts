export const max = (numbers: number[]) => {
  if (numbers.length === 0) return null;
  return numbers.reduce((a, b) => (a > b ? a : b));
};
