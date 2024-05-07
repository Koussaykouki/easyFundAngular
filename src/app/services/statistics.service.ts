import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private apiUrl = 'http://localhost:8084/api/statistics/today-stats';
  private apiUrl2 = 'http://localhost:8084/api/statistics/last-7-days'; // Adjust this URL accordingly
  private apiUrl3 = 'http://localhost:8084/api/statistics/top-urls'; // Adjust this URL accordingly


  constructor(private http: HttpClient) { }

  getTodayStatistics(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getViewsForLast7Days(): Observable<any> {
    return this.http.get<any>(this.apiUrl2);
  }
  getTopUrls(): Observable<any> {
    return this.http.get<any>(this.apiUrl3);
  }
}
