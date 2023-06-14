import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmitPipe } from './pipes/omit.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    OmitPipe
  ],
  exports: [
    OmitPipe
  ],
})
export class NgcsUtilsModule {}
