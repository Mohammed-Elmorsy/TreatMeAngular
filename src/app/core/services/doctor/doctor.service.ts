import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doctor } from "../../../_models/doctor";
import { Speciality } from 'src/app/_models/speciality';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Schedule } from 'src/app/_models/schedule';

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

  addSchedules(schedules){
   return this.httpClient.post<Schedule[]>(environment.baseURL+"api/doctors/AddSchedules",schedules);
  }



  UpdateDoctor(id:Number,_doctor:Doctor)
  {
     return this.httpClient.put(environment.baseURL+"api/Doctors/Edit/"+id,_doctor);
  }

  
}
