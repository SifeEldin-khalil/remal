import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { LightingComponent } from './lighting/lighting.component';
import { ProjectsEgComponent } from './projects-eg/projects-eg.component'
import { ProjectsGulfComponent } from './projects-gulf/projects-gulf.component'
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstClassComponent } from './first-class/first-class.component';
import { SecurityComponent } from './security/security.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    FoodBeverageComponent,
    RealEstateComponent,
    LightingComponent,
    ProjectsEgComponent,
    ProjectsGulfComponent,
    FirstClassComponent,
    SecurityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule
  ]
})
export class SubCompaniesModule { }
