import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticateDto } from 'src/generated/models';
import { UserService } from 'src/generated/services';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService
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
  }

  login() {
    if (this.loginForm.valid) {
      const request : AuthenticateDto = {username: this.loginForm.get("username").value, password: this.loginForm.get("password").value};

      this.userService.apiUserAuthenticatePost$Json({body: request}).subscribe(response => {
        this.authService.setToken(response.data)
      }, response => {
        console.log(response.error.Message);
      });
    }
  }

  register() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;

      this.userService.apiUserRegisterPost$Json(username, password).subscribe(response => {

      }, error => {

      });
    }
  }
}