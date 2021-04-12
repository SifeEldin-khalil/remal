
import { Injectable, Inject } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Messages } from '../enums/messages.enum';
import { ErrorCode } from '../enums/error-codes.enum';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  changeToken=new Subject<any>();
  constructor( private  afAuth: AngularFireAuth,
    private router:Router,
    @Inject(DOCUMENT) private document: any
    ) {
      afAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          sessionStorage.setItem('user', JSON.stringify(this.userData));
          this.getToken();
          this.changeToken.next();
          if(this.router.url=="/Admin"){
            this.router.navigate(['Admin/Dashboard'])
          }
          // self.router.navigate(['Admin/Dashboard'],{relativeTo:self.route});
        } else {
          sessionStorage.clear();
          this.changeToken.next();
  
        }
      })
     }
     isAuthenticated(){
      if(sessionStorage.getItem('token')==null){
        return false;
      }
        return true;  
    }
  
  
    SignInPerSession(email, password){
      var self = this;
     return this.afAuth.auth.setPersistence(auth.Auth.Persistence.SESSION)    
      .then(function() {
       self.afAuth.auth.signInWithEmailAndPassword(email, password)
       .then(async (result) => {
            await self.getToken();
            self.router.navigate(['Admin/Dashboard'])
        }).catch((error) => {
          var errorMsg:string;
          if(error.code == ErrorCode.USER_NOT_FOUND){
            errorMsg=Messages.ERROR_USER_NAME_DOESNT_EXIST;
          }else if(error.code == ErrorCode.INVALID_PASSWORD){
            errorMsg=Messages.ERROR_PASSWORD_INVALID
          }else{
            errorMsg=error.message;
          }
          window.alert(errorMsg);
        });
    })
    .catch(function(error) {
      window.alert(error.message)
    });
  
  
    }
  
    
    SignOut() {
      var self = this;
      this.afAuth.auth.signOut().then(() => {
        sessionStorage.clear();
        self.router.navigate(['Admin'])
      })
    }
  
  
    async getToken(){
      (await this.afAuth.auth.currentUser).getIdToken().then(function(data) {
        sessionStorage.setItem('token',data);
      });
    }
  
    resetPasswordInit(email: string) { 
        return this.afAuth.auth.sendPasswordResetEmail(
        email, 
        { url: this.document.location.href }).then(result=>{
          window.alert(Messages.ERROR_CHECK_MAIL_TO_RESET_PASSWORD)
        }).catch(error=>{
          var errorMsg:string;
          if(error.code == ErrorCode.USER_NOT_FOUND){
            errorMsg=Messages.ERROR_USER_NAME_DOESNT_EXIST;
          }else if(error.code == ErrorCode.INVALID_PASSWORD){
            errorMsg=Messages.ERROR_PASSWORD_INVALID
          }else{
            errorMsg=error.message;
          }
          window.alert(errorMsg);
        });; 
      }
}
