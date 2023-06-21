import { isArray as _isArray } from 'lodash';

/**
 * Checks if a value is an array.
 * @param value - The value to check.
 * @returns A boolean indicating if the value is an array.
 */
export const isArray = <T extends unknown[]>(value: T): boolean => {
  return _isArray(value);
};
