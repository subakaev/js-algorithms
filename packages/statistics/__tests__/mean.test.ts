import { mean, weightedMean } from '../src/mean';

describe('mean tests', () => {
  test('Should return 0 if no items in array', () => {
    expect(mean()).toBe(0);
    expect(mean([])).toBe(0);
  });

  test('Should return 0', () => {
    expect(mean([0, 0, 0])).toBe(0);
    expect(mean([1, -1])).toBe(0);
  });

  test('Should return negative value', () => {
    expect(mean([-1, -1, -1])).toBe(-1);
  });

  test('Should return correct value', () => {
    expect(mean([1, 2, 3])).toBe(2);
    expect(mean([1, 2, 5, 7])).toBe((1 + 2 + 5 + 7) / 4);
  });
});

describe('weightedMean tests', () => {
  test('Should return NaN', () => {
    expect(weightedMean()).toBe(NaN);
    expect(weightedMean([])).toBe(NaN);
    expect(weightedMean([], [])).toBe(NaN);
    expect(weightedMean([1, 2], [1])).toBe(NaN);
    expect(weightedMean([1, 2], [1, 2, 3])).toBe(NaN);
  });

  test('Should return 0 if weights sum is zero', () => {
    expect(weightedMean([1], [0])).toBe(0);
    expect(weightedMean([1, 2], [-1, 1])).toBe(0);
  });

  test('Should return correct value', () => {
    expect(weightedMean([1, 2, 3], [3, 2, 1])).toBe(10 / 6);
  })
})
