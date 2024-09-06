import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private loggedInKey = 'Login';
  baseURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getMatches(): Observable<any> {
    return this.http.get<any>(this.baseURL + 'matches');
  }

  getMatchData(): Observable<any> {
    return this.http.get<any>(this.baseURL + 'livescore');
  }

  getPointTable(): Observable<any> {
    return this.http.get<any>(this.baseURL + 'pointTable');
  }

  login() {
    if (typeof window !== 'undefined' && window) {
      sessionStorage.setItem(this.loggedInKey, 'true');
    }
  }

  logout() {
    if (typeof window !== 'undefined' && window) {
      sessionStorage.removeItem(this.loggedInKey);
    }
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && window) {
      return sessionStorage.getItem(this.loggedInKey) === 'true';
    }
    return false;
  }
}
