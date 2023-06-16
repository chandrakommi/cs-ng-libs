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
      firstName: {
        controlType: ControlType.INPUT,
        label: 'First name',
        placeholder: 'First name',
        value: '',
        validationMessages: {},
        inputType: 'string',
      },
      lastName: {
        controlType: ControlType.INPUT,
        label: 'Last name',
        placeholder: 'Last name',
        value: 'kommi',
        validationMessages: {},
        inputType: 'string',
      },
      PhoneNumber: {
        controlType: ControlType.INPUT,
        label: 'Phone Number',
        placeholder: 'PhoneNumber',
        value: '8008225665',
        validationMessages: {},
        inputType: 'number',
      },
      email: {
        controlType: ControlType.INPUT,
        label: 'Last name',
        placeholder: 'Email',
        value: '',
        validationMessages: {},
        inputType: 'string',
      },
    },
    controlSize: 'sm',
    validationMessages: {},
    layoutContainer: 'container',
    layout: {},
  };
}
