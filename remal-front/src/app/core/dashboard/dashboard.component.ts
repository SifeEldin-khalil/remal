import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/features/sub-companies/services/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private companyService:CompanyService) { }

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
