import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://conduit.productionready.io/api';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  setAuthoriztionHeaders() {
    const token = this.authService.getUserToken();
    const headers = new HttpHeaders({'Authorization': `${token}`});
    return headers;
  }

  followUser(username) {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.post(`${this.apiUrl}/profiles/${username}/follow`, {}, { headers: headers });
  }

  unfollowUser(username) {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.delete(`${this.apiUrl}/profiles/${username}/follow`, { headers: headers });
  }

  getUser() {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.get(`${this.apiUrl}/user`, { headers: headers });
  }

  editUser(user) {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.put(`${this.apiUrl}/user`, user, { headers: headers });
  }
}
