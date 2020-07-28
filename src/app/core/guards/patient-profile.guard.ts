import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { PatientService } from '../services/patient/patient.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientProfileGuard implements CanActivate {

  constructor(private _authService:AuthService,
    private _router:Router,private patientService : PatientService){}
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let role = this._authService.getUserPayLoad().role;
      if(this._authService.isLoggedIn() && role === "Patient") {
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
