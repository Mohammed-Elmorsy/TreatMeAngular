import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Speciality } from 'src/app/_models/speciality';
import { SpecialityService } from '../services/speciality/speciality.service';


@Injectable({ 
    providedIn : 'root'
})
export class HomeResolver implements Resolve<Speciality[]>{

    constructor(private sepcialityService:SpecialityService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Speciality[] | Observable<Speciality[]> | Promise<Speciality[]> {

        return this.sepcialityService.getSpecialities();   
    }

}