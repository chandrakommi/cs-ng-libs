import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CsngFormBuilderModule } from '@cs-ng/form-builder';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CsngFormBuilderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
