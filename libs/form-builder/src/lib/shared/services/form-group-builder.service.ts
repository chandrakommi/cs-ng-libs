import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormBuilderControl } from '../types/formBuilderControl.type';
import { keysIn } from '@cs-ng/utils';

@Injectable({
  providedIn: 'root',
})
export class FormGroupBuilderService {
  private _formGroup: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this._formGroup = formBuilder.group({});
  }

  createFormGroup(controls: Record<string, FormBuilderControl>): FormGroup {
    keysIn(controls).forEach((key) => {
      this._formGroup.addControl(key, new FormControl(controls[key]?.value));
    });
    return this._formGroup;
  }

  getFormGroup(): FormGroup {
    return this._formGroup;
  }

  async getFormControl(key: string): Promise<FormControl<any>> {
    return (await this._formGroup.get(key)) as FormControl;
  }
}
