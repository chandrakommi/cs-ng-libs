import { Component, OnInit } from '@angular/core';
import { FormBuilderBaseComponent } from '../../form-builder-base.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cs-ng-form-builder-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class FormBuilderTemplateComponent extends FormBuilderBaseComponent {
  constructor(_formBuilder: FormBuilder) {
    super(_formBuilder);
  }
}
