import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InsuranceContractsService {
  readonly url = 'http://localhost:8084/api/insuranceContracts';
  constructor(private http: HttpClient) {}

  findAll(): Observable<any> {
    return this.http.get(this.url + '/get/assigned-to-agent');
  }

  create(insuranceId: number, contract: any): Observable<any> {
    return this.http.post(`${this.url}/add?id=${insuranceId}`, contract);
  }

  test(some: any[]) {
    console.log('destroyed :' + some);
  }
}
