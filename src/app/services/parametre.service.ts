import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface ElementInfo {
  id: string;
  time: number;
}
@Injectable({
  providedIn: 'root'
})
export class ParametreService {
  private apiUrl = 'http://localhost:8084/info';
  constructor(private http: HttpClient) { }

  saveElementInfo(elementInfoList: ElementInfo[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/save`, elementInfoList);
  }
  getAll(): Observable<ElementInfo[]> {
    return this.http.get<ElementInfo[]>(`${this.apiUrl}/get`)
  }
}
