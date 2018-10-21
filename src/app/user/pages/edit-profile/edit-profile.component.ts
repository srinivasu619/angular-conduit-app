import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user;
  userForm: FormGroup;
  // imgPattern = `(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg)`;
  isLoading;
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.isLoading = true;
    this.userService.getUser().subscribe(
      (data: any) => {
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
      (data: any) => {
        // this.user = data.user;
        console.log(data.user);
      },
      (err) => {
        console.log(err);
      },
      () => {

      }
    );
  }

}
