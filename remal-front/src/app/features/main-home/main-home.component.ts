import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../sub-companies/services/company.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css'],
})
export class MainHomeComponent implements OnInit {
  coverImages: string[];
  constructor(private companyService:CompanyService) {
    this.coverImages = ['assets/img/others/4.jpg', 'assets/img/others/5.jpg', 'assets/img/others/6.jpg']
  }
  ngOnInit(): void {
  }

  getEgyptProjects(): string[] {
    return this.companyService.getEgyptProjects();
  }

  getGulfProjects(): string[] {
    return this.companyService.getGulfProjects();
  }

  getEgyptBranch():string{
    return this.companyService.getEgyptBranch();
  }

  getGulfBranch():string{
    return this.companyService.getGulfBranch();
  }

 

}
