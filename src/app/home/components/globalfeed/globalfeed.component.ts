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
  noOfArticles;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getGlobalArticles(0);
  }

  getGlobalArticles(offset) {
    this.isLoading = true;
    this.feedService.getGlobalFeed(offset).subscribe(
      (data: any) => {
        this.globalArticles = data.articles;
        this.noOfArticles = data.articlesCount;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        // console.log('GLOBAL FEED FETCHED');
      }
    );
  }

  selected(pageNumber) {
    // console.log('GLOBAL FEED: ' + pageNumber);
    this.getGlobalArticles(pageNumber);
  }

}
