import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

//loginForm
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpFailureInterceptor } from './interceptors/http-failure.interceptor';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent, AdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ],

  providers:[
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpFailureInterceptor,
    //   multi: true
    // },

  ] , 
  
  exports:[
    MainLayoutComponent
  ]
})
export class CoreModule { }
