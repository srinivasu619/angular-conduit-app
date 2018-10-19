import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../../services/feed.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-fav-posts',
  templateUrl: './author-fav-posts.component.html',
  styleUrls: ['./author-fav-posts.component.css']
})
export class AuthorFavPostsComponent implements OnInit {

  author: string;
  authorFavPosts = [];
  isLoading: boolean;

  constructor(private feedService: FeedService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.parent.paramMap.subscribe(
      (params) => {
        this.author = params.get('username');
        this.getAuthorFavPosts();
      }
    );
  }

  getAuthorFavPosts() {
    this.feedService.getAuthorFavArticles(this.author).subscribe(
      (data: any) => {
        this.authorFavPosts = data.articles;
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

}
