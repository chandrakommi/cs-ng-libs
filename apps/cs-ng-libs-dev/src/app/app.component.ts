import { Component } from '@angular/core';
import { ControlType, FormBuilderControls } from '@cs-ng/form-builder';

@Component({
  selector: 'cs-ng-libs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cs-ng-libs-dev';

  data: FormBuilderControls = {
    controls: {
      FirstName: {
        controlType: ControlType.INPUT,
        placeholder: 'First name',
        value: '',
        validationMessages: {},
      },
    },
    controlSize: 'sm',
    validationMessages: {},
    layoutContainer: 'container',
    layout: {},
  };
}
