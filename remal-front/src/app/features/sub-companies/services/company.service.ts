import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Branches } from 'src/app/core/enums/branches.enum';
import { RestEndpoints } from 'src/app/core/enums/rest-endpoints.enum';
import { SubCompaniesNames } from 'src/app/core/enums/sub-companies-names.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { Contact } from '../../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private apiService: ApiService) { }
  
  getEgyptProjects(): string[] {
    var egProjects:string[];
    egProjects=[SubCompaniesNames.PROJECTS,SubCompaniesNames.LIGHTING,SubCompaniesNames.FOOD_AND_BEVERAGE,SubCompaniesNames.REAL_ESTATE]
    return egProjects;
  }
  getSubEgyptProjects(): string[] {
    var egProjects:string[];
    egProjects=[SubCompaniesNames.PROJECTS,SubCompaniesNames.LIGHTING,SubCompaniesNames.FOOD_AND_BEVERAGE]
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

  getCompanyByNameAndBranch(name:string,branch:string){
    var params:HttpParams=new HttpParams();
    params=params.set("name",name).set("branch",branch);
    return this.apiService.get(RestEndpoints.GET_COMPANY_BY_NAME_AND_BRANCH,params).pipe(
      map((result: any) => {
        console.log("calling endpoint: ",RestEndpoints.GET_COMPANY_BY_NAME_AND_BRANCH,'\nbody request: ',params,'\nresponse: ',result)
        return result;
      }));
  }

  getAllCareers(){
    return this.apiService.get(RestEndpoints.GET_ALL_CAREERS).pipe(
      map((result: any) => {
        console.log("calling endpoint: ",RestEndpoints.GET_ALL_CAREERS,'\nbody request: ','\nresponse: ',result)
        return result;
      }));
  }


  addContact(contactForm:Contact,name:string,branch:string){
    var body={
      name:name,
      branch:branch,
      contact:contactForm
    };
    return this.apiService.post(RestEndpoints.ADD_CONTACT,body).pipe(
      map((result: any) => {
        console.log("calling endpoint: ",RestEndpoints.ADD_CONTACT,'\nbody request: ',body,'\nresponse: ',result)
        return result;
      }));
  }

}
