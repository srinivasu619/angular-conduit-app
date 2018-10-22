import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article;
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
      (data: any) => {
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
