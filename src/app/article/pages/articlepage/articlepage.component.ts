import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent implements OnInit {

  articleSlug: string;
  article;
  isLoading: boolean;
  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
    this.articleSlug = this.activatedRoute.snapshot.params.slug;
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.isLoading = true;
    this.articleService.getArticleBySlug(this.articleSlug).subscribe(
      (data: any) => {
        this.article = data.article;
        console.log(this.article);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        console.log('ARTICLE FETCH COMPLETED');
      }
    );
  }

}
