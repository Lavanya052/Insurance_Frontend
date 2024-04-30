import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';



@Injectable({
  providedIn: 'root'
})

export class PaymentGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): any {
    if (localStorage.getItem("isAuthenticated") === "true") {
      return true
    }
    else{
      return false
    }
  }

}
