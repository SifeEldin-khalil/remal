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
  selector: 'app-projects-eg',
  templateUrl: './projects-eg.component.html',
  styleUrls: ['./projects-eg.component.css']
})
export class ProjectsEgComponent implements OnInit {
  galleryImages:Item[];
  partenerList:Item[];
  clientList:Item[];
  projectList:Project[];
  isLoading:boolean;
  isSubmitted:boolean;
  public contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private companyService:CompanyService) {
      this.isLoading=false;
      this.isSubmitted=false;
  //   this.galleryImages= [
  //   'assets/img/projects-eg/4.jpeg',
  //   'assets/img/projects-eg/5.jpeg',
  //   'assets/img/projects-eg/9.jpeg',
  //   'assets/img/projects-eg/10.jpeg',
  //   'assets/img/projects-eg/1.png',
  //   'assets/img/projects-eg/3.jpeg',
  //   'assets/img/projects-eg/6.png',
  //   'assets/img/projects-eg/8.jpeg',
  // ];
  // this.partenerList=[
  //   {path:"assets/img/partners/avolux.png"},
  //   {path:"assets/img/partners/bridgelux.jpg"},
  //   {path:"assets/img/partners/onelight_b.png"},
  //   {path:"assets/img/partners/cree.jpg"},
  //   {path:"assets/img/partners/schreder.png"},
  //   {path:"assets/img/partners/philips.jpg"},
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
  //   {title:"El-Fardous Axis",
  //   desc:"It is our pleasure to design street lighting system for fardous axis and supply our steet lightting luminaire RE - ST - 100W to lighten this huge project."
  //   ,path:"assets/img/projects-eg/1.png"},
  //   {title:"Moutain View Projects",
  //   desc:"it is our pleasure to deal with DMA for mountain view projects like ( Icity, Hyde Park and Chillout Park) to supply them with land scape luminaire like spikes, bollards, uplight, step light and bulk heads"
  //   ,path:"assets/img/projects-eg/3.jpeg"},
  //   {title:"Grand Plaza",
  //   desc:"it's our work in such mega project to ssupplyy them with lightting fixturees and low current system like CCTV, fire alarm, data and TELE systems"
  //   ,path:"assets/img/projects-eg/6.png"},
  //   {title:"JAZ AQUAMARINE",
  //   desc:"it is our pleasure to deal with one of our best partner Travco to design and supply lighting system"
  //   ,path:"assets/img/projects-eg/8.jpeg"}
  // ];

  }

  ngOnInit(): void {
    this.initForm();
    this.getCompanyByNameAndBranch(SubCompaniesNames.PROJECTS,Branches.EGYPT);

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
      console.log("res",res['company']);
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
      this.companyService.addContact(formData,SubCompaniesNames.PROJECTS,Branches.EGYPT).subscribe(res=>{
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
