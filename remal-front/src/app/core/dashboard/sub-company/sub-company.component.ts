import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/features/models/item.model';
import { Project } from 'src/app/features/models/project.model';
import { CompanyService } from 'src/app/features/sub-companies/services/company.service';
import { environment } from 'src/environments/environment';
import { Categories } from '../../enums/categories.enum';
import { Messages } from '../../enums/messages.enum';
import { SubCompaniesNames } from '../../enums/sub-companies-names.enum';
import { LoadingService } from '../../services/loading.service';
import { ToastService } from '../../services/toast.service';

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
  companyId:string;
  projectsFlag:boolean;
  productsFlag:boolean;
  galleryFlag:boolean;
  partnersFlag:boolean;
  clientsFlag:boolean;

  filesToUpload:File[];
  filesToUploadMetaData:FileMetaData[];
  filesToRemove:string[];

  companyForm: FormGroup;
  constructor(private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private companyService:CompanyService,
    private loadingService:LoadingService,
    private toastService:ToastService,
    private router:Router) {
      this.projectsFlag=false;
      this.productsFlag=false;
      this.galleryFlag=false;
      this.partnersFlag=false;
      this.clientsFlag=false;

      this.filesToUpload=[];
      this.filesToUploadMetaData=[];
      this.filesToRemove=[];
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

  extractAllProjects():Item[]{
    var projectList:Item[]=[];
    for(var item of this.projects.controls){
      projectList.push(item.value)
    }
    return projectList;
  }

  extractAllProducts():Item[]{
    var productList:Item[]=[];
    for(var item of this.products.controls){
      productList.push(item.value)
    }
    return productList;
  }

  extractAllGallery():Item[]{
    var galleryList:Item[]=[];
    for(var item of this.gallery.controls){
      galleryList.push(item.value)
    }
    return galleryList;
  }
   
  extractAllPartners():Item[]{
    var partnerList:Item[]=[];
    for(var item of this.partners.controls){
      partnerList.push(item.value)
    }
    return partnerList;
  }

  extractAllClients():Item[]{
    var clientList:Item[]=[];
    for(var item of this.clients.controls){
      clientList.push(item.value)
    }
    return clientList;
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
      this.companyId=res['company']['id'];
      if(res['company']!=undefined){
        if(this.projectsFlag)
          this.getAllProjects(res['company'][Categories.PROJECT]==undefined?[]:res['company'][Categories.PROJECT]);
        if(this.productsFlag)
          this.getAllProducts(res['company'][Categories.PRODUCT]==undefined?[]:res['company'][Categories.PRODUCT]);
        if(this.galleryFlag)
          this.getAllGallery(res['company'][Categories.GALLERY]==undefined?[]:res['company'][Categories.GALLERY]);
        if(this.partnersFlag)
          this.getAllPartners(res['company'][Categories.PARTNER]==undefined?[]:res['company'][Categories.PARTNER]);
        if(this.clientsFlag)
          this.getAllClients(res['company'][Categories.CLIENT]==undefined?[]:res['company'][Categories.CLIENT]);
      }
    }, err=>{
      console.log("*******error*****",err);
    })
  }

  getImagePath(relativePath:string){
    return environment.apiUrlImage+relativePath;
  }

handleFileInput(files: FileList,i:number,category:string) {
  console.log("files",files.item(0));
    let fileIndex=this.filesToUploadMetaData.findIndex(item=>item.index==i && item.category==category);
    console.log("file index",fileIndex);
    if(fileIndex>-1){
      if(files.item(0)==null){
        this.filesToUpload.splice(fileIndex,1);
        this.filesToUploadMetaData.splice(fileIndex,1);
      }else{
        this.filesToUpload[fileIndex]=(files.item(0));
      }
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

applyChanges(){
  if(this.filesToUpload.length!=0){
    this.saveChangesWithFiles();
  }else{
    this.saveChangesWithoutFiles();
  }
}


saveChangesWithFiles(){
  this.loadingService.startLoading();
  let formData = new FormData();
  for (var i = 0; i < this.filesToUpload.length; i++) {
    formData.append("uploads[]", this.filesToUpload[i], this.filesToUpload[i].name);
  }
  this.companyService.uploadFiles(formData,`${this.companyBranch}/${this.companyName}`).subscribe((result:any)=>{
    for(let i=0;i<this.filesToUploadMetaData.length;i++){
      let item =this.filesToUploadMetaData[i];
      if(item.category==Categories.PROJECT){
        var oldValue=this.projects.controls[item.index]['controls']['path'].value;
        this.filesToRemove.push(oldValue);
        this.projects.controls[item.index].patchValue({ path:`${this.companyBranch}/${this.companyName}/${result.files[i].filename}`});
      }
      if(item.category==Categories.PRODUCT){
        var oldValue =this.products.controls[item.index]['controls']['path'].value;
        this.filesToRemove.push(oldValue);
        this.products.controls[item.index].patchValue({ path:`${this.companyBranch}/${this.companyName}/${result.files[i].filename}`});
      }
      else if(item.category==Categories.GALLERY){
        var oldValue = this.gallery.controls[item.index]['controls']['path'].value;
        this.filesToRemove.push(oldValue);
        this.gallery.controls[item.index].patchValue({ path:`${this.companyBranch}/${this.companyName}/${result.files[i].filename}`});
      }
      else if(item.category==Categories.PARTNER){
        var oldValue=this.partners.controls[item.index]['controls']['path'].value;
        this.filesToRemove.push(oldValue);
        this.partners.controls[item.index].patchValue({ path:`${this.companyBranch}/${this.companyName}/${result.files[i].filename}`});
      }
      else if(item.category==Categories.CLIENT){
        var oldValue = this.clients.controls[item.index]['controls']['path'].value;
        this.filesToRemove.push(oldValue);
        this.clients.controls[item.index].patchValue({ path:`${this.companyBranch}/${this.companyName}/${result.files[i].filename}`});
      }
    }
    this.loadingService.stopLoading();
    this.saveChangesWithoutFiles();

  },err=>{
    this.loadingService.stopLoading();
    if(err.code=='002'){
      this.toastService.error(err.message);
    }else{
      this.toastService.error(Messages.ERROR_SERVER)
    }
  })
}

saveChangesWithoutFiles(){
  this.loadingService.startLoading();
  var company={
    filesPaths:this.filesToRemove
    ,company:{
    id:this.companyId
  }};
  if(this.projectsFlag){
    company.company[Categories.PROJECT]=this.extractAllProjects();
  }
  if(this.productsFlag){
    company.company[Categories.PRODUCT]=this.extractAllProducts();
  }
  if(this.galleryFlag){
    company.company[Categories.GALLERY]=this.extractAllGallery();
  }
  if(this.partnersFlag){
    company.company[Categories.PARTNER]=this.extractAllPartners();
  }
  if(this.clientsFlag){
    company.company[Categories.CLIENT]=this.extractAllClients();
  }
console.log("company",company);
  this.companyService.updateCompany(company).subscribe((result)=>{
    this.loadingService.stopLoading();
    console.log("result",result);
  },err=>{
    console.log("error",err);
    this.loadingService.stopLoading();
    if(err.code=='002'){
      this.toastService.error(err.message);
    }else{
      this.toastService.error(Messages.ERROR_SERVER)
    }
  })
}

onDelete(){
  
}
cancel(){
  this.router.navigate(['../../Dashboard'],{relativeTo:this.route});
}

}
