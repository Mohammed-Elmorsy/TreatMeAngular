import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Speciality } from 'src/app/_models/speciality';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  private specialities:Speciality[];

  constructor(private httpClient:HttpClient) { }

  getSpecialities(){
    return this.httpClient.get<Speciality[]>(environment.baseURL+"api/speciality")
  }
}
