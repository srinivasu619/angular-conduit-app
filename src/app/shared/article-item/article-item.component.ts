import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article;
  constructor(private router: Router, private authService: AuthService, private articleService: ArticleService) { }

  ngOnInit() {
  }

  readArticle(slug) {
    this.router.navigate(['/article', slug]);
  }

  favorite() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.articleService.favoriteAnArticle(this.article.slug).subscribe(
      (data: any) => { this.article = data.article; },
      (err) => { console.log(err); },
      () => { console.log('completed'); }
    );
  }

  unfavorite() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.articleService.unfavoriteAnArticle(this.article.slug).subscribe(
      (data: any) => { this.article = data.article; },
      (err) => { console.log(err); },
      () => { console.log('completed'); }
    );
  }
}
