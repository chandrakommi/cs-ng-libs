import { FormBuilderControl } from './formBuilderControl.type';
import { LayoutControls } from './layoutControls.type';

export type FormBuilderControls = {
  controls: Record<string, FormBuilderControl>;
  controlSize: 'sm' | 'lg';
  validationMessages: Record<string, string>;
  layoutContainer: 'container' | 'container-fluid';
  layout: Record<string, LayoutControls>;
};
