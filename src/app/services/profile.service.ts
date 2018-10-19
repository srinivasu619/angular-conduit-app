import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = 'https://conduit.productionready.io/api';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  setAuthoriztionHeaders() {
    const token = this.authService.getUserToken();
    const headers = new HttpHeaders({'Authorization': `${token}`});
    return headers;
  }

  getAuthorProfile(username) {
    if (this.authService.isLoggedIn()) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.get(`${ this.apiUrl }/profiles/${username}`, {headers: headers});
    }
    return this.httpClient.get(`${ this.apiUrl }/profiles/${username}`);
  }
}
