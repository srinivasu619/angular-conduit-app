import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ArticleItemComponent, ArticleListComponent
  ],
  declarations: [ArticleItemComponent, ArticleListComponent]
})
export class SharedModule { }
