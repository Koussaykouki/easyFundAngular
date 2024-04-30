import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  private apiUrl = 'http://localhost:8084/api/claims';

  constructor(private http: HttpClient) { }

  getClaimById(claimId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${claimId}`);
  }

  getAllOpenClaims(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  saveClaim(claim: any): Observable<any> {
    return this.http.post(this.apiUrl, claim, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateClaim(claimId: number, claim: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${claimId}`, claim, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteClaim(claimId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${claimId}`);
  }

  getClaimsAssignedToAgent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/assigned-to-agent`);
  }

  takeClaim(claimId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${claimId}/take`, null);
  }
}
