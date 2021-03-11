import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get f() {
    return this.contactForm.controls;
  }

}
