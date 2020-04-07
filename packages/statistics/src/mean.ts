export const mean = (arr: number[] = []): number => (arr.length > 0 ? arr.reduce((acc: number, item: number): number => acc + item) / arr.length : 0);

export const weightedMean = (values: number[] = [], weights: number[] = []): number => {
  if (values.length === 0 || values.length !== weights.length) {
    return NaN;
  }

  const weightsSum = weights.reduce((acc: number, item: number): number => acc + item);

  return weightsSum > 0 ? values.reduce((acc: number, item: number, index: number): number => acc + item * weights[index], 0) / weightsSum : 0;
}
