import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {
  }

  get form() { return this.signUpForm.controls; }

  handleForm(userCredentianls) {
    this.authService.signUpUser({ user: userCredentianls }).subscribe(
      (data: any) => {
        this.authService.setUser(data.user);
        this.router.navigate(['/home/yourfeed']);
      },
      err => { console.log(err.error.errors); },
      () => { console.log('COMPLETD SIGNUP'); }
    );
  }
}
