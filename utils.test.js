const isPalindrome = require("../utils");

test('should return false for an empty string', () => {
  expect(isPalindrome('')).toBe(false);
});

test('should throw an error if input has any non-alphabetic characters', () => {
  expect(() => isPalindrome('r@cecar')).toThrow();
});

test('should throw an error if input is not a string', () => {
  expect(() => isPalindrome(123)).toThrow();
});

test("isPalindrome is a function", () => {
  expect(typeof isPalindrome).toBe("function");
});