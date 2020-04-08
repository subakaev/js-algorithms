import { getMean } from './getMean';

export const getVariance = (arr: number[] = []): number => {
  if (arr.length === 0) {
    throw new Error('Cannot calculate variance for empty array');
  }

  const mean = getMean(arr);

  return arr.reduce((acc, item) => acc + (item - mean) ** 2, 0) / arr.length;
};

export const getStdDev = (arr: number[] = []): number => Math.sqrt(getVariance(arr));
