import { keysIn, omit } from '@cs-ng/utils';
import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    console.log(keysIn(this.controls));
    console.log(omit(this.controls, ['controls', 'layout']));
    
  }
}
