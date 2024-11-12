import { urlify } from './urlify';

/**
 * Find explanation object by the text on the screen.
 * Deep search nested objects by the value of any key.
 * @returns The object that contains the value searched for
 */
export function findDataByText(obj, value) {
  // Iterate over all properties of the object
  for (const key in obj) {
    // Check if the current property matches the value
    if (typeof obj[key] === 'string' && urlify(obj[key]) === value) {
      return obj; // Return the entire object if the value matches
    }

    // If the property is an object (and not null), recursively search in it
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const result = findDataByText(obj[key], value);
      // If the value is found in the nested object, return that object
      if (result) {
        return result;
      }
    }
  }

  return undefined;
}
