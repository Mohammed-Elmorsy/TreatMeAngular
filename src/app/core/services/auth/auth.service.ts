import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/_models/patient';
import { Doctor } from 'src/app/_models/doctor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  //------------------------------------methods----------------------------------------
    //register
    public registerPatientUser(patient:Patient){
      return this.httpClient.post<Patient>(environment.baseURL+'api/user/create',patient)
    }

    public registerDoctorUser(doctor:Doctor){
      return this.httpClient.post<Doctor>(environment.baseURL+'api/user/create',doctor)
    }
}
