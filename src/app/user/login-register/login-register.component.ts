import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastComponent } from 'src/app/toast/toast.component';
import { AuthenticateDto, RegisterDto } from 'src/generated/models';
import { UserService } from 'src/generated/services';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  loginErrorMessage: string;
  loginSubmitted: boolean = false;

  registerForm: FormGroup;
  registerErrorMessage: string;
  registerSubmitted: boolean = false;

  @ViewChild('toast') toast: ToastComponent;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.loginErrorMessage = '';
    });

    this.registerForm.valueChanges.subscribe(() => {
      this.registerErrorMessage = '';
    });
  }

  login() {
    this.loginSubmitted = true;

    if (this.loginForm.valid) {
      const request : AuthenticateDto = {username: this.loginForm.get("username").value, password: this.loginForm.get("password").value};

      this.userService.apiUserAuthenticatePost$Json({body: request}).subscribe(response => {
        this.authService.setToken(response.data);
        this.router.navigate(['films/search']);
      }, response => {
        this.loginErrorMessage = response.error.Message;
      });
    }
  }

  register() {
    this.registerSubmitted = true;

    if (this.registerForm.valid) {
      const request : RegisterDto = {username: this.registerForm.get("username").value, password: this.registerForm.get("password").value};
      this.userService.apiUserRegisterPost$Json({body: request}).subscribe(response => {
        this.registerForm.reset();
        this.registerSubmitted = false;
        this.showToast("Registration", "Registration successful");
      }, response => {
        this.registerErrorMessage = response.error.Message;
      });
    }
  }

  showToast(title: string, message: string) {
    this.toast.toastTitle = title;
    this.toast.toastMessage = message;
    this.toast.show();
  }
}