import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  readArticle(slug) {
    this.router.navigate(['/article', slug]);
  }
}
