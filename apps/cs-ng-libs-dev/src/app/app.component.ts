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
        value: 'Chandrasekhar',
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
        value: '',
        validations: { minlength: 6, required: true },
        validationMessages: {
          required: 'Last name required',
          minlength: 'Minumum 6 characters required',
        },
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
        label: 'Email',
        placeholder: 'user@email.com',
        value: '',
        validations: { email: true, required: true },
        validationMessages: {
          required: 'Email is required',
        },
        inputType: 'string',
      },
    },
    controlSize: 'sm',
    validationMessages: {
      email: 'Invalid email',
    },
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
