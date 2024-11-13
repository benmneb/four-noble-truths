/**
 * Convert Truth string to appropriate number.
 * @param {string} word 'suffering' | 'origin' | 'cessation' | 'path'
 * @returns 1 | 2 | 3 | 4
 */
export function wordToNumber(word) {
  if (word === 'suffering') return '1';
  if (word === 'origin') return '2';
  if (word === 'cessation') return '3';
  if (word === 'path') return '4';
  return false;
}

/**
 * Convert Truth number to appropriate string.
 * @param {number} number 1 | 2 | 3 | 4
 * @returns 'suffering' | 'origin' | 'cessation' | 'path'
 */
export function numberToWord(number) {
  if (number === 1) return 'suffering';
  if (number === 2) return 'origin';
  if (number === 3) return 'cessation';
  if (number === 4) return 'path';
  return false;
}
