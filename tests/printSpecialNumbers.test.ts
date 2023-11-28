import printSpecialNumbers from '../src/tasks/printSpecialNumbers';

describe('print special numbers', function(): void {
  it('should return array 15', () => {
    const expectedResult = [1, 2, 'bash', 4, 'bash', 'bash', 7, 8, 'bash', 'bash', 11, 'bash', 13, 14, 'fish bash'];

    expect(printSpecialNumbers(15)).toEqual(expectedResult);
  });

  it('should return array 20', (): void => {
    const expectedResult = [1, 2, 'bash', 4, 'bash', 'bash', 7, 8, 'bash', 'bash', 11, 'bash', 13, 14, 'fish bash', 16, 17, 'bash', 19, 'bash'];

    expect(printSpecialNumbers(20)).toEqual(expectedResult);
  });
});