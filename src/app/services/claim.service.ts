import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private apiUrl = 'http://localhost:8084/api/claims';
  private repliesApiUrl = `http://localhost:8084/api/replies`; // URL for the replies endpoint
  private claimResolvedSource = new Subject<void>();
  claimResolved$ = this.claimResolvedSource.asObservable();
  constructor(private http: HttpClient) { }

  getClaimById(claimId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${claimId}`);
  }

  getAllOpenClaims(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getAllClosedClaims(): Observable<any> {
    return this.http.get(`${this.apiUrl}/closed`);
  }

  saveClaim(claim: any): Observable<any> {
    return this.http.post(this.apiUrl, claim, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  updateClaim(claimId: number, claim: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${claimId}`, claim, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

  deleteClaim(claimId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${claimId}`);
  }

  getClaimsAssignedToAgent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/assigned-to-agent`);
  }
  getClaimsAssignedToUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/assigned-to-user`);
  }

  takeClaim(claimId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${claimId}/take`, null).pipe(
      tap(() => {
        this.claimResolvedSource.next();
      })
    );
  }
  closeClaim(claimId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${claimId}/close`, null);
  }
  reopenClaim(claimId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${claimId}/reopen`, null);
  }

  // Replies methods
  getRepliesByClaimId(claimId: number): Observable<any> {
    return this.http.get(`${this.repliesApiUrl}/by-claim/${claimId}`);
  }

  saveReply(claimId: number, message: string): Observable<any> {
    const replyData = { message }; // Reply data without claimId in the object

    return this.http.post(`${this.repliesApiUrl}/save/${claimId}`, replyData, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
}
