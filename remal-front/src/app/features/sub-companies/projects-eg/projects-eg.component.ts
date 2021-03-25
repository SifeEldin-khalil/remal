import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects-eg',
  templateUrl: './projects-eg.component.html',
  styleUrls: ['./projects-eg.component.css']
})
export class ProjectsEgComponent implements OnInit {
  coverImages:string[];
  public contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.coverImages=['assets/img/others/4.jpg','assets/img/others/5.jpg','assets/img/others/6.jpg']
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
