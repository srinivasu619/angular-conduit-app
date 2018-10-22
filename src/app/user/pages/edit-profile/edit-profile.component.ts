import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import prettifyError from '../../../util/errorHandler';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: User;
  userForm: FormGroup;
  errors = [];
  // imgPattern = `(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg)`;
  isLoading;
  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.isLoading = true;
    this.userService.getUser().subscribe(
      (data: {user: User}) => {
        this.user = data.user;
        this.createForm();
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  get form() { return this.userForm.controls; }

  createForm() {
    this.userForm = this.formBuilder.group({
      'username': [this.user.username, Validators.required],
      'email': [this.user.email, Validators.compose([Validators.required, Validators.email])],
      'bio': [this.user.bio],
      'image': [this.user.image, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  handleForm(userFormValue) {
    this.userService.editUser({user: userFormValue}).subscribe(
      (data: {user: User}) => {
        console.log(data.user);
        this.authService.setUser(data.user);
        this.router.navigate(['/profile', data.user.username]);
      },
      (err) => {
        const errorMsg = err.error.errors;
        const statusCode = err.status;
        if (statusCode === 422) {
          this.errors = prettifyError(errorMsg);
        } else if (statusCode === 404) {
          console.log(`404 : Not Found`);
        } else if (statusCode === 401) {
          console.log(`401 : Unauthorized Access`);
        } else if (statusCode === 403) {
          console.log(`403 : Forbidden Access`);
        }
      },
      () => {

      }
    );
  }

}
