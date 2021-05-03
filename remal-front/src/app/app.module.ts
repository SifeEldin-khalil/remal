import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainHomeModule } from './features/main-home/main-home.module';
import { SubCompaniesModule } from './features/sub-companies/sub-companies.module';
import { DashboardModule } from './core/dashboard/dashboard.module';


import { BlockUIModule } from 'ng-block-ui';
import { ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AddItemDialogComponent } from './shared/add-item-dialog/add-item-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    MainHomeModule,
    SubCompaniesModule,
    DashboardModule,
    BlockUIModule.forRoot(),
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  entryComponents:[
    AddItemDialogComponent
  ]
})
export class AppModule { }