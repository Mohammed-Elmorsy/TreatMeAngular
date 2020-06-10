import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doctor } from "../../../_models/doctor";
import { Speciality } from 'src/app/_models/speciality';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctor:Doctor;
   constructor(private httpClient:HttpClient) { }

  //-----------------------------------------methods------------------------------------
  getDoctors() {
    return this.httpClient.get<Doctor[]>(environment.baseURL+"api/Doctors/Index");
  }

  getSpecialities(){
    return this.httpClient.get<Speciality[]>(environment.baseURL+"api/speciality");
  }  

  getDoctorsBySpecialityID(specialityID:number){
    return this.httpClient.get<Doctor[]>(environment.baseURL+"api/doctors/getbyspeciality/"+specialityID);
  }  

  getDoctor(id){

    return this.httpClient.get<Doctor>(environment.baseURL+"api/Doctors/Details/"+id);
  }
  
}
