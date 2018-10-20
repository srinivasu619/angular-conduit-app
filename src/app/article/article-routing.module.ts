import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlepageComponent } from './pages/articlepage/articlepage.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';

const routes: Routes = [
  {
    path: 'article/:slug',
    component: ArticlepageComponent
  },
  {
    path: 'editor',
    component: NewArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
