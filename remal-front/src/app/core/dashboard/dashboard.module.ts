import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { SubCompanyComponent } from './sub-company/sub-company.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SubCompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
