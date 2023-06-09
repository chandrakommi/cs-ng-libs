import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { DateComponent } from './components/date/date.component';
import { ChipsComponent } from './components/chips/chips.component';
import { FormBuilderTemplateComponent } from './components/template/template.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FormBuilderComponent,
    InputComponent,
    SelectComponent,
    AutoCompleteComponent,
    DateComponent,
    ChipsComponent,
    FormBuilderTemplateComponent,
  ],
  exports: [
    FormBuilderComponent,
    InputComponent,
    SelectComponent,
    AutoCompleteComponent,
    DateComponent,
    ChipsComponent,
    FormBuilderTemplateComponent,
  ],
})
export class CsngFormBuilderModule {}
