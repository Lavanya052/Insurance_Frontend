import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  isAuthenticate: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }
  isAuth() {
    if (localStorage.getItem("isAuthenticated") === "false") {
      alert("login through email")
    }
    else {
      this.router.navigate(['/payment'])
    }
  }
  isUser() {
    if (localStorage.getItem("isAuthenticated") === "false") {
      alert("login through email")
    }
    else {
      this.router.navigate(['/user'])
    }
  }


  ngOnInit(){
    if(localStorage.getItem("isAuthenticated")==="true"){
      this.isAuthenticate=true
    }
    else{
      this.isAuthenticate=false
    }
  }
    logOut() {
      if(localStorage.getItem("isAuthenticated")=="true"){
        alert("successfully logout")
      localStorage.setItem("isAuthenticated", "false");
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
    }

    
  }


