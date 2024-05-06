import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MicroCreditService {
  readonly url = 'http://localhost:8084/credit';
  constructor(private http: HttpClient) { }
  addMicroCredit(formData: any): Observable<any> {
    return this.http.post(`${this.url}/createCredit`, formData);
  }
  showAllCredits(): Observable<any> {
    return this.http.get(`${this.url}/getAllCredits`)
  }

  creditByStaus(status: string): Observable<any> {
    return this.http.get(`${this.url}/getCreditsByStatus/${status}`)
  }

  simulator(amount: number, period: number, typePeriod: string): Observable<any> {
    return this.http.get(`${this.url}/simulator/${amount}/${period}/${typePeriod}`)
  }

  updateCreditStatus(id: number, status: string) {
    const body = {  // Define the body object with status property
      status: status
    }
    return this.http.put(`${this.url}/updateCreditStatus/${id}/${status}`, body);
  }

  deleteCredit(id: number): Observable<any> {
    let httpheaders = new HttpHeaders()
      .set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders
    };
    return this.http.delete(`${this.url}/deleteCredit/${id}`)
  }


  getCreditByAccount(): Observable<any> {
    let httpheaders = new HttpHeaders()
      .set('Content-type', 'application/Json');
    let options = {
      headers: httpheaders
    };
    return this.http.get(`${this.url}/getCreditByConnectedUser`)
  }

  exportCreditToExcel(amount: number, period: number, typePeriod: string): Observable<any> {
    const url = `${this.url}/excel/${amount}/${period}/${typePeriod}`;

    // Set headers for the request
    const headers = new HttpHeaders()
      .set('Accept', 'application/json') // Set appropriate content type if needed
      .set('Content-Type', 'application/json');

    // Make the GET request
    return this.http.get(url, { headers, responseType: 'blob' }); // responseType blob is used for downloading files


    // let httpheaders = new HttpHeaders()
    //   .set('Content-type', 'application/Json');
    // let options = {
    //   headers: httpheaders
    // };
    // return this.http.get(`${this.url}/excel/${amount}/${period}/${typePeriod}`)

  }
}
