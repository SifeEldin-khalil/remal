import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../models/item.model';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-eg',
  templateUrl: './projects-eg.component.html',
  styleUrls: ['./projects-eg.component.css']
})
export class ProjectsEgComponent implements OnInit {
  galleryImages:string[];
  partenerList:Item[];
  clientList:Item[];
  projectList:Project[];
  public contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.galleryImages= [
    'assets/img/projects-eg/4.jpeg',
    'assets/img/projects-eg/5.jpeg',
    'assets/img/projects-eg/9.jpeg',
    'assets/img/projects-eg/10.jpeg',
    'assets/img/projects-eg/1.png',
    'assets/img/projects-eg/3.jpeg',
    'assets/img/projects-eg/6.png',
    'assets/img/projects-eg/8.jpeg',
  ];
  this.partenerList=[
    {pathImage:"assets/img/partners/avolux.png"},
    {pathImage:"assets/img/partners/bridgelux.jpg"},
    {pathImage:"assets/img/partners/cree.jpg"},
    {pathImage:"assets/img/partners/philips.jpg"},
    {pathImage:"assets/img/partners/onelight_b.png"},
    {pathImage:"assets/img/partners/meanwell.jpg"},
    {pathImage:"assets/img/partners/schreder.png"}
  ];

  this.clientList=[
    {pathImage:"assets/img/clients/57357_2.png"},
    {pathImage:"assets/img/clients/egybank_w.jpg"},
    {pathImage:"assets/img/clients/egygab.jpg"},
    {pathImage:"assets/img/clients/jaz4.jpg"},
    {pathImage:"assets/img/clients/aramex3.png"},
    {pathImage:"assets/img/clients/travco.jpg"},
    {pathImage:"assets/img/clients/mcv2.jpg"},
    {pathImage:"assets/img/clients/opera.png"}

  ];

  this.projectList=[
    {title:"El-Fardous Axis",
    description:"It is our pleasure to design street lighting system for fardous axis and supply our steet lightting luminaire RE - ST - 100W to lighten this huge project."
    ,pathImage:"assets/img/projects-eg/1.png"},
    {title:"Moutain View Projects",
    description:"it is our pleasure to deal with DMA for mountain view projects like ( Icity, Hyde Park and Chillout Park) to supply them with land scape luminaire like spikes, bollards, uplight, step light and bulk heads"
    ,pathImage:"assets/img/projects-eg/3.jpeg"},
    {title:"Grand Plaza",
    description:"it's our work in such mega project to ssupplyy them with lightting fixturees and low current system like CCTV, fire alarm, data and TELE systems"
    ,pathImage:"assets/img/projects-eg/6.png"},
    {title:"JAZ AQUAMARINE",
    description:"it is our pleasure to deal with one of our best partner Travco to design and supply lighting system"
    ,pathImage:"assets/img/projects-eg/8.jpeg"}
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
