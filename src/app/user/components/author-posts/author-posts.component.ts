import { Component, OnInit, OnChanges } from '@angular/core';
import { FeedService } from '../../../services/feed.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../interfaces/Article';

@Component({
  selector: 'app-author-posts',
  templateUrl: './author-posts.component.html',
  styleUrls: ['./author-posts.component.css']
})
export class AuthorPostsComponent implements OnInit {

  author: string;
  authorPosts: Article[] = [];
  isLoading: boolean;
  noOfArticles: number;

  constructor(private feedService: FeedService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.activatedRoute.parent.paramMap.subscribe(
      (params) => {
        this.author = params.get('username');
        this.getAuthorPosts(0);
      }
    );
  }

  getAuthorPosts(offset) {
    this.isLoading = true;
    this.feedService.getAuthorArticles(this.author, offset).subscribe(
      (data: {articles: Article[], articlesCount: number}) => {
        this.authorPosts = data.articles;
        this.noOfArticles = data.articlesCount;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        console.log('USER POSTS FETCHED');
      }
    );
  }

  selected(pageNumber) {
    // console.log('GLOBAL FEED: ' + pageNumber);
    this.getAuthorPosts(pageNumber);
  }
}
