import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticlepageComponent } from './pages/articlepage/articlepage.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule
  ],
  declarations: [ArticlepageComponent]
})
export class ArticleModule { }
