import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]

      });
  }
  // onSubmit(){
  //   this.router.navigate(['Admin/Dashboard'])
  // }

  onForget(){
    this.authService.resetPasswordInit(this.loginForm.controls.email.value);
  }
  
  onSubmit(){
    if(this.loginForm.valid){
      var email = this.loginForm.controls.email.value;
      var password=this.loginForm.controls.password.value
      this.authService.SignInPerSession(email,password);
    }

  }

}
