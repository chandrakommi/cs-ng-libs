import { Component, OnInit } from '@angular/core';
import { FormBuilderBaseComponent } from '../../form-builder-base.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cs-ng-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends FormBuilderBaseComponent implements OnInit {
  constructor(_fb: FormBuilder) {
    super(_fb);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
