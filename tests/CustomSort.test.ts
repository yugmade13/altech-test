import CustomSort from '../src/tasks/CutomSort';

describe('CustomSort', function() {
  let numbers: number[] = [];
  const task2 = new CustomSort();

  beforeEach(function() {
    numbers = [1, 2, 3, 4, 5, 6, 7];
  })

  it('should sorting ASC', function() {
    const sortedArray: number[] = task2.sortAscending([...numbers]);

    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should sorting DESC', function() {
    const sortedArray: number[] = task2.sortDescending([...numbers]);

    expect(sortedArray).toEqual([7, 6, 5, 4, 3, 2, 1]);
  });
});