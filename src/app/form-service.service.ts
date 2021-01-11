import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies';

import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private url = 'http://localhost:3000/api/v1/user/signin'
  constructor(private http : HttpClient) { }
  
  public signinFunction (data: { email: string; subject: string; content: string; }) : Observable<any> {
    const params = new HttpParams()
    .set('email', data.email)
    .set('subject', data.subject)
    .set('content', data.content)
    return this.http.post(`${this.url}`, params)
  }
}
