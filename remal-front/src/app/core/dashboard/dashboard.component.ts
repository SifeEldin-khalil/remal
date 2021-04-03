import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private companiesService:CompaniesService) { }

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
