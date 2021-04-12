import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { AppearDirective } from './appear';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MainHomeComponent,
    ContactComponent,
    AboutComponent,
    CareerComponent,
    AppearDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule


   ]
})
export class MainHomeModule { }
