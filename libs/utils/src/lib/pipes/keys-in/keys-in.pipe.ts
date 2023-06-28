import { Pipe, PipeTransform } from '@angular/core';
import { ValueObject } from '../../types/value-object.type';

@Pipe({
  name: 'keysIn',
})
export class KeysInPipe implements PipeTransform {
  /**
   * @description Transforms a ValueObject into an array of its keys.
   * @param valueObject - The ValueObject from which to extract the keys.
   * @returns An array of strings representing the keys of the ValueObject.
   */
  transform(valueObject: ValueObject): string[] {
    return Object.keys(valueObject);
  }
}
