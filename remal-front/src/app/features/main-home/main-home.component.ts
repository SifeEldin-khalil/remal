import { Component, OnInit, ViewChild } from '@angular/core';
import { Branches } from 'src/app/core/enums/branches.enum';
import { SubCompaniesNames } from 'src/app/core/enums/sub-companies-names.enum';
import { CompaniesService } from 'src/app/core/services/companies.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css'],
})
export class MainHomeComponent implements OnInit {
  coverImages: string[];
  constructor(private companiesService:CompaniesService) {
    this.coverImages = ['assets/img/others/4.jpg', 'assets/img/others/5.jpg', 'assets/img/others/6.jpg']
  }
  ngOnInit(): void {
  }

  getEgyptProjects(): string[] {
    return this.companiesService.getEgyptProjects();
  }

  getGulfProjects(): string[] {
    return this.companiesService.getGulfProjects();
  }

  getEgyptBranch():string{
    return this.companiesService.getEgyptBranch();
  }

  getGulfBranch():string{
    return this.companiesService.getGulfBranch();
  }

}
