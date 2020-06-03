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

   constructor(private httpClient:HttpClient) { }

/*   doctors:Doctor[] = [
    {
      id:1,
      fullName:"Mohammed Abd Elhady",
      age:25,
      address:"Aga",
      speciality:"Cardiologist"
    },
    {
      id:2,
      fullName:"Mina Ibrahim",
      age:25,
      address:"Dekernes",
      speciality:"Dermatologist"
    },
    {
      id:3,
      fullName:"Mohammed Elmorsy",
      age:26,
      address:"Elshrouk",
      speciality:"Gastroenterologist"
    }

  ];

  speicalities = [
    "Cardiology", "Dermatology" , "Gastroenterology"
  ] */

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

}
