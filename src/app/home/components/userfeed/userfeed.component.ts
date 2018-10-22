import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../services/feed.service';
import { Article } from '../../../interfaces/Article';

@Component({
  selector: 'app-userfeed',
  templateUrl: './userfeed.component.html',
  styleUrls: ['./userfeed.component.css']
})
export class UserfeedComponent implements OnInit {

  userArticles: Article[] = [];
  isLoading: boolean;
  noOfArticles: number;
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getUserArticles(0);
  }

  getUserArticles(offset) {
    this.isLoading = true;
    this.feedService.getUserFeed(offset).subscribe(
      (data: { articles: Article[], articlesCount: number}) => {
        this.userArticles = data.articles;
        this.noOfArticles = data.articlesCount;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        // console.log('USER ARTICLES FETCH COMPLETED.');
      }
    );
  }

  selected(pageNumber) {
    // console.log('GLOBAL FEED: ' + pageNumber);
    this.getUserArticles(pageNumber);
  }
}
