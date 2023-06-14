import { Component, Input } from '@angular/core';
import { FormBuilderControls } from './shared/types/formBuilderControls.type';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormBuilderControl } from './shared/types/formBuilderControl.type';

@Component({
  template: '',
})
export abstract class FormBuilderBaseComponent {
  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = _formBuilder.group({});
  }
  @Input() control: FormBuilderControl | undefined;

  @Input()
  controls!: FormBuilderControls;

  @Input() controlType = '';

  @Input() formControl: FormControl = new FormControl();

  @Input() formGroup: FormGroup;

  @Input() label = '';

  @Input() minLength?: number;

  @Input() maxLength?: number;

  @Input() placeholder = '';

  @Input() pattern = '';

  @Input() required = false;

  @Input() title = '';

  @Input() value = '';

  @Input() validationMessages = '';
}
