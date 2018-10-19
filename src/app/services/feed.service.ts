import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  apiUrl = 'https://conduit.productionready.io/api';
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  setAuthoriztionHeaders() {
    const token = this.authService.getUserToken();
    const headers = new HttpHeaders({'Authorization': `${token}`});
    return headers;
  }

  getGlobalFeed() {
    if (this.authService.isLoggedIn()) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.get(`${ this.apiUrl }/articles/?limit=10`, {headers: headers});
    }
    return this.httpClient.get(`${ this.apiUrl }/articles/?limit=10`);
  }

  getUserFeed() {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.get(`${ this.apiUrl }/articles/feed/?limit=10`, {headers: headers});
  }

  getAuthorArticles(username) {
    if (this.authService.isLoggedIn()) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.get(`${ this.apiUrl }/articles/?author=${username}&limit=10`, {headers: headers});
    }
    return this.httpClient.get(`${ this.apiUrl }/articles/?author=${username}&limit=10`);
  }

  getAuthorFavArticles(username) {
    if (this.authService.isLoggedIn()) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.get(`${ this.apiUrl }/articles/?favorited=${username}&limit=10`, {headers: headers});
    }
    return this.httpClient.get(`${ this.apiUrl }/articles/?favorited=${username}&limit=10`);
  }
}
