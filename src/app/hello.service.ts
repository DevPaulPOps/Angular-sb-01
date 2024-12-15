import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import config from '../../config.json';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  private apiUrl = config.apiUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getFirstName(): Observable<{ firstName: string }> {
    const firstName = this.cookieService.get('firstName');
    return this.http.get<{ firstName: string }>(
      `${this.apiUrl}/firstName?cookie=${firstName}`
    );
  }

  updateFirstName(firstName: string): Observable<{ firstName: string }> {
    const body = { firstName };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.cookieService.set('firstName', firstName);
    return this.http.put<{ firstName: string }>(
      `${this.apiUrl}/firstName`,
      body,
      { headers }
    );
  }
}
