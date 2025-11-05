import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Book, BookCompleto } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTops(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books/top`);
  }

  getLivros(filtro: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`, { params: { filtro: filtro } });
  }

  getLivroById(id: number): Observable<BookCompleto> {
    return this.http.get<BookCompleto>(`${this.baseUrl}/books/${id}`);
  }
  // postCadastro(user: User): Observable<User> {
  //   return this.http.post<User>(`${this.baseUrl}/auth/register`, user);
  // }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}/users`);
  // }

  // getUserById(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  // }

  // createUser(user: User): Observable<User> {
  //   return this.http.post<User>(`${this.baseUrl}/users`, user);
  // }

  // updateUser(id: number, user: User): Observable<User> {
  //   return this.http.put<User>(`${this.baseUrl}/users/${id}`, user);
  // }

  // deleteUser(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  // }
}
