import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient
      .get(this.baseUrl + path, { params })
      .pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: any = {}): Observable<any> {
    return this.httpClient
      .put(this.baseUrl + path, body)
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: any = {}, httpHeaders?: [{ key: any, value: any }]): Observable<any> {
    let headers: HttpHeaders;
    if (httpHeaders) {
      headers = new HttpHeaders();
      httpHeaders.forEach((header) => {
        headers.append(header.key, header.value);
      });
    }
    return this.httpClient
      .post(this.baseUrl + path, body, { headers })
      .pipe(
        catchError(this.formatErrors));
  }

  public delete(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient
      .delete(this.baseUrl + path, { params })
      .pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }

 
}
