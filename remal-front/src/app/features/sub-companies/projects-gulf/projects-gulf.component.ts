import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects-gulf',
  templateUrl: './projects-gulf.component.html',
  styleUrls: ['./projects-gulf.component.css']
})
export class ProjectsGulfComponent implements OnInit {
  coverImages:string[];
  galleryImages:string[];
  public contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.coverImages=['assets/img/others/4.jpg','assets/img/others/5.jpg','assets/img/others/6.jpg']
    this.galleryImages= [
    'assets/img/others/aboutus.png',
    'assets/img/others/aboutus.png',
    'assets/img/others/aboutus.png',
    'assets/img/others/aboutus.png',
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
