import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  apiUrl = 'https://conduit.productionready.io/api';
  deleteEvent = new EventEmitter<number>();
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  setAuthoriztionHeaders() {
    const token = this.authService.getUserToken();
    const headers = new HttpHeaders({'Authorization': `${token}`});
    return headers;
  }

  getArticleComments(slug) {
    return this.httpClient.get(`${ this.apiUrl }/articles/${ slug }/comments`);
  }

  postArticleComment(slug, comment) {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.post(`${ this.apiUrl }/articles/${ slug }/comments`, comment, {headers: headers});
  }

  deleteArticleComment(slug, commentId) {
    const headers = this.setAuthoriztionHeaders();
    return this.httpClient.delete(`${ this.apiUrl }/articles/${ slug }/comments/${ commentId }`, {headers: headers});
  }
}
