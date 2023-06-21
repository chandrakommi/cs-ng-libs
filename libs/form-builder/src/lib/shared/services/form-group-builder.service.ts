import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormBuilderControl } from '../types/formBuilderControl.type';
import { keysIn } from '@cs-ng/utils';

/**
 *@description the FormGroupBuilderService is a service that provides methods to create form groups,
 * retrieve the form group instance, and retrieve form control instances associated with specific keys.
 *@method createFormGroup(): Creates a FormGroup instance based on the provided controls.
 *@method getFormGroup(): Returns the FormGroup instance.
 *@method getFormControl(): Retrieves a FormControl instance associated with the provided key.
 */
@Injectable({
  providedIn: 'root',
})
export class FormGroupBuilderService {
  private _formGroup: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this._formGroup = formBuilder.group({});
  }

  /**
   * Creates a FormGroup instance based on the provided controls.
   * @param controls - A Record object representing the controls to be added to the FormGroup.
   * @returns The created FormGroup instance.
   */
  createFormGroup(controls: Record<string, FormBuilderControl>): FormGroup {
    keysIn(controls).forEach((key) => {
      this._formGroup.addControl(key, new FormControl(controls[key]?.value));
    });
    return this._formGroup;
  }

  /**
   * Returns the FormGroup instance.
   * @returns The FormGroup instance.
   */
  getFormGroup(): FormGroup {
    return this._formGroup;
  }

  /**
   * Retrieves a FormControl instance associated with the provided key.
   * @param key - The key associated with the FormControl in the FormGroup.
   * @returns A Promise that resolves to the FormControl instance.
   */
  async getFormControl(key: string): Promise<FormControl<unknown>> {
    return this._formGroup.get(key) as FormControl;
  }
}
