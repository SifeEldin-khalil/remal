import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects-eg',
  templateUrl: './projects-eg.component.html',
  styleUrls: ['./projects-eg.component.css']
})
export class ProjectsEgComponent implements OnInit {
  coverImages:string[];
  galleryImages:string[];
  public contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.coverImages=['assets/img/others/4.jpg','assets/img/others/5.jpg','assets/img/others/6.jpg']
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
