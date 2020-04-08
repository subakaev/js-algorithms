import { getVariance, getStdDev } from '../src/standard-deviation';

describe('getVariance tests', () => {
  test('Should thrown an error for empty array', () => {
    expect(() => getVariance()).toThrow();
    expect(() => getVariance([])).toThrow();
  });

  test('Should return zero for one element in array', () => {
    expect(getVariance([1])).toBe(0);
  });

  test('Should return zero for the equal elements in array', () => {
    expect(getVariance([4, 4, 4])).toBe(0);
  });

  test('Should return correct value', () => {
    expect(getVariance([10, 40, 30, 50, 20])).toBe(200);
  });
});

describe('getStdDev tests', () => {
  test('Should thrown an error for empty array', () => {
    expect(() => getStdDev()).toThrow();
    expect(() => getStdDev([])).toThrow();
  });

  test('Should return zero for one element in array', () => {
    expect(getStdDev([1])).toBe(0);
  });

  test('Should return zero for the equal elements in array', () => {
    expect(getStdDev([4, 4, 4])).toBe(0);
  });

  test('Should return correct value', () => {
    expect(getStdDev([10, 40, 30, 50, 20])).toBe(Math.sqrt(200));
  });
})
