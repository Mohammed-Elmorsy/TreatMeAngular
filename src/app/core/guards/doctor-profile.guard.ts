import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileGuard implements CanActivate {

  constructor(private _authService:AuthService,
    private _router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      let role = this._authService.getUserPayLoad().role;
      if(this._authService.isLoggedIn() && role === "Doctor") {
        return true;
      }
      else {
        this._router.navigate(['/login']);
        return false;
      }
  }
  
}
