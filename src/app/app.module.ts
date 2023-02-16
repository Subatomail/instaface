import { LOCALE_ID } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { InstaSnapComponent } from './insta-snap/insta-snap.component';
import "@angular/common/locales/global/fr";
import { InstaSnapListComponent } from './insta-snap-list/insta-snap-list.component';
import { HeaderComponent } from './header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SingleInstaSnapComponent } from './single-insta-snap/single-insta-snap.component';
@NgModule({
  declarations: [
    AppComponent,
    InstaSnapComponent,
    InstaSnapListComponent,
    HeaderComponent,
    HomePageComponent,
    SingleInstaSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:"fr-FR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
