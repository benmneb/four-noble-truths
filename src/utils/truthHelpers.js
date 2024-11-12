export function wordToNumber(word) {
  if (word === 'suffering') return '1';
  if (word === 'origin') return '2';
  if (word === 'cessation') return '3';
  if (word === 'path') return '4';
  throw new Error('Word not found');
}

export function numberToWord(number) {
  if (number === 1) return 'suffering';
  if (number === 2) return 'origin';
  if (number === 3) return 'cessation';
  if (number === 4) return 'path';
  throw new Error('Number 1-4 not found');
}
