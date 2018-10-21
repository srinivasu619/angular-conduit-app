import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { AuthorPostsComponent } from './components/author-posts/author-posts.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorFavPostsComponent } from './components/author-fav-posts/author-fav-posts.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilepageComponent, ProfileCardComponent, AuthorPostsComponent, AuthorFavPostsComponent, EditProfileComponent]
})
export class UserModule { }
