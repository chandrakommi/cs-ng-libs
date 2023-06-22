import { ControlType } from '../enums/control-type.enum';

export type FormBuilderControl = {
  controlType:
    | ControlType.AUTO_COMPLETE
    | ControlType.CHIPS
    | ControlType.DATE
    | ControlType.INPUT
    | ControlType.SELECT;
  formControl?: string;
  inputType: 'email' | 'number' | 'string' | 'password';
  label?: string;
  placeholder?: string;
  title?: string;
  value?: string;
  validations?: {
    min?: string;
    max?: string;
    minlength?: number;
    maxlength?: number;
    pattern?: string;
    required?: boolean;
  };
  validationMessages?: Record<string, string>;
};
