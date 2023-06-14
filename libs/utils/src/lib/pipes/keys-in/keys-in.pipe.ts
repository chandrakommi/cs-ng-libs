import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysIn',
})
export class KeysInPipe implements PipeTransform {
  transform<T extends Record<string, unknown>>(valueObject: T): any {
    return Object.keys(valueObject);
  }
}
