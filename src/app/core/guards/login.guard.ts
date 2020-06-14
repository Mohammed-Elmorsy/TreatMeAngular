import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _authService:AuthService,
    private _router:Router, private toastr:ToastrService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this._authService.isLoggedIn()) {

        this.toastr.warning(' اذا اردت الدخول من حساب اخر قم بتسجيل الخروج اولا','لقد تم تسجيل دخولك بالفعل'); 
        this._router.navigate(['/home']);    
        return false;
      } 
      else {  
        return true;
      }
  }
  
}
