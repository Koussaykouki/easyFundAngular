import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // Clone the request to add the new Authorization header.
      const clonedRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` }
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}