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

  setUser(userData): void {
    const user = {
      username: userData.username,
      token: `Token ${userData.token}`
    };

    window.localStorage.setItem('user', JSON.stringify(user));
  }

  removeUser() {
    window.localStorage.removeItem('user');
  }

  getUserName() {
    return JSON.parse(localStorage.getItem('user')).username;
  }

  getUserToken() {
    return JSON.parse(localStorage.getItem('user')).token;
  }

  isLoggedIn(): boolean {
    const currentUser = JSON.parse(window.localStorage.getItem('user'));
    if (currentUser && currentUser.token) {
      return true;
    }
    return false;
  }
}
