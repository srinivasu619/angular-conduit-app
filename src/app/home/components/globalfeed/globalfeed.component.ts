import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../services/feed.service';

@Component({
  selector: 'app-globalfeed',
  templateUrl: './globalfeed.component.html',
  styleUrls: ['./globalfeed.component.css']
})
export class GlobalfeedComponent implements OnInit {

  globalArticles = [];
  isLoading: boolean;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getGlobalArticles();
  }

  getGlobalArticles() {
    this.isLoading = true;
    this.feedService.getGlobalFeed().subscribe(
      (data: any) => {
        this.globalArticles = data.articles;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        console.log('GLOBAL FEED FETCHED');
      }
    );
  }

}
