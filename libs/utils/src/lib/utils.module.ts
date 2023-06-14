import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysInPipe } from './pipes/keys-in/keys-in.pipe';
import { OmitPipe } from './pipes/omit/omit.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [KeysInPipe, OmitPipe],
  exports: [KeysInPipe, OmitPipe],
})
export class NgcsUtilsModule {}
