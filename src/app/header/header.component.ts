import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get isLoggedIn(): boolean {
    // get logged in status from user.
  }

  get currentUser(): string {
    // get current user from Service.
  }

}
