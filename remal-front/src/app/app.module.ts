import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainHomeModule } from './features/main-home/main-home.module';
import { CareerComponent } from './features/career/career.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    MainHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }