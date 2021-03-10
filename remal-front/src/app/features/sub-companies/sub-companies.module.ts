import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { LightingComponent } from './lighting/lighting.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FoodBeverageComponent,
    RealEstateComponent,
    LightingComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SubCompaniesModule { }
