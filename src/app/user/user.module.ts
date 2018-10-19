import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [ProfilepageComponent, ProfileCardComponent]
})
export class UserModule { }
