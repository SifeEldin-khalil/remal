import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-beverage',
  templateUrl: './food-beverage.component.html',
  styleUrls: ['./food-beverage.component.css']
})
export class FoodBeverageComponent implements OnInit {
  coverImages:string[];
  public contactForm: FormGroup;
  galleryImages:string[];
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
