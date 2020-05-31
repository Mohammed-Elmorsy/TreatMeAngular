import { Injectable } from '@angular/core';

import { Doctor } from "../../../_models/doctor";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor() { }

  doctors:Doctor[] = [
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
  ]

  //-----------------------------------------methods------------------------------------
  getDoctors(){
    return this.doctors;
  }

  getSpecialities(){
    return this.speicalities;
  }

}
