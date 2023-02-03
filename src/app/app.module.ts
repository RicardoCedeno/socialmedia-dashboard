import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenNumberPipe } from './pipes/shorten-number.pipe';
import { NumberFormatPipe } from './pipes/number-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenNumberPipe,
    NumberFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
