import { isArray, isEmpty, isNil, isNull } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'omit',
})
export class OmitPipe implements PipeTransform {
  transform<
    ValueType extends Record<string, unknown>,
    ExcludeList extends string | string[]
  >(value: ValueType, omitList: ExcludeList): any {
    if (isNil(omitList) || isNull(omitList) || isEmpty(omitList)) return;

    const excludeSet = new Set(omitList);
    if (isArray(omitList)) {
      return Object.keys(value).reduce<any>((result, key) => {
        if (!excludeSet.has(key)) {
          result[key] = value[key];
        }
        return result;
      }, {});
    }
  }
}
