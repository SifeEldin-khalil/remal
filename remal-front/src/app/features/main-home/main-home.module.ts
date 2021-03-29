import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { AppearDirective } from './appear';


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
    SharedModule
   ]
})
export class MainHomeModule { }
