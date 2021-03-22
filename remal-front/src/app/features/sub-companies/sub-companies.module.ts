import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { LightingComponent } from './lighting/lighting.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstClassComponent } from './first-class/first-class.component';
import { SecurityComponent } from './security/security.component';



@NgModule({
  declarations: [
    FoodBeverageComponent,
    RealEstateComponent,
    LightingComponent,
    ProjectsComponent,
    FirstClassComponent,
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SubCompaniesModule { }
