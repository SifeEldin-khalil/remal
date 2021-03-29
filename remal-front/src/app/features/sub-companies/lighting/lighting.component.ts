import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../models/item.model';

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
  constructor(private formBuilder: FormBuilder) {
    this.productList=[
      {title:"XXXX VVVVVV",pathImage:"assets/img/lighting/1.png"},
      {title:"XXXX VVVVVV",pathImage:"assets/img/lighting/2.png"},
      {title:"XXXX VVVVVV",pathImage:"assets/img/lighting/3.png"},
      {title:"XXXX VVVVVV",pathImage:"assets/img/lighting/4.png"},
      {title:"XXXX VVVVVV",pathImage:"assets/img/lighting/5.png"},
      {title:"XXXX VVVVVV",pathImage:"assets/img/lighting/6.png"},
      {title:"XXXX VVVVVV",pathImage:"assets/img/lighting/7.png"},
      {title:"XXXX VVVVVV",pathImage:"assets/img/lighting/8.png"},
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
