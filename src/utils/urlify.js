/**
 * @param {string} text The explanation title to convert to be URL friendly
 * @returns The URL friendly text
 */
export function urlify(text) {
  if (typeof text !== 'string') return null;
  return text.toLowerCase().replaceAll(' ', '-');
}
