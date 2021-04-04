import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../models/item.model';
import { Project } from '../../models/project.model';

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
  constructor(private formBuilder: FormBuilder) {
    this.galleryImages= [
    'assets/img/others/aboutus.png',
    'assets/img/others/aboutus.png',
    'assets/img/others/aboutus.png',
    'assets/img/others/aboutus.png',
  ];

  this.partenerList=[
    {pathImage:"assets/img/partners/avolux.png"},
    {pathImage:"assets/img/partners/bridgelux.jpg"},
    {pathImage:"assets/img/partners/cree.jpg"},
    {pathImage:"assets/img/partners/philips.jpg"},
    {pathImage:"assets/img/partners/onelight_b.png"},
    {pathImage:"assets/img/partners/schreder.png"}
  ];

  this.clientList=[
    {pathImage:"assets/img/clients/egybank_w.jpg"},
    {pathImage:"assets/img/clients/egygab.jpg"},
    {pathImage:"assets/img/clients/jaz4.jpg"},
    {pathImage:"assets/img/clients/aramex3.png"},
    {pathImage:"assets/img/clients/travco.jpg"},
    {pathImage:"assets/img/clients/opera.png"}
  ];

  this.projectList=[
    {title:"",
    description:"OUR MISSION is to provide a friendly comfortable atmosphere where the customers can receive quality food, drinks and service at a reasonable price."
    ,pathImage:"assets/img/others/aboutus.png"},
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
