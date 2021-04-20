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
    this.coverImages = ['assets/img/others/cover1.jpeg','assets/img/others/cover2.jpeg','assets/img/others/cover3.jpeg','assets/img/others/cover4.jpeg', 'assets/img/others/cover5.jpeg', 'assets/img/others/cover6.jpeg']
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
