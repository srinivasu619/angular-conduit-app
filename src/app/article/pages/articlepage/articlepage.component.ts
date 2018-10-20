import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

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
              private userService: UserService,
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

  editArticle(slug) {
    this.router.navigate(['editor', slug]);
  }

  deleteArticle(slug) {
    this.articleService.deleteArticle(slug).subscribe(
      (data) => {
        this.router.navigate(['/profile', this.currentUser]);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('DELETE COMPLETED');
      }
    );
  }

  favourite() {
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

  follow() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.userService.followUser(this.article.author.username).subscribe(
      (data: any) => {
        this.article.author = data.profile;
      },
      (err) => {
        console.log(err);
      },
      () => {
      }
    );
  }

  unfollow() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.userService.unfollowUser(this.article.author.username).subscribe(
      (data: any) => {
        this.article.author = data.profile;
      },
      (err) => {
        console.log(err);
      },
      () => {
      }
    );
  }
}
