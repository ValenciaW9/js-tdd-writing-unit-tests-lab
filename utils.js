function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  // Check if the string is empty
  if (str.length === 0) {
    return false;
  }

  // Check if the string has any non-alphabetic characters
  if (!/^[A-Za-z]+$/.test(str)) {
    throw new Error('Input must contain only alphabetic characters');
  }

  // Convert the string to lowercase for case-insensitive comparison
  const lowerCaseStr = str.toLowerCase();

  // Reverse the string and compare it with the original string
  return lowerCaseStr === lowerCaseStr.split('').reverse().join('');
}

module.exports = isPalindrome;