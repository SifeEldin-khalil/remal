import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { CareerComponent } from './features/career/career.component';
import { ContactComponent } from './features/contact/contact.component';
import { MainHomeComponent } from './features/main-home/main-home.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path:'Home', component:MainHomeComponent},
  { path:'Contact',component:ContactComponent},
  { path:'About',component:AboutComponent},
  { path:'Careers', component:CareerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
