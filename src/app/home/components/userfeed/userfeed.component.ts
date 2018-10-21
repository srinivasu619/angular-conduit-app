import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../services/feed.service';

@Component({
  selector: 'app-userfeed',
  templateUrl: './userfeed.component.html',
  styleUrls: ['./userfeed.component.css']
})
export class UserfeedComponent implements OnInit {

  userArticles = [];
  isLoading: boolean;
  noOfArticles;
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getUserArticles(0);
  }

  getUserArticles(offset) {
    this.isLoading = true;
    this.feedService.getUserFeed(offset).subscribe(
      (data: any) => {
        this.userArticles = data.articles;
        this.noOfArticles = data.articlesCount;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        console.log('USER ARTICLES FETCH COMPLETED.');
      }
    );
  }

  selected(pageNumber) {
    // console.log('GLOBAL FEED: ' + pageNumber);
    this.getUserArticles(pageNumber);
  }
}
