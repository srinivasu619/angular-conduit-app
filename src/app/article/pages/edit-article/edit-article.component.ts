import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Article } from '../../../interfaces/Article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: Article;
  articleSlug: string;
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
      (data: {article: Article}) => {
        this.article = data.article;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        // console.log('ARTICLE FETCH COMPLETED');
      }
    );
  }

}
