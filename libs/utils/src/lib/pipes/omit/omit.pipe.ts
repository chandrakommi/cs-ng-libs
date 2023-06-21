import { ValueObject, checkObject, isArray } from '@cs-ng/utils';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'omit',
})
export class OmitPipe implements PipeTransform {
  transform(value: ValueObject, omitList: string[]): any {
    if (checkObject(value)) return;

    const excludeSet = new Set(omitList);
    if (isArray(omitList)) {
      return Object.keys(value).reduce<ValueObject>((result, key) => {
        if (!excludeSet.has(key)) {
          result[key] = value[key];
        }
        return result;
      }, {});
    }
  }
}
