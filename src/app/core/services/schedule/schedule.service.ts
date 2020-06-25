import { Injectable } from '@angular/core';
import {Schedule} from '../../../_models/schedule'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { doctorPatientSchedule } from 'src/app/_models/doctorPatientSchedule';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient:HttpClient) { }



  getSchedules()
  {

      return this.httpClient.get<Schedule[]>(environment.baseURL+"api/Schedule/Index")

  }
getScheduleByDoctorId(Id:Number,date:Date)
{

return this.httpClient.get<Schedule[]>(environment.baseURL+"api/Schedule/GetDoctorSchedules/"+Id+"/"+date)

}


  getScheduleById(id:number)
  {
    return this.httpClient.get<doctorPatientSchedule>(environment.baseURL+"api/DoctorPatientSchedules/GetByScheduleId/"+id);

  }
}
