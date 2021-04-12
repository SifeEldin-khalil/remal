import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Branches } from 'src/app/core/enums/branches.enum';
import { SubCompaniesNames } from 'src/app/core/enums/sub-companies-names.enum';
import { Contact } from '../../models/contact.model';
import { Item } from '../../models/item.model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.css']
})
export class LightingComponent implements OnInit {
  public contactForm: FormGroup;
  public productList:Item[];
  public partenerList:Item[];
  public clientList:Item[];
  isLoading:boolean;
  isSubmitted:boolean;
  constructor(private formBuilder: FormBuilder,
    private companyService:CompanyService) {
      this.isLoading=false;
      this.isSubmitted=false;
    // this.productList=[
    //   {title:"XXXX VVVVVV",path:"assets/img/lighting/1.png"},
    //   {title:"XXXX VVVVVV",path:"assets/img/lighting/2.png"},
    //   {title:"XXXX VVVVVV",path:"assets/img/lighting/3.png"},
    //   {title:"XXXX VVVVVV",path:"assets/img/lighting/4.png"},
    //   {title:"XXXX VVVVVV",path:"assets/img/lighting/5.png"},
    //   {title:"XXXX VVVVVV",path:"assets/img/lighting/6.png"},
    //   {title:"XXXX VVVVVV",path:"assets/img/lighting/7.png"},
    //   {title:"XXXX VVVVVV",path:"assets/img/lighting/8.png"},
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
  }

  ngOnInit(): void {
    this.initForm();
    this.getCompanyByNameAndBranch(SubCompaniesNames.LIGHTING,Branches.EGYPT);
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
        this.productList=res['company']['product'];
        this.partenerList=res['company']['partner'];
        this.clientList=res['company']['client'];
      }
    }, err=>{
      console.log("*******error*****");
    })
  }

  sendContact(){
    if(!this.contactForm.valid){
      this.setFormError();
    }else{
      var formData:Contact=this.contactForm.getRawValue();
      this.isLoading=true;
      this.companyService.addContact(formData,SubCompaniesNames.LIGHTING,Branches.EGYPT).subscribe(res=>{
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
