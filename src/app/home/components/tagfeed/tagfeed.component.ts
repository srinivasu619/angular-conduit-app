import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { FeedService } from '../../../services/feed.service';
import { Article } from '../../../interfaces/Article';

@Component({
  selector: 'app-tagfeed',
  templateUrl: './tagfeed.component.html',
  styleUrls: ['./tagfeed.component.css']
})
export class TagfeedComponent implements OnInit {

  isLoading: boolean;
  tag: string;
  tagArticles: Article[];
  noOfArticles: number;

  constructor(private route: ActivatedRoute, private feedService: FeedService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => {
        this.tag = params.tag;
        this.getTagArticles(0);
      }
    );
  }

  getTagArticles(offset) {
    this.isLoading = true;
    this.feedService.getTagFeed(this.tag, offset).subscribe(
      (data: { articles: Article[], articlesCount: number}) => {
        this.tagArticles = data.articles;
        this.noOfArticles = data.articlesCount;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        // console.log('TAG FEED FETCHED');
      }
    );
  }

  selected(pageNumber) {
    this.getTagArticles(pageNumber);
  }

}
