import mode from '../src/mode';

describe('mode tests', () => {
  test('Should return NaN', () => {
    expect(mode()).toBe(NaN);
    expect(mode([])).toBe(NaN);
  });

  test('Should return correct value', () => {
    expect(mode([10])).toBe(10);
    expect(mode([1, 2, 1])).toBe(1);
  });

  test('Should return smallest one for multi mode array', () => {
    expect(mode([3, 1, 2])).toBe(1);
    expect(mode([10, 3, 3, 10])).toBe(3);
  });
});
