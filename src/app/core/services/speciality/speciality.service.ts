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


  AddSpeciality(_speciality:Speciality)
  {
   return this.httpClient.post<Speciality>(environment.baseURL+"api/speciality",_speciality);

  }
 DeleteSpeciality(id)
 {
    return this.httpClient.delete(environment.baseURL+"api/speciality/"+id);


 }


}
