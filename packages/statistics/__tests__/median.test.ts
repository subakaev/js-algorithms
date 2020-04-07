import median from '../src/median';

describe('median tests', () => {
  test('Should return NaN', () => {
    expect(median()).toBe(NaN);
    expect(median([])).toBe(NaN);
  });

  test('Should return correct value for one element in array', () => {
    expect(median([2])).toBe(2);
    expect(median([-2])).toBe(-2);
  });

  test('Should return zero value', () => {
    expect(median([-1, 1])).toBe(0);
    expect(median([-10, 0, 1])).toBe(0);
  });

  test('Should return correct value', () => {
    expect(median([4, 2, 6])).toBe(4);
    expect(median([2, 5, 4, 3])).toBe(3.5);
    expect(median([1, 10, 2])).toBe(2);
  });
});
