import { ValueObject } from '../types/value-object.type';

/**
 * Extracts the keys from a ValueObject and returns them as an array of strings.
 * @param value - The ValueObject from which to extract the keys.
 * @returns An array of strings representing the keys of the ValueObject.
 */
export const keysIn = (value: ValueObject): string[] => {
  return Object.keys(value);
};

/**
 * Creates a new object by excluding specific keys from the original object.
 * @param object - The original object of type ValueObject.
 * @param excludeList - An array of strings representing the keys to be excluded.
 * @returns A new object of type ValueObject without the excluded keys.
 */
export const omit = (
  object: ValueObject,
  excludeList: string[]
): ValueObject => {
  const newObject: Partial<ValueObject> = {};
  for (const key in object) {
    excludeList.includes(key) ? '' : (newObject[key] = object[key]);
  }
  return newObject;
};
