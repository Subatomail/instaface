import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstaSnapComponent } from './insta-snap/insta-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    InstaSnapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
