import { Injectable } from '@angular/core';
import { Branches } from '../enums/branches.enum';
import { SubCompaniesNames } from '../enums/sub-companies-names.enum';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor() { }

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

  getEgyptBranch():string{
    return Branches.EGYPT;
  }

  getGulfBranch():string{
    return Branches.GULF;
  }
}
