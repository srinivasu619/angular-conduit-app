import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GlobalfeedComponent } from './components/globalfeed/globalfeed.component';
import { UserfeedComponent } from './components/userfeed/userfeed.component';
import { SharedModule } from '../shared/shared.module';
import { TagfeedComponent } from './components/tagfeed/tagfeed.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomepageComponent, GlobalfeedComponent, UserfeedComponent, TagfeedComponent]
})
export class HomeModule { }
