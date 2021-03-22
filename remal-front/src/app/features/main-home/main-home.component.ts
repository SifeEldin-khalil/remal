import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { SubCompaniesNames } from 'src/app/core/sub-companies-names.enum';
import { SubCompaniesModule } from '../sub-companies/sub-companies.module';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css'],
})
export class MainHomeComponent implements OnInit {
  coverImages: string[];
  constructor() {
    this.coverImages = ['assets/img/others/4.jpg', 'assets/img/others/5.jpg', 'assets/img/others/6.jpg']
  }
  ngOnInit(): void {
  }

  getEgyptProjects(): string[] {
    var egProjects:string[];
    egProjects=[SubCompaniesNames.PROJECTS,SubCompaniesNames.LIGHTING,SubCompaniesNames.FOOD_AND_BEVERAGE,SubCompaniesNames.REAL_ESTATE]
    return egProjects;
  }
  
  getGulfProjects(): string[] {
    var gulfProjects:string[];
    gulfProjects=[SubCompaniesNames.PROJECTS,SubCompaniesNames.FIRST_CLASS,SubCompaniesNames.FOOD_AND_BEVERAGE,SubCompaniesNames.SECURITY]
    return gulfProjects;
  }

  

}
