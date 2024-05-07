import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageViewService {

  private apiUrl = 'http://localhost:8084/api/page-views'; // Adjust this URL accordingly

  constructor(private http: HttpClient) { }

  logPageView(): Observable<any> {
    return this.http.post(this.apiUrl, {});
  }
}
