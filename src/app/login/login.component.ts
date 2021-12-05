import { AuthService } from './../service/authservice';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { filter } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ApiService } from './loginapi';

import test from '../../assets/testing.json';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  returnUrl!: string;
  error!: {};
  loginError!: string;
  testuser: any
  testpassword:any;
  constructor(private router: Router,private authService:AuthService,private fb:FormBuilder) {
    this.testuser = test.username;
    this.testpassword = test.password;
  }
  ngOnInit() {
    // this.router.navigate(['/home']);


    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.authService.logout();
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onFormSubmit() {
    console.log('user names',this.username)
    this.submitted = true;
    this.authService.login(this.username?.value, this.password?.value)
       if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
          this.router.navigate([redirect]);
        } else {
          this.loginError = 'Username or password is incorrect.';
          console.log("login error is",this.loginError)
        }
    (      error: {}) => this.error = error
  
  }
  
  formsClick(){
    this.router.navigate(['/dashboard']);


  };

}
