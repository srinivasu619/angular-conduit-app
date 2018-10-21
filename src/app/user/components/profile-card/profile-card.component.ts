import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit, OnChanges {

  @Input() username;
  author;
  isLoading: boolean;
  constructor(private profileService: ProfileService, private authService: AuthService, private userService: UserService,
    private router: Router) { }

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

  follow() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.userService.followUser(this.author.username).subscribe(
      (data: any) => {
        this.author = data.profile;
      },
      (err) => {
        console.log(err);
      },
      () => {
      }
    );
  }

  unfollow() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.userService.unfollowUser(this.author.username).subscribe(
      (data: any) => {
        this.author = data.profile;
      },
      (err) => {
        console.log(err);
      },
      () => {
      }
    );
  }

  editProfile() {
    this.router.navigate(['/user/settings']);
  }
}
