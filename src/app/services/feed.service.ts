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

  getGlobalFeed(offset) {
    if (this.authService.isLoggedIn()) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.get(`${ this.apiUrl }/articles/?limit=10&offset=${offset}`, {headers: headers});
    }
    return this.httpClient.get(`${ this.apiUrl }/articles/?limit=10&offset=${offset}`);
  }

  getUserFeed(offset) {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.get(`${ this.apiUrl }/articles/feed/?limit=10&offset=${offset}`, {headers: headers});
  }

  getAuthorArticles(username, offset) {
    if (this.authService.isLoggedIn()) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.get(`${ this.apiUrl }/articles/?author=${username}&limit=10&offset=${offset}`, {headers: headers});
    }
    return this.httpClient.get(`${ this.apiUrl }/articles/?author=${username}&limit=10&offset=${offset}`);
  }

  getAuthorFavArticles(username, offset) {
    if (this.authService.isLoggedIn()) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.get(`${ this.apiUrl }/articles/?favorited=${username}&limit=10&offset=${offset}`, {headers: headers});
    }
    return this.httpClient.get(`${ this.apiUrl }/articles/?favorited=${username}&limit=10&offset=${offset}`);
  }

  getTagFeed(tag, offset) {
    if (this.authService.isLoggedIn()) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.get(`${ this.apiUrl }/articles/?tag=${ tag }&limit=10&offset=${offset}`, {headers: headers});
    }
    return this.httpClient.get(`${ this.apiUrl }/articles/?tag=${ tag }&limit=10&offset=${offset}`);
  }

  getFamousTags() {
    return this.httpClient.get(`${ this.apiUrl }/tags`);
  }
}
