import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Branches } from 'src/app/core/enums/branches.enum';
import { SubCompaniesNames } from 'src/app/core/enums/sub-companies-names.enum';
import { environment } from 'src/environments/environment';
import { Contact } from '../../models/contact.model';
import { Project } from '../../models/project.model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  galleryImages:string[];
  projectList:Project[];
  public contactForm: FormGroup;
  isLoading:boolean;
  isSubmitted:boolean;
  constructor(private formBuilder: FormBuilder,
    private companyService:CompanyService) {
      this.isLoading=false;
      this.isSubmitted=false;
  //   this.galleryImages= [
  //   'assets/img/security/project/porto-arabia.jpg',
  //   'assets/img/security/project/msheireb-properties.jpg',
  //   'assets/img/security/project/hamad-inter-airport.jpg',
  //   'assets/img/security/project/central-market.jpg',
  // ];
  
  // this.projectList=[
  //   {title:"Central Market",
  //   desc:"Project desc Project descProject descProject descProject descProject descProject desc Project desc Project descProject descProject descProject descProject descProject desc."
  //   ,path:"assets/img/security/project/central-market.jpg"},
  //   {title:"Hamad International Airport",
  //   desc:"Project desc Project descProject descProject descProject descProject descProject desc Project desc Project descProject descProject descProject descProject descProject desc"
  //   ,path:"assets/img/security/project/hamad-inter-airport.jpg"},
  //   {title:"Msheireb Properties",
  //   desc:"Project desc Project descProject descProject descProject descProject descProject desc Project desc Project descProject descProject descProject descProject descProject desc"
  //   ,path:"assets/img/security/project/msheireb-properties.jpg"},
  //   {title:"Porto Arabia",
  //   desc:"Project desc Project descProject descProject descProject descProject descProject desc Project desc Project descProject descProject descProject descProject descProject desc"
  //   ,path:"assets/img/security/project/porto-arabia.jpg"}
  // ];
  }

  ngOnInit(): void {
    this.initForm();
    this.getCompanyByNameAndBranch(SubCompaniesNames.SECURITY,Branches.GULF);
  }
  
  private initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: [, [Validators.required]],
      phoneNumber: [, [Validators.required]],
      msg: [, [Validators.required]],
    });
  }

  getCompanyByNameAndBranch(name:string,branch:string){
    this.companyService.getCompanyByNameAndBranch(name,branch).subscribe(res=>{
      console.log(res['company']);
      if(res['company']!=undefined){
        this.projectList=res['company']['project'];
        this.galleryImages=res['company']['gallery'];
      }
    }, err=>{
      console.log("*******error*****");
    })
  }


  getImagePath(relativePath:string){
    return environment.apiUrlImage+relativePath;
  }

  sendContact(){
    if(!this.contactForm.valid){
      this.setFormError();
    }else{
      var formData:Contact=this.contactForm.getRawValue();
      this.isLoading=true;
      this.companyService.addContact(formData,SubCompaniesNames.SECURITY,Branches.GULF).subscribe(res=>{
        console.log(res);
        this.isLoading=false;
        this.isSubmitted=true;
        this.resetForm();
      }, err=>{
        console.log("*******error*****");
      })
    }
  }


  setFormError(){
    for (var name in this.contactForm.controls){
      if (this.contactForm.controls[name].status == "INVALID") {
        this.contactForm.controls[name].markAsTouched();
      }
   }
  }

  resetForm(){
    this.contactForm.reset();
  }


}
