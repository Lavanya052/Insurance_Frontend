  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { loginForm } from '../types/login';
  import { Observable } from 'rxjs';
  import { Policy } from '../types/details';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private baseUrl = 'https://localhost:44338/api/Insurence/';
    isAuthenticated: boolean = false;

    constructor(private http: HttpClient) { }

    // Login through username and password
    login(form: loginForm): Observable<any> {
      console.log('Login service called with:', form.username, form.password);
      return this.http.post(this.baseUrl + 'authenticate', { username: form.username, password: form.password }, { responseType: 'text' });
    }

    // Get user details by userId
    getUserDetails(userId: string) {
      return this.http.get<any>(`${this.baseUrl}userdetails/${userId}`);
    }

    // Get policies
    getPolicies(): Observable<Policy[]> {
      return this.http.get<Policy[]>(this.baseUrl + 'policies');
    }

    getUserPolicies(userId: string): Observable<Policy[]> {
      const url = `${this.baseUrl}userpolicies/${userId}`;
      return this.http.get<Policy[]>(url);
    }
  }
