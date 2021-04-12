import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Branches } from 'src/app/core/enums/branches.enum';
import { SubCompaniesNames } from 'src/app/core/enums/sub-companies-names.enum';
import { environment } from 'src/environments/environment';
import { Contact } from '../../models/contact.model';
import { Item } from '../../models/item.model';
import { Project } from '../../models/project.model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-projects-gulf',
  templateUrl: './projects-gulf.component.html',
  styleUrls: ['./projects-gulf.component.css']
})
export class ProjectsGulfComponent implements OnInit {
  partenerList:Item[];
  clientList:Item[];
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
  //   'assets/img/others/aboutus.png',
  //   'assets/img/others/aboutus.png',
  //   'assets/img/others/aboutus.png',
  //   'assets/img/others/aboutus.png',
  // ];

  // this.partenerList=[
  //   {path:"assets/img/partners/avolux.png"},
  //   {path:"assets/img/partners/bridgelux.jpg"},
  //   {path:"assets/img/partners/cree.jpg"},
  //   {path:"assets/img/partners/philips.jpg"},
  //   {path:"assets/img/partners/onelight_b.png"},
  //   {path:"assets/img/partners/schreder.png"}
  // ];

  // this.clientList=[
  //   {path:"assets/img/clients/egybank_w.jpg"},
  //   {path:"assets/img/clients/egygab.jpg"},
  //   {path:"assets/img/clients/jaz4.jpg"},
  //   {path:"assets/img/clients/aramex3.png"},
  //   {path:"assets/img/clients/travco.jpg"},
  //   {path:"assets/img/clients/opera.png"}
  // ];

  // this.projectList=[
  //   {title:"",
  //   desc:"OUR MISSION is to provide a friendly comfortable atmosphere where the customers can receive quality food, drinks and service at a reasonable price."
  //   ,path:"assets/img/others/aboutus.png"},
  // ];
  }

  ngOnInit(): void {
    this.initForm();
    this.getCompanyByNameAndBranch(SubCompaniesNames.PROJECTS,Branches.GULF);
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
        this.partenerList=res['company']['partner'];
        this.clientList=res['company']['client'];
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
      this.companyService.addContact(formData,SubCompaniesNames.PROJECTS,Branches.GULF).subscribe(res=>{
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
