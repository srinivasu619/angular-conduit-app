import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl = 'https://conduit.productionready.io/api';
  constructor(private httpClient: HttpClient) { }

  loginUser(userCredentials) {
    return this.httpClient.post(`${ this.apiurl }/users/login`, userCredentials);
  }

  signUpUser(userCredentials) {
    return this.httpClient.post(`${ this.apiurl }/users`, userCredentials);
  }

  isLoggedIn(): boolean {
    const currentUser = JSON.parse(window.localStorage.getItem('user'));
    if (currentUser && currentUser.token) {
      return true;
    }
    return false;
  }
}
