import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './features/main-home/about/about.component';
import { CareerComponent } from './features/main-home/career/career.component';
import { ContactComponent } from './features/main-home/contact/contact.component';
import { MainHomeComponent } from './features/main-home/main-home.component';
import { FoodBeverageComponent } from './features/sub-companies/food-beverage/food-beverage.component';
import { LightingComponent } from './features/sub-companies/lighting/lighting.component';
import { ProjectsComponent } from './features/sub-companies/projects/projects.component';
import { RealEstateComponent } from './features/sub-companies/real-estate/real-estate.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path:'Home', component:MainHomeComponent},
  { path:'Contact',component:ContactComponent},
  { path:'About',component:AboutComponent},
  { path:'Careers', component:CareerComponent},
  { path:'Lighting', component:LightingComponent},
  { path:'Food&Beverage', component:FoodBeverageComponent},
  { path:'RealEstate', component:RealEstateComponent},
  { path:'Projects', component:ProjectsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
