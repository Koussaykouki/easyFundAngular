import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  readonly url = 'http://localhost:8084/offre';
  constructor(private http: HttpClient) { }
  addOffer(formData: any): Observable<any>{
        return this.http.post(`${this.url}/addOffre`,formData);
  }
  showAll():Observable<any>{
    return this.http.get(`${this.url}/alloffers`)
  }
  bystaus(status : string):Observable<any>{
    return this.http.get(`${this.url}/getbystatus/${status}`)
  }
  delete(id : number): Observable<any> {
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete(`${this.url}/delete/${id}`)
  }
  srap(): Observable<any>{ 
    return this.http.post(`${this.url}/scrap`,this.url);
  }
  deleteAll(): Observable<any>{
    return this.http.delete(`${this.url}/deletallOffers`)
  }
  getfinancings(id :number): Observable<any>{
    return this.http.get(`${this.url}/getfinancing/${id}`)
  }
  approve(id :number): Observable<any>{
    return this.http.get(`${this.url}/approve/${id}`)

  }
}
