import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InsuranceRequest {
  id: any;
  name: string;
  coverageAmount: number;
  beneficiary: string;
  type: string;
}
@Injectable({
  providedIn: 'root',
})
export class CreateInsuranceService {
  readonly url = 'http://localhost:8084/api/insurances';
  constructor(private http: HttpClient) {}

  create(insuranceRequest: InsuranceRequest): Observable<any> {
    // You might want to define a specific type for the response
    return this.http.post<any>(this.url, insuranceRequest);
  }
  findAll(): Observable<any> {
    return this.http.get(this.url);
  }
  test(some: any[]) {
    console.log('destroyed :' + some);
  }
}
