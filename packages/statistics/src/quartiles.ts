import median from './median';

export const findQuartiles = (arr: number[] = []): number[] => {
  if (arr.length === 0) {
    return [];
  }

  if (arr.length === 1) {
    return [arr[0], arr[0], arr[0]];
  }

  const sorted = [...arr].sort((a, b) => a - b);

  const middleIndex = Math.trunc(sorted.length / 2)

  const q1 = median(sorted.slice(0, middleIndex));
  const q2 = median(sorted);
  const q3 = median(sorted.slice(arr.length % 2 === 0 ? middleIndex : middleIndex + 1, arr.length));

  return [q1, q2, q3];
};

export const findIQR = (quartiles: number[]): number => {
  if (quartiles.length !== 3) {
    throw new Error('quartiles array have to have length of 3!');
  }

  const [q1, , q3] = quartiles;

  if (q1 > q3) {
    throw new Error('quartile 3 should be greater or equal than quartile 1!');
  }

  return q3 - q1;
};
