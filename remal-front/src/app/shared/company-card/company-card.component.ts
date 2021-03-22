import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { SubCompaniesNames } from 'src/app/core/sub-companies-names.enum';
import { SubCompaniesNavs } from 'src/app/core/sub-companies-navs.enum';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent implements OnInit {
  @Input() companyNames:string[];
  @Input() companyImage:string;
  constructor(private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  onClickCard(companyName:string){
    if(companyName==SubCompaniesNames.LIGHTING){
      this.router.navigate([SubCompaniesNavs.LIGHTING])
    }
    if(companyName==SubCompaniesNames.PROJECTS){
      this.router.navigate([SubCompaniesNavs.PROJECTS])
    }if(companyName==SubCompaniesNames.FOOD_AND_BEVERAGE){
      this.router.navigate([SubCompaniesNavs.FOOD_AND_BEVERAGE])
    }if(companyName==SubCompaniesNames.REAL_ESTATE){
      this.router.navigate([SubCompaniesNavs.REAL_ESTATE])
    }if(companyName==SubCompaniesNames.SECURITY){
      this.router.navigate([SubCompaniesNavs.SECURITY])
    }if(companyName==SubCompaniesNames.FIRST_CLASS){
      this.router.navigate([SubCompaniesNavs.FIRST_CLASS])
    }
  }

}
