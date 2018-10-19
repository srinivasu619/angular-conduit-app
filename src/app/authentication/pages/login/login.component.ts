import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

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
      (data: any) => {
        this.authService.setUser(data.user);
        this.router.navigate(['/home/yourfeed']);
      },
      err => { console.log(err.error.errors); },
      () => { console.log('COMPLETD LOGIN'); }
    );
  }
}
