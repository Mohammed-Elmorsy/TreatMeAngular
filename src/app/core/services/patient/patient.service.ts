import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Patient } from 'src/app/_models/patient';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Schedule } from 'src/app/_models/schedule';
import { doctorPatientSchedule } from 'src/app/_models/doctorPatientSchedule';
import { DoctorPatientReview } from 'src/app/_models/doctor-patient-review';
import { DoctorPatientRaoucheh } from 'src/app/_models/doctor-patient-raoucheh';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient) { }
  getPatients(){
    return this.httpclient.get<Patient[]>(environment.baseURL+"api/patient");
  }
  
  getPatientById(id)
  {

    return this.httpclient.get<Patient>(environment.baseURL+"api/patient/"+id);


  }

  UpdatePatient(id:Number,_patient:Patient)
  {
    return this.httpclient.put(environment.baseURL+"api/patient/"+id,_patient);
  }

  DeletPatient(id:Number)
  {
    return this.httpclient.delete(environment.baseURL+"api/patient/"+id);
  }

  getPatientSessions(id:Number){

    return this.httpclient.get<Schedule[]>(environment.baseURL+"api/DoctorPatientSchedules/GetByPatientId/"+id);
  }
  bookPatientSession(patientSession:doctorPatientSchedule){
    return this.httpclient.post<doctorPatientSchedule>(environment.baseURL+"api/DoctorPatientSchedules/PostDoctorPatientSchedule",patientSession);

  }




  AddDoctorReview(_review:DoctorPatientReview)
  {
    return this.httpclient.post(environment.baseURL+"api/DoctorPatientReviews/Create",_review)
  }
   
  EditDoctrorReview(modifiedReview:DoctorPatientReview)
  {
    return this.httpclient.put(environment.baseURL+"api/DoctorPatientReviews/Edit",modifiedReview)

  }

  GetPatientRaoucheh(id:Number)
{
  return this.httpclient.get<DoctorPatientRaoucheh[]>(environment.baseURL+"api/DoctorPatientRaoucheh/"+id);
}

}
