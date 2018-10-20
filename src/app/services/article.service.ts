import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'https://conduit.productionready.io/api';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  setAuthoriztionHeaders() {
    const token = this.authService.getUserToken();
    const headers = new HttpHeaders({'Authorization': `${token}`});
    return headers;
  }

  getArticleBySlug(slug) {
    if (this.authService.isLoggedIn()) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.get(`${ this.apiUrl }/articles/${ slug }`, {headers: headers});
    }
    return this.httpClient.get(`${ this.apiUrl }/articles/${ slug }`);
  }
}
