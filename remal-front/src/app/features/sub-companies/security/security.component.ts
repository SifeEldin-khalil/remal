import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  coverImages:string[];
  galleryImages:string[];
  public contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.coverImages=['assets/img/others/4.jpg','assets/img/others/5.jpg','assets/img/others/6.jpg']
    this.galleryImages= ['assets/img/food&beverage/1.png',
    'assets/img/food&beverage/2.png',
    'assets/img/food&beverage/3.png',
    'assets/img/food&beverage/4.png',
    'assets/img/food&beverage/5.png',
    'assets/img/food&beverage/3.png',
    'assets/img/food&beverage/1.png',
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
