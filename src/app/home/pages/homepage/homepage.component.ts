import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { FeedService } from '../../../services/feed.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  tagsLoading: boolean;
  tags = [];
  constructor(private authService: AuthService, private router: Router, private feedService: FeedService) { }

  ngOnInit() {
    this.getTags();
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getTags() {
    this.tagsLoading = true;
    this.feedService.getFamousTags().subscribe(
      (data: any) => {
        this.tags = data.tags;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.tagsLoading = false;
        console.log('COMPLETED TAGS');
      }
    );
  }
}
