import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormBuilderBaseComponent } from '../../form-builder-base.component';

@Component({
  selector: 'cs-ng-form-builder-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class FormBuilderTemplateComponent extends FormBuilderBaseComponent {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }
}
