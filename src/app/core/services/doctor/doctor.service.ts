import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Doctor } from "../../../_models/doctor";
import { Speciality } from 'src/app/_models/speciality';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Schedule } from 'src/app/_models/schedule';
import { SessionDetails } from 'src/app/_models/SessionDetails';
import { doctorPatientSchedule } from 'src/app/_models/doctorPatientSchedule';
import { DoctorPatientScheduleOpject } from 'src/app/_models/doctor-patient-schedule-opject';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctor:Doctor;
  docId:Number;
   constructor(private httpClient:HttpClient) { }

  //-----------------------------------------methods------------------------------------
  getConfirmedDoctors() {
    return this.httpClient.get<Doctor[]>(environment.baseURL+"api/Doctors/GetAllDoctorsByconfirmed/true");
  }

  getDoctorsRequests() {
    return this.httpClient.get<Doctor[]>(environment.baseURL+"api/Doctors/GetAllDoctorsByconfirmed/false");
  }

  getDocId(){
    return this.docId;
  }


  getDoctorsBySpeciality(specialityID:number){  
    return this.httpClient.get<Doctor[]>(environment.baseURL+"api/doctors/GetDoctorsBySpecialityId/"+specialityID);
  }  

  getDoctor(id){
        
    return this.httpClient.get<Doctor>(environment.baseURL+"api/Doctors/Details/"+id);
  }

  addSchedules(sessionDetails:SessionDetails){
    // alert("hello from add schedules service");
   return this.httpClient.post<SessionDetails>(environment.baseURL+"api/Schedule/AddSchedules",sessionDetails);
  }



  UpdateDoctor(id,_doctor)
  {
     return this.httpClient.put(environment.baseURL+"api/Doctors/Edit/"+id,_doctor);
  }

DeleteDoctor(id)
{
  return this.httpClient.delete(environment.baseURL+"api/Doctors/Delete/"+id);
}


    
  getTodayTomorrowSessions(id){
    return this.httpClient.get<Schedule[]>(environment.baseURL+"api/Schedule/getTodayTomorrowSchedules/"+id);
  } 
  getBookedSessionsInMonth(id){
    return this.httpClient.get<any>(environment.baseURL+"api/DoctorPatientSchedules/getBookedSessionsInMonth/"+id);
  }

  deleteSession(id:number){
    return this.httpClient.delete(environment.baseURL+"api/Schedule/Delete/"+id);

  }
  PatientCancelSession(id:number){
    return this.httpClient.post<Schedule[]>(environment.baseURL+"api/DoctorPatientSchedules/PatientCancelSession",id);

  }
  DoctorCancelSession(id:number){
    return this.httpClient.post<Schedule[]>(environment.baseURL+"api/DoctorPatientSchedules/DoctorCancelSession",id);

  }

  DoctorCancelDaySessions(id:number,date:Date){

    return this.httpClient.get<Schedule[]>(environment.baseURL+"api/Schedule/DoctorCancelSchedules/"+id+"/"+date)

  }
}
