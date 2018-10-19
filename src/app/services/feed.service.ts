import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  apiUrl = 'https://conduit.productionready.io/api';
  constructor(private httpClient: HttpClient) { }

  getGlobalFeed() {
    return this.httpClient.get(`${ this.apiUrl }/articles/?limit=10`);
  }
}
