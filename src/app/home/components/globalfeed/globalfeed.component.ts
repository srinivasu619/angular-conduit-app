import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../services/feed.service';
import { Article } from '../../../interfaces/Article';

@Component({
  selector: 'app-globalfeed',
  templateUrl: './globalfeed.component.html',
  styleUrls: ['./globalfeed.component.css']
})
export class GlobalfeedComponent implements OnInit {

  globalArticles: Article[] = [];
  isLoading: boolean;
  noOfArticles: number;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getGlobalArticles(0);
  }

  getGlobalArticles(offset) {
    this.isLoading = true;
    this.feedService.getGlobalFeed(offset).subscribe(
      (data: { articles: Article[], articlesCount: number}) => {
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
