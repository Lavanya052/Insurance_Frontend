import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { loginForm } from '../types/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: loginForm = {
    username: '',
    password: '',
  }
  loginError: string = "";
  isSignUpActive: boolean = false;
  


  constructor(private authService: AuthService, private router: Router) { }

  togglePanel(isSignUp: boolean): void {
    this.isSignUpActive = isSignUp;
  }

  login() {
    this.authService.login(this.form).subscribe((response: any) => {
      console.log('Login response:', response);

      if (response === null || response === undefined) {
        console.error('Response object is null or undefined');
        return;
      }

      if (typeof response === 'string') {
        try {
          response = JSON.parse(response);
          console.log('Parsed response:', response);
        } catch (error) {
          console.error('Error parsing response:', error);
          return;
        }
      }

      const userId = response["userId"];


      if (userId !== undefined) {
        localStorage.setItem('userId', userId);
        localStorage.setItem('isAuthenticated','true');
        this.authService.isAuthenticated= localStorage.getItem("isAuthenticated") === "true";
        alert("Succesfully Login")
        this.router.navigate(['/user']).then(() => {
          window.location.reload();
        });

      } else {
        console.error('User ID not found in response:', response);
        alert('User ID not found in response');
      }
    }, (error: HttpErrorResponse) => {
      console.log('Login error:', error);

      if (error.status === 401) {
        this.loginError = "Invalid username or password";
        this.form.username = ''; 
        this.form.password = ''; 
      } else {
        this.loginError = "An error occurred while logging in check api";
      }
      alert(this.loginError)
    });
  }

isAdmin(){
  alert("Admin only register")
}

}
