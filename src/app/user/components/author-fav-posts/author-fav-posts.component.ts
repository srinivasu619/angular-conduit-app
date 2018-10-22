import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../services/feed.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../../interfaces/Article';

@Component({
  selector: 'app-author-fav-posts',
  templateUrl: './author-fav-posts.component.html',
  styleUrls: ['./author-fav-posts.component.css']
})
export class AuthorFavPostsComponent implements OnInit {

  author: string;
  authorFavPosts: Article[] = [];
  isLoading: boolean;
  noOfArticles: number;

  constructor(private feedService: FeedService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.parent.paramMap.subscribe(
      (params) => {
        this.author = params.get('username');
        this.getAuthorFavPosts(0);
      }
    );
  }

  getAuthorFavPosts(offset) {
    this.isLoading = true;
    this.feedService.getAuthorFavArticles(this.author, offset).subscribe(
      (data: {articles: Article[], articlesCount: number}) => {
        this.authorFavPosts = data.articles;
        this.noOfArticles = data.articlesCount;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        console.log('USER FAV POSTS FETCHED');
      }
    );
  }

  selected(pageNumber) {
    // console.log('GLOBAL FEED: ' + pageNumber);
    this.getAuthorFavPosts(pageNumber);
  }
}
