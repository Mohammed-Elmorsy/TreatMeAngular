import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Doctor } from 'src/app/_models/doctor';
import { Observable } from 'rxjs';
import { DoctorService } from '../services/doctor/doctor.service';
import { Injectable } from '@angular/core';


@Injectable({ 
    providedIn : 'root'
})
export class DoctorsListResolver implements Resolve<Doctor[]>{
    private specialityID : number;

    constructor(private doctorService:DoctorService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Doctor[] | Observable<Doctor[]> | Promise<Doctor[]> {
         this.specialityID = +route.paramMap.get('specialityID');

        return this.doctorService.getDoctorsBySpeciality(this.specialityID);   
    }

}