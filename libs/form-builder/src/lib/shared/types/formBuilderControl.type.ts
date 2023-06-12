import { ControlType } from '../enums/control-type.enum';

export type FormBuilderControl = {
  controlType:
    | ControlType.AUTO_COMPLETE
    | ControlType.CHIPS
    | ControlType.DATE
    | ControlType.INPUT
    | ControlType.SELECT;
  formControl?: string;
  label?: string;
  placeholder?: string;
  title?: string;
  value?: string;
  validationMessages?: Record<string, string>;
};
