import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient) { }
  getPatientById(id:Number)
  {

    return this.httpclient.get(environment.baseURL+"api/patient/"+id);


  }



}
