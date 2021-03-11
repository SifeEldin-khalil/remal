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

  getLighting(): string {
    return SubCompaniesNames.LIGHTING;
  }

  getProjects(): string {
    return SubCompaniesNames.PROJECTS;
  }

  getFoodAndBeverage(): string {
    return SubCompaniesNames.FOOD_AND_BEVERAGE;
  }

  getRealEstate(): string {
    return SubCompaniesNames.REAL_ESTATE;
  }

}
