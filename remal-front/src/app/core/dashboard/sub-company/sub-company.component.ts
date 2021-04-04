import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-company',
  templateUrl: './sub-company.component.html',
  styleUrls: ['./sub-company.component.css']
})
export class SubCompanyComponent implements OnInit {
  companyName:string;
  companyBranch:string;
  // aboutForm: FormGroup;
  // projectsForm: FormGroup;
  companyForm: FormGroup;
  constructor(private route:ActivatedRoute,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.projects.push(this.newProject("1","desc1"));
    this.projects.push(this.newProject("2","desc2"));
    this.route.params.subscribe(params => {
      if (params['name'] ){
       this.companyName=params['name'] ;
      }
      if (params['branch'] ){
        this.companyBranch=params['branch'] ;
       }
    });
  }

  initForm(){
    this.companyForm = this.formBuilder.group({
      aboutGroup: this.formBuilder.group({
          about: ['XCCNNN is to provide a friendly comfortable atmosphere where the customers can receive quality food, drinks and service at a reasonable price.', Validators.required]
      }),
      projectsGroup: this.formBuilder.group({
        projects: this.formBuilder.array([])
      })
  });
  }

  onChange(){
    console.log(this.companyForm.get("projectsGroup"));
  }
  // initAboutForm(){
  //   this.aboutForm = this.formBuilder.group({
  //     about: ['XCCNNN is to provide a friendly comfortable atmosphere where the customers can receive quality food, drinks and service at a reasonable price.', [Validators.required]]

  //     });
  // }

  // initProjectsForm(){
  //   this.projectsForm=this.formBuilder.group({
  //     projects: this.formBuilder.array([])
  //   });
  //}

   
  newProject(title:string,desc:string): FormGroup {
    return this.formBuilder.group({
      title: title,
      desc: desc,
    })
  }

  get projects() : FormArray {
    return this.companyForm.get("projectsGroup").get("projects") as FormArray;
  }

  get about() {
    console.log(this.companyForm);
    return this.companyForm.get("aboutGroup").get("about");
  }

}
