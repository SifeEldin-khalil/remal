import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Branches } from 'src/app/core/enums/branches.enum';
import { SubCompaniesNames } from 'src/app/core/enums/sub-companies-names.enum';
import { environment } from 'src/environments/environment';
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
  public partnerList:Item[];
  public clientList:Item[];
  public productsCategoryMap:Map<string, Item[]>

  isLoading:boolean;
  isSubmitted:boolean;
  constructor(private formBuilder: FormBuilder,
    private companyService:CompanyService) {
      this.isLoading=false;
      this.isSubmitted=false;
      this.productsCategoryMap=new Map<string, Item[]>();
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
        this.partnerList=res['company']['partner'];
        this.clientList=res['company']['client'];
        console.log(this.productList);
        if(this.productList.length>0){
          var tmpList:Item[]=[];
          var cat:string=this.productList[0].category;
          for(var item of this.productList){
            if(item.category.replace(/\s/g, '') ==cat.replace(/\s/g, '') ){
              tmpList.push(item);
            }else{
              this.productsCategoryMap.set(cat,tmpList);
              tmpList=[];
              tmpList.push(item);
              cat=item.category;
            }
  
          }
        }
        this.productsCategoryMap.set(cat,tmpList);        
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

  getImagePath(relativePath:string){
    return environment.apiUrlImage+relativePath;
  }

}
