interface ModeCounter {
  count: number;
  value: number;
}

const mode = (arr: number[] = []): number => {
  if (arr.length === 0) {
    return NaN;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const sorted = [...arr].sort((x, y) => x - y);

  let result: ModeCounter = { count: 0, value: 0 };
  let current: ModeCounter = { count: 1, value: sorted[0] };

  for (let i = 1; i < sorted.length; i += 1) {
    const item = sorted[i];

    if (current.value === item) {
      current.count += 1;
    } else {
      if (current.count > result.count) {
        result = current;
      }

      current = { count: 1, value: item };
    }
  }

  return result.value;
};

export default mode;
