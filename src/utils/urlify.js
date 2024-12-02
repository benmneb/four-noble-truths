/**
 * @param {string} text The elaboration title to convert to be URL friendly
 * @returns The URL friendly text
 */
export function urlify(text) {
  if (typeof text !== 'string') return null;
  return text.toLowerCase().replace(/[^a-z]/gi, '-');
}
