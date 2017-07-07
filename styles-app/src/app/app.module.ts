import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { ThemeableButtonComponent } from './themeable-button/themeable-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueButtonComponent,
    ThemeableButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
