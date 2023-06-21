import { FormGroupBuilderService } from './shared/services/form-group-builder.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilderBaseComponent } from './form-builder-base.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { checkObject } from '@cs-ng/utils';

@Component({
  selector: 'cs-ng-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent
  extends FormBuilderBaseComponent
  implements OnInit
{
  formGroup: FormGroup;
  constructor(
    fb: FormBuilder,
    private _fgBuilderService: FormGroupBuilderService
  ) {
    super();

    this.formGroup = fb.group({});
  }

  async ngOnInit(): Promise<void> {
    await this.createFormGroup();
  }

  async createFormGroup() {
    const controlsObj = this.controlsObject?.controls;
    if (checkObject(controlsObj)) return;
    this.formGroup = await this._fgBuilderService.createFormGroup(controlsObj);
  }
}
