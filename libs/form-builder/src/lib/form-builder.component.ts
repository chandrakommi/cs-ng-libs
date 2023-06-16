import { keysIn } from '@cs-ng/utils';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilderBaseComponent } from './form-builder-base.component';

@Component({
  selector: 'cs-ng-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent
  extends FormBuilderBaseComponent
  implements OnInit
{
  override ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    const controls = this.controlsObject?.controls;
    keysIn(controls).forEach((key) => {
      this.formGroup.addControl(key, new FormControl(controls[key]?.value));
    });
  }
}
