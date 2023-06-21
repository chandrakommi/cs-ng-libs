import { isEmpty, isNil, isNull } from 'lodash';
import { ValueObject } from '../types/value-object.type';

/**
 * Checks if a ValueObject is null, empty, or undefined.
 * @param value - The ValueObject to check.
 * @returns A boolean indicating if the ValueObject is null, empty, or undefined.
 */
export const checkObject = (value: ValueObject) => {
  return isNull(value) || isEmpty(value) || isNil(value);
};
