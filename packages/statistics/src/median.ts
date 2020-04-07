const median = (arr: number[] = []): number => {
  if (arr.length === 0) {
    return NaN;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const sorted = [...arr].sort((a, b) => a - b);

  const middleIndex = Math.trunc(arr.length / 2);

  if (sorted.length % 2 > 0) {
    return sorted[middleIndex];
  }

  return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
};

export default median;
