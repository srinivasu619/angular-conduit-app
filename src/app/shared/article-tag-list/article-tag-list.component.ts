import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-tag-list',
  templateUrl: './article-tag-list.component.html',
  styleUrls: ['./article-tag-list.component.css']
})
export class ArticleTagListComponent implements OnInit {

  @Input() articleTags: string[];

  constructor() {
    console.log('TAGS ' + this.articleTags);
  }

  ngOnInit() {
  }

}
