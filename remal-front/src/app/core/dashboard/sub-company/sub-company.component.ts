import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/features/models/item.model';
import { Project } from 'src/app/features/models/project.model';
import { CompanyService } from 'src/app/features/sub-companies/services/company.service';
import { environment } from 'src/environments/environment';
import { Categories } from '../../enums/categories.enum';
import { SubCompaniesNames } from '../../enums/sub-companies-names.enum';

interface FileMetaData {
 index:number;
 category:string;
}
@Component({
  selector: 'app-sub-company',
  templateUrl: './sub-company.component.html',
  styleUrls: ['./sub-company.component.css']
})
export class SubCompanyComponent implements OnInit {
  companyName:string;
  companyBranch:string;

  projectsFlag:boolean;
  productsFlag:boolean;
  galleryFlag:boolean;
  partnersFlag:boolean;
  clientsFlag:boolean;

  filesToUpload:File[];
  filesToUploadMetaData:FileMetaData[];


  companyForm: FormGroup;
  constructor(private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private companyService:CompanyService) {
      this.projectsFlag=false;
      this.productsFlag=false;
      this.galleryFlag=false;
      this.partnersFlag=false;
      this.clientsFlag=false;

      this.filesToUpload=[];
      this.filesToUploadMetaData=[];
     }

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe(params => {
      if (params['name'] ){
       this.companyName=params['name'];
      }
      if (params['branch'] ){
        this.companyBranch=params['branch'];
       }
       this.setAllFlags();
       this.getCompanyByNameAndBranch(this.companyName,this.companyBranch);
    });
  }

  initForm(){
    this.companyForm = this.formBuilder.group({
      projectsGroup: this.formBuilder.group({
        projects: this.formBuilder.array([])
      }),
      productsGroup: this.formBuilder.group({
        products: this.formBuilder.array([])
      }),
      galleryGroup: this.formBuilder.group({
        gallery: this.formBuilder.array([])
      }),
      partnersGroup: this.formBuilder.group({
        partners: this.formBuilder.array([])
      }),
      clientsGroup: this.formBuilder.group({
        clients: this.formBuilder.array([])
      })

  });
  }

  setAllFlags(){
    console.log(this.companyName);
    if(this.companyName==SubCompaniesNames.LIGHTING){
      this.productsFlag=true;
    }if(this.companyName==SubCompaniesNames.PROJECTS || this.companyName==SubCompaniesNames.SECURITY){
      this.projectsFlag=true;
    }if(this.companyName!=SubCompaniesNames.LIGHTING){
      this.galleryFlag=true;
    }if(this.companyName==SubCompaniesNames.PROJECTS || this.companyName==SubCompaniesNames.LIGHTING){
      this.partnersFlag=true;
      this.clientsFlag=true;
    }
  }

  getAllProjects(projectList:Project[]){
    for(let item of projectList){
      this.projects.push(this.formBuilder.group({
        title: item.title,
        desc: item.desc,
        path:item.path
      }));
    }
  }

  getAllProducts(productList:Item[]){
    for(let item of productList){
      this.products.push(this.formBuilder.group({
        title: item.title,
        path:item.path,
        category:item.category
      }));
    }
  }

  getAllGallery(galleryList:Item[]){
    for(let item of galleryList){
      this.gallery.push(this.formBuilder.group({
        title: item.title,
        path:item.path
      }));
    }
  }
   
  getAllPartners(partnerList:Item[]){
    for(let item of partnerList){
      this.partners.push(this.formBuilder.group({
        title: item.title,
        path:item.path
      }));
    }
  }

  getAllClients(clientList:Item[]){
    for(let item of clientList){
      this.clients.push(this.formBuilder.group({
        title: item.title,
        path:item.path
      }));
    }
  }


  get projects() : FormArray {
    return this.companyForm.get("projectsGroup").get("projects") as FormArray;
  }

  get products() : FormArray {
    return this.companyForm.get("productsGroup").get("products") as FormArray;
  }

  get gallery() : FormArray {
    return this.companyForm.get("galleryGroup").get("gallery") as FormArray;
  }

  get partners() : FormArray {
    return this.companyForm.get("partnersGroup").get("partners") as FormArray;
  }

  get clients() : FormArray {
    return this.companyForm.get("clientsGroup").get("clients") as FormArray;
  }

  getCompanyByNameAndBranch(name:string,branch:string){
    this.companyService.getCompanyByNameAndBranch(name,branch).subscribe(res=>{
      console.log(res['company']);
      if(res['company']!=undefined){
        this.getAllProjects(res['company'][Categories.PROJECT]==undefined?[]:res['company'][Categories.PROJECT]);
        this.getAllProducts(res['company'][Categories.PRODUCT]==undefined?[]:res['company'][Categories.PRODUCT]);
        this.getAllGallery(res['company'][Categories.GALLERY]==undefined?[]:res['company'][Categories.GALLERY]);
        this.getAllPartners(res['company'][Categories.PARTNER]==undefined?[]:res['company'][Categories.PARTNER]);
        this.getAllClients(res['company'][Categories.CLIENT]==undefined?[]:res['company'][Categories.CLIENT]);
      }
    }, err=>{
      console.log("*******error*****");
    })
  }

  getImagePath(relativePath:string){
    return environment.apiUrlImage+relativePath;
  }

handleFileInput(files: FileList,i:number,category:string) {
    let fileIndex=this.filesToUploadMetaData.findIndex(item=>item.index==i && item.category==category);
    if(fileIndex>-1){
      this.filesToUpload[fileIndex]=(files.item(0));
    }else{
      this.filesToUpload.push(files.item(0));
      this.filesToUploadMetaData.push({category:category,index:i})
    }
    console.log(this.filesToUpload);
    console.log(this.filesToUploadMetaData);

}

public get Categories(): typeof Categories {
  return Categories; 
}

SaveChanges(){
  
}

}
