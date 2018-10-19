import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';

const routes: Routes = [
  {
    path: 'profile/:username',
    component: ProfilepageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
