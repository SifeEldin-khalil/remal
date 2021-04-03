import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Branches } from 'src/app/core/enums/branches.enum';
import { SubCompaniesNames } from 'src/app/core/enums/sub-companies-names.enum';
import { SubCompaniesNavs } from 'src/app/core/enums/sub-companies-navs.enum';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent implements OnInit {
  @Input() companyNames:string[];
  @Input() companyImage:string;
  @Input() companyBranch:string;
  @Input() adminFlag:boolean;
  constructor(private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  onClickCard(companyName:string){
   if(this.adminFlag){
    this.routingInEditMode(companyName);
   }else{
    this.routingInViewMode(companyName);

   }
  }


  routingInViewMode(companyName:string){
    var companyNav:string;
    if(companyName==SubCompaniesNames.LIGHTING)
      companyNav = SubCompaniesNavs.LIGHTING;
    if(companyName==SubCompaniesNames.PROJECTS){
      companyNav=SubCompaniesNavs.PROJECTS;
    }if(companyName==SubCompaniesNames.FOOD_AND_BEVERAGE){
      companyNav=SubCompaniesNavs.FOOD_AND_BEVERAGE;
    }if(companyName==SubCompaniesNames.REAL_ESTATE){
      companyNav=SubCompaniesNavs.REAL_ESTATE;
    }if(companyName==SubCompaniesNames.SECURITY){
      companyNav=SubCompaniesNavs.SECURITY;
    }if(companyName==SubCompaniesNames.FIRST_CLASS){
      companyNav=SubCompaniesNavs.FIRST_CLASS;
    }
    this.router.navigate([`${this.companyBranch}/${companyNav}`]);
  }

  routingInEditMode(companyName:string){
    var companyNav:string;
    if(companyName==SubCompaniesNames.LIGHTING)
      companyNav = SubCompaniesNavs.LIGHTING;
    if(companyName==SubCompaniesNames.PROJECTS){
      companyNav=SubCompaniesNavs.PROJECTS;
    }if(companyName==SubCompaniesNames.FOOD_AND_BEVERAGE){
      companyNav=SubCompaniesNavs.FOOD_AND_BEVERAGE;
    }if(companyName==SubCompaniesNames.REAL_ESTATE){
      companyNav=SubCompaniesNavs.REAL_ESTATE;
    }if(companyName==SubCompaniesNames.SECURITY){
      companyNav=SubCompaniesNavs.SECURITY;
    }if(companyName==SubCompaniesNames.FIRST_CLASS){
      companyNav=SubCompaniesNavs.FIRST_CLASS;
    }
    this.router.navigate([`../${this.companyBranch}/${companyNav}`],{relativeTo:this.route});
  }

}
