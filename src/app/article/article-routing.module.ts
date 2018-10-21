import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlepageComponent } from './pages/articlepage/articlepage.component';
import { NewArticleComponent } from './pages/new-article/new-article.component';
import { EditArticleComponent } from './pages/edit-article/edit-article.component';
import { AuthGuard } from '../gaurds/auth.guard';

const routes: Routes = [
  {
    path: 'article/:slug',
    component: ArticlepageComponent
  },
  {
    path: 'editor',
    component: NewArticleComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editor/:slug',
    component: EditArticleComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
