import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  coverImages:string[];
  galleryImages:string[];
  projectList:Project[];
  public contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.coverImages=['assets/img/others/4.jpg','assets/img/others/5.jpg','assets/img/others/6.jpg']
    this.galleryImages= [
    'assets/img/security/project/porto-arabia.jpg',
    'assets/img/security/project/msheireb-properties.jpg',
    'assets/img/security/project/hamad-inter-airport.jpg',
    'assets/img/security/project/central-market.jpg',
  ];
  
  this.projectList=[
    {title:"Central Market",
    description:["Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description."
    ],pathImage:"assets/img/security/project/central-market.jpg"},
    {title:"Hamad International Airport",
    description:["Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description"
    ],pathImage:"assets/img/security/project/hamad-inter-airport.jpg"},
    {title:"Msheireb Properties",
    description:["Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description"
    ],pathImage:"assets/img/security/project/msheireb-properties.jpg"},
    {title:"Porto Arabia",
    description:["Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description",
    "Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description Project Description Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject Description"
    ],pathImage:"assets/img/security/project/porto-arabia.jpg"}
  ];
  }

  ngOnInit(): void {
    this.initForm();
  }
  
  private initForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: [, [Validators.required]],
      phoneNumber: [, [Validators.required]],
      msg: [, [Validators.required]],
    });
  }

}
