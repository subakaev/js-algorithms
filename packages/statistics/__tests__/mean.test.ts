import { getMean, getWeightedMean } from '../src/getMean';

describe('mean tests', () => {
  test('Should return 0 if no items in array', () => {
    expect(getMean()).toBe(0);
    expect(getMean([])).toBe(0);
  });

  test('Should return 0', () => {
    expect(getMean([0, 0, 0])).toBe(0);
    expect(getMean([1, -1])).toBe(0);
  });

  test('Should return negative value', () => {
    expect(getMean([-1, -1, -1])).toBe(-1);
  });

  test('Should return correct value', () => {
    expect(getMean([1, 2, 3])).toBe(2);
    expect(getMean([1, 2, 5, 7])).toBe((1 + 2 + 5 + 7) / 4);
  });
});

describe('weightedMean tests', () => {
  test('Should return NaN', () => {
    expect(getWeightedMean()).toBe(NaN);
    expect(getWeightedMean([])).toBe(NaN);
    expect(getWeightedMean([], [])).toBe(NaN);
    expect(getWeightedMean([1, 2], [1])).toBe(NaN);
    expect(getWeightedMean([1, 2], [1, 2, 3])).toBe(NaN);
  });

  test('Should return 0 if weights sum is zero', () => {
    expect(getWeightedMean([1], [0])).toBe(0);
    expect(getWeightedMean([1, 2], [-1, 1])).toBe(0);
  });

  test('Should return correct value', () => {
    expect(getWeightedMean([1, 2, 3], [3, 2, 1])).toBe(10 / 6);
  })
})
