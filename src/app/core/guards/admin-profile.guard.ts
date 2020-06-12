import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { PatientService } from '../services/patient/patient.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileGuard implements CanActivate {

  constructor(private _authService:AuthService,private patientService : PatientService,
    private _router:Router){}
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      let role = this._authService.getUserPayLoad().role;
      if(this._authService.isLoggedIn() && role === "Admin") {  
        return this.patientService.getPatients().pipe(
          map(data =>{
            if(data){
              console.log(data);
              return true; 
            }              
            else {
              console.log(data);  
              this._router.navigate(['/login']);
              return false;
            }

          })

          
          );

      }
      else {
        this._router.navigate(['/login']);
        return false;
      }
  }
  
}
