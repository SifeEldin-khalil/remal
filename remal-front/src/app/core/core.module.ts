import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

//loginForm
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent, AdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    ReactiveFormsModule
    ],
  exports:[
    MainLayoutComponent
  ]
})
export class CoreModule { }
