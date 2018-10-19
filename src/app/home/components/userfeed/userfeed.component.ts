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

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.getUserArticles();
  }

  getUserArticles() {
    this.isLoading = true;
    this.feedService.getUserFeed().subscribe(
      (data: any) => {
        this.userArticles = data.articles;
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
}
