import { findQuartiles, findIQR } from '../src/quartiles';

describe('findQuartiles tests', () => {
  test('Should return empty array', () => {
    expect(findQuartiles()).toEqual([]);
    expect(findQuartiles([])).toEqual([]);
  });

  test('Should return correct result for one element in array', () => {
    expect(findQuartiles([1])).toEqual([1, 1, 1]);
    expect(findQuartiles([3])).toEqual([3, 3, 3]);
  });

  test('Should return correct result for odd array length', () => {
    expect(findQuartiles([1, 2, 3])).toEqual([1, 2, 3]);
    expect(findQuartiles([1, 5, 2, 6, 3, 4, 8])).toEqual([2, 4, 6]);
    expect(findQuartiles([3, 7, 8, 5, 12, 14, 21, 13, 18])).toEqual([6, 12, 16]);
  });

  test('Should return correct result for even array length', () => {
    expect(findQuartiles([4, 2])).toEqual([2, 3, 4]);
    expect(findQuartiles([1, 5, 2, 4, 3, 6])).toEqual([2, 3.5, 5]);
  });
});

describe('findIQR tests', () => {
  test('Should throw an error if length of quartiles array is not equal to 3', () => {
    expect(() => findIQR([])).toThrow();
    expect(() => findIQR([1])).toThrow();
    expect(() => findIQR([1, 2])).toThrow();
    expect(() => findIQR([1, 2, 3, 4, 5])).toThrow();
  });

  test('Should throw an error if q3 > q1', () => {
    expect(() => findIQR([3, 2, 1])).toThrow();
  });

  test('Should return zero if q3 = q1', () => {
    expect(findIQR([1, 1, 1])).toBe(0);
  });

  test('Should return correct result', () => {
    expect(findIQR([1, 2, 4])).toBe(3);
  });
});
