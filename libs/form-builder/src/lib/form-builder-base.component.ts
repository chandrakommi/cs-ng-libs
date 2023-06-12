import { Component, Input } from '@angular/core';
import { FormBuilderControls } from './shared/types/formBuilderControls.type';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  template: '',
})
export abstract class FormBuilderBaseComponent {
  @Input()
  controls!: FormBuilderControls;
  @Input() controlType = '';
  @Input() formControl: FormControl = new FormControl();
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() label = '';
  @Input() placeholder = '';
  @Input() title = '';
  @Input() value = '';
  @Input() validationMessages = '';
}
