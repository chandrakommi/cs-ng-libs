import { Component, OnInit } from '@angular/core';
import { FormBuilderBaseComponent } from '../../form-builder-base.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'cs-ng-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends FormBuilderBaseComponent implements OnInit {
  constructor(fb: FormBuilder) {
    super(fb);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  onChange() {
    console.log(this.formControl.value);
  }

  onBlur($event: FocusEvent) {
    console.log(event?.target);
    
  }
}
