import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleTagListComponent } from './article-tag-list/article-tag-list.component';
import { ArticleTagItemComponent } from './article-tag-item/article-tag-item.component';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArticleItemComponent, ArticleListComponent, ArticleTagListComponent, ArticleTagItemComponent
  ],
  declarations: [ArticleItemComponent, ArticleListComponent, ArticleTagListComponent, ArticleTagItemComponent]
})
export class SharedModule { }
