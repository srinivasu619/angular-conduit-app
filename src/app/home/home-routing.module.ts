import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GlobalfeedComponent } from './components/globalfeed/globalfeed.component';
import { UserfeedComponent } from './components/userfeed/userfeed.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent,
    children: [
      {
        path: '',
        redirectTo: 'globalfeed',
        pathMatch: 'full'
      },
      {
        path: 'globalfeed',
        component: GlobalfeedComponent
      },
      {
        path: 'yourfeed',
        component: UserfeedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
