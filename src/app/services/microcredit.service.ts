import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MicroCreditService {
  readonly url = 'http://localhost:8084/credit';
  constructor(private http: HttpClient) { }
  addMicroCredit(formData: any): Observable<any>{
        return this.http.post(`${this.url}/createCredit`,formData);
  }
  showAllCredits():Observable<any>{
    return this.http.get(`${this.url}/getAllCredits`)
  }
  creditByStaus(status : string):Observable<any>{
    return this.http.get(`${this.url}/getCreditsByStatus/${status}`)
  }
  deleteCredit(id : number): Observable<any> {
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete(`${this.url}/deleteCredit/${id}`)
  }
}
