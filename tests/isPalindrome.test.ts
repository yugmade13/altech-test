import isPalindrome from '../src/tasks/isPalindrome';

describe('isPalindrome', function () {
  it('should return string palindrome', function () {
    expect(isPalindrome('Javascript')).toBe(false);

    expect(isPalindrome('Katak')).toBe(true);
  });
});