import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './features/main-home/about/about.component';
import { CareerComponent } from './features/main-home/career/career.component';
import { ContactComponent } from './features/main-home/contact/contact.component';
import { MainHomeComponent } from './features/main-home/main-home.component';
import { FirstClassComponent } from './features/sub-companies/first-class/first-class.component';
import { FoodBeverageComponent } from './features/sub-companies/food-beverage/food-beverage.component';
import { LightingComponent } from './features/sub-companies/lighting/lighting.component';
import { ProjectsEgComponent } from './features/sub-companies/projects-eg/projects-eg.component';
import { ProjectsGulfComponent } from './features/sub-companies/projects-gulf/projects-gulf.component';
import { RealEstateComponent } from './features/sub-companies/real-estate/real-estate.component';
import { SecurityComponent } from './features/sub-companies/security/security.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path:'Home', component:MainHomeComponent},
  { path:'Contact',component:ContactComponent},
  { path:'About',component:AboutComponent},
  { path:'Careers', component:CareerComponent},
  { path:'Lighting', component:LightingComponent},
  { path:'Food&Beverage', component:FoodBeverageComponent},
  { path:'RealEstate', component:RealEstateComponent},
  { path:'ProjectsEg', component:ProjectsEgComponent},
  { path:'ProjectsGulf', component:ProjectsGulfComponent},
  { path:'FirstClass', component:FirstClassComponent},
  { path:'Security', component:SecurityComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
