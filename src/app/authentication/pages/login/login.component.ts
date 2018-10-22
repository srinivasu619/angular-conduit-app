import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from 'node_modules/@angular/router';
import prettifyError from '../../../util/errorHandler';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors = [];

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }

  get form() { return this.loginForm.controls; }

  handleForm(userCredentianls) {
    this.authService.loginUser({ user: userCredentianls }).subscribe(
      (data: {user: User}) => {
        this.authService.setUser(data.user);
        this.router.navigate(['/home/yourfeed']);
      },
      err => {
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
        // console.log(err.error.errors);
      },
      () => { console.log('COMPLETD LOGIN'); }
    );
  }
}
