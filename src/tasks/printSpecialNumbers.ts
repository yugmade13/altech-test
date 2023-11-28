function printSpecialNumbers(n: number): Array<string | number> {
  const result: Array<string | number> = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fish bash');
    } else if (i % 5 === 0) {
      result.push('bash');
    } else if (i % 3 === 0) {
      result.push('bash');
    } else {
      result.push(i);
    }
  }

  return result;
}

export default printSpecialNumbers;