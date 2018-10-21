import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { AuthorPostsComponent } from './components/author-posts/author-posts.component';
import { AuthorFavPostsComponent } from './components/author-fav-posts/author-fav-posts.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { AuthGuard } from '../gaurds/auth.guard';

const routes: Routes = [
  {
    path: 'profile/:username',
    component: ProfilepageComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: AuthorPostsComponent
      },
      {
        path: 'favourites',
        component: AuthorFavPostsComponent
      }
    ]
  },
  {
    path: 'user/settings',
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
