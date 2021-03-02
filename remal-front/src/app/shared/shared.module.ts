import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from './company-card/company-card.component';



@NgModule({
  declarations: [CompanyCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CompanyCardComponent
  ]
})
export class SharedModule { }
