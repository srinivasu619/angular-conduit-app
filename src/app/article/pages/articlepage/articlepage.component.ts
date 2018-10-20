import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent implements OnInit {

  articleSlug: string;
  article;
  isLoading: boolean;
  constructor(private activatedRoute: ActivatedRoute,
              private articleService: ArticleService,
              private authService: AuthService,
              private router: Router) {
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
        console.log('ARTICLE FETCH COMPLETED');
      }
    );
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get currentUser(): string {
    return this.authService.getUserName();
  }

  editArticle() {
    this.router.navigate(['editor', this.article.slug]);
  }
}
