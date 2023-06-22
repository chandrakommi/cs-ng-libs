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
        value: 'kkkkakk',
        inputType: 'string',
        validations: { minlength: 3, maxlength: 5, required: true },
        validationMessages: {
          required: 'First name required',
          minlength: 'Minumum 3 characters required',
          maxlength: 'Maximum 5 characters allowed',
        },
      },
      lastName: {
        controlType: ControlType.INPUT,
        label: 'Last name',
        placeholder: 'Last name',
        value: 'kommi',
        validationMessages: {},
        inputType: 'string',
      },
      phoneNumber: {
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
    layout: {
      row_0: {
        firstName: {
          label: 'col-4',
          control: 'col-6',
        },
        lastName: {
          label: 'col-4',
          control: 'col-6',
        },
      },
      row_1: {
        phoneNumber: {
          label: 'col-4',
          control: 'col-6',
        },
        email: {
          label: 'col-4',
          control: 'col-6',
        },
      },
    },
  };
}
