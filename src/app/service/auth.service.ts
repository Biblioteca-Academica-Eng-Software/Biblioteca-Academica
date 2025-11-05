import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl; // ex: 'https://api.exemplo.com'

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/auth/login`, user).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  getUserInfo() {
    const token = this.getToken();
    return token ? jwtDecode<{ id: number; nome: string; adm: boolean }>(token) : null;
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
