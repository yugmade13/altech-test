class CustomSort {
  sortAscending(array: number[]): number[] {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];

          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

    return array;
  }

  sortDescending(array: number[]): number[] {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] < array[j + 1]) {
          const temp = array[j];
          
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

    return array;
  }
}

export default CustomSort;