import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private userService: UserService
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
      // Get the username and password values from the login form
      const { username, password } = this.loginForm.value;

      // Call your login service method passing the username and password
      this.userService.apiUserAuthenticatePost$Json$Response(username, password).subscribe(response => {
        // Handle the login response
        // For example, you can redirect to the home page or display a success message
      }, error => {
        // Handle login error
        // For example, display an error message
      });
    }
  }

  register() {
    if (this.registerForm.valid) {
      // Get the username and password values from the register form
      const { username, password } = this.registerForm.value;

      // Call your register service method passing the username and password
      this.userService.apiUserRegisterPost$Json$Response(username, password).subscribe(response => {
        // Handle the register response
        // For example, you can redirect to the login page or display a success message
      }, error => {
        // Handle register error
        // For example, display an error message
      });
    }
  }
}