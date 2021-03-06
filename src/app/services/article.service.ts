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

  postNewArticle(article) {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.post(`${ this.apiUrl }/articles`, article, {headers: headers});
  }

  editArticle(article, articleSlug) {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.put(`${ this.apiUrl }/articles/${ articleSlug }`, article, {headers: headers});
  }

  deleteArticle(articleSlug) {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.delete(`${ this.apiUrl }/articles/${ articleSlug }`, {headers: headers});
  }

  favoriteAnArticle(articleSlug) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.post(`${ this.apiUrl }/articles/${articleSlug}/favorite`, {} , {headers: headers});
  }

  unfavoriteAnArticle(articleSlug) {
      const headers = this.setAuthoriztionHeaders();
      return this.httpClient.delete(`${ this.apiUrl }/articles/${articleSlug}/favorite`, {headers: headers});
  }
}
