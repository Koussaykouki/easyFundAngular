import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class FinancingsService {
  excelData: any[]=[];
  readonly url = 'http://localhost:8084/financingrequest';
  constructor(private http: HttpClient) { }
  findByOffer(id:number):Observable<any>{
    return  this.http.get(`${this.url}/findbyoffer/${id}`);
  }
  downloadFile(filename: string): Observable<Blob> {
    return this.http.get(`${this.url}/downloadExcel/${filename}`, { responseType: 'blob' });
  }
  excel(filename: number): Observable<ArrayBuffer> {
   return this.http.get(`${this.url}/downloadExcel11/${filename}`, { responseType: 'arraybuffer' });
 }
 myFianancing():Observable<any>{
  return this.http.get(`${this.url}/mylist`);
 }

  }
