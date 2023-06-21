import { ControlType } from './shared/enums/control-type.enum';
import { Component, Input } from '@angular/core';
import { FormBuilderControls } from './shared/types/formBuilderControls.type';
import { FormControl } from '@angular/forms';
import { FormBuilderControl } from './shared/types/formBuilderControl.type';

@Component({
  template: '',
})
export abstract class FormBuilderBaseComponent {
  @Input() control: FormBuilderControl | undefined;

  @Input()
  controlsObject!: FormBuilderControls;

  @Input() controlType = '';

  @Input() formControl: FormControl = new FormControl();

  @Input()
  inputType: 'email' | 'number' | 'string' | 'password' = 'string';

  @Input() key = '';

  @Input() label = '';

  @Input() minLength?: number;

  @Input() maxLength?: number;

  @Input() placeholder = '';

  @Input() pattern = '';

  @Input() required = false;

  @Input() title = '';

  @Input() value = '';

  @Input() validationMessages = '';

  ControlType = ControlType;
}
