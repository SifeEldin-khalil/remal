import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    SharedModule
   ]
})
export class MainDashboardModule { }
