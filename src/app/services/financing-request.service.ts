import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FinancingRequestService {

  readonly url = 'http://localhost:8084/financingrequest';
  constructor(private http: HttpClient) { }
  findAll():Observable<any>{
    return this.http.get(`${this.url}/findall`)
  }
  findByOffer(id:number):Observable<any>{
    return  this.http.get(`${this.url}/findbyoffer/${id}`);
  }
  downloadFile(filename: string): Observable<Blob> {
    return this.http.get(`${this.url}/downloadExcel/${filename}`, { responseType: 'blob' });
  }
  excel(filename: number): Observable<ArrayBuffer> {
   return this.http.get(`${this.url}/downloadExcel11/${filename}`, { responseType: 'arraybuffer' });
 }
 findUser(id:number):Observable<any>{
  return this.http.get(`${this.url}/finduser/${id}`)
 }
 
}
