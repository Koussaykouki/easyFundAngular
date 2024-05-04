import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StripeService {

  readonly url = 'http://localhost:8084/stripe/charge';
  constructor(private http: HttpClient) { }
  pay(form:any,id:number):Observable<any>{
    return  this.http.post(`${this.url}/${id}`,form);
  }
}
