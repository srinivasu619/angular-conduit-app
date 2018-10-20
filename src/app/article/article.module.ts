import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticlepageComponent } from './pages/articlepage/articlepage.component';
import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { EditorComponent } from './components/editor/editor.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule,
    MarkdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [EditorComponent, ArticlepageComponent, NewArticleComponent],
})
export class ArticleModule { }
