import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.css']
})
export class LightingComponent implements OnInit {
  coverImages:string[];
  galleryImages:string[];
  public contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.galleryImages= ['assets/img/lighting/1.png',
    'assets/img/lighting/2.png',
    'assets/img/lighting/3.png',
    'assets/img/lighting/4.png',
    'assets/img/lighting/5.png',
    'assets/img/lighting/6.png',
    'assets/img/lighting/7.png',
    'assets/img/lighting/8.png',
    'assets/img/lighting/9.png',
    'assets/img/lighting/10.png',
    'assets/img/lighting/11.png',
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
