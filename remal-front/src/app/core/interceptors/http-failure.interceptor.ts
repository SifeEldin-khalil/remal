import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError, map, retry, retryWhen, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpFailureInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //   return next.handle(request).pipe(
    //     map((event: HttpEvent<any>) => {
    //         if (event instanceof HttpResponse) {
    //             // console.log('event--->>>', event);
    //             // if(event['code']=='003'){
    //             //  throwError("");
    //             // }
    //         }
    //         return event;
    //     })
    //     ,catchError(error => this.handleGeneralErrors(error))
    //     );
    return next.handle(request).pipe(
        // retryWhen operator should come before catchError operator as it is more specific
        retryWhen(errors => errors.pipe(
          // inside the retryWhen, use a tap operator to throw an error 
          // if you don't want to retry
          tap(error => {
            if (error.status !== 500 && error.status !== 502) {
              throw error;
            }
          })
        )),
    
        // now catch all other errors
        catchError(error => {     
          if (error.status === 401 || error.status === 400 || error.status === 403) {
            this.router.navigateByUrl('abort-access', { replaceUrl: true });
          }
    
          return throwError("error occured");
        })
      );
  }

  private handleGeneralErrors(err: HttpErrorResponse): Observable<any> {
    console.log("err",err);
    return throwError("error occured");
  }
}
