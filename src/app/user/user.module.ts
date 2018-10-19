import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { AuthorPostsComponent } from './components/author-posts/author-posts.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorFavPostsComponent } from './components/author-fav-posts/author-fav-posts.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [ProfilepageComponent, ProfileCardComponent, AuthorPostsComponent, AuthorFavPostsComponent]
})
export class UserModule { }
