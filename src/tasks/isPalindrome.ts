function isPalindrome(input: string): boolean {
  const cleanString = input.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

  const reversedString = cleanString.split('').reverse().join('');

  return cleanString === reversedString;
}

export default isPalindrome;