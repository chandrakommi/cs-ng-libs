import { Component, OnInit } from '@angular/core';
import { FormBuilderBaseComponent } from '../../form-builder-base.component';
import { FormGroupBuilderService } from '../../shared/services/form-group-builder.service';
import { keysIn } from '@cs-ng/utils';

@Component({
  selector: 'cs-ng-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends FormBuilderBaseComponent implements OnInit {
  keysIn(value: any): any {
    return keysIn(value);
  }
  constructor(formGroupBuilderService: FormGroupBuilderService) {
    super(formGroupBuilderService);
  }

  ngOnInit(): void {
    super.getFormControl();
  }
}
