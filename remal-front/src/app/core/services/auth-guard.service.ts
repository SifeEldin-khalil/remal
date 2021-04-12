import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

 
  constructor(private authService:AuthService,
    private route:ActivatedRoute, private router:Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {  
      if(this.authService.isAuthenticated()==false){
        this.router.navigate(['Admin']);
        return false;
      }
      return  true;
    }  
}
