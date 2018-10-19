import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit, OnChanges {

  @Input() username;
  author;
  isLoading: boolean;
  constructor(private profileService: ProfileService, private authService: AuthService) { }

  ngOnInit() {
    this.getAuthor();
  }

  ngOnChanges() {
    this.getAuthor();
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get currentUser() {
    return this.authService.getUserName();
  }

  getAuthor() {
    this.isLoading = true;
    this.profileService.getAuthorProfile(this.username).subscribe(
      (data: any) => {
        this.author = data.profile;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
        console.log('PROFILE LOADED');
      }
    );
  }
}
