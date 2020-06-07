import { Injectable } from '@angular/core';
import {Schedule} from '../../../_models/schedule'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient:HttpClient) { }



  getSchedules()
  {

      return this.httpClient.get<Schedule[]>(environment.baseURL+"api/Schedule/Index")

  }
getScheduleByDoctorId(Id:Number)
{

return this.httpClient.get<Schedule[]>(environment.baseURL+"api/Schedule/GetDoctorSchedules/"+Id)

}


 /* scheduleTimes:Schedule[]=[
    {
      Id:1,
      date: new Date('6/15/2020'),
      StartTime:new Date('6/15/19, 10:30 PM') ,
        EndTime:new Date('6/15/19, 11:00 PM'),
        IsBooked:true,
        DoctorId :1



    },
    {
      Id:2,
      date: new Date('6/15/2020'),
      StartTime:new Date('6/15/19, 10:30 AM') ,
        EndTime:new Date('6/15/19, 11:00 AM'),
        IsBooked:true,
        DoctorId :1


    },
    {
      Id:2,
      date: new Date('6/15/2020'),
      StartTime:new Date('6/15/19, 11:30 AM') ,
        EndTime:new Date('6/15/19, 12:00 PM'),
        IsBooked:false,
        DoctorId :1


    },
    {
      Id:4,
      date: new Date('6/15/2020'),
      StartTime:new Date('6/15/19, 2:30 PM') ,
        EndTime:new Date('6/15/19, 3:00 PM'),
        IsBooked:false,
        DoctorId :1


    },
      

  ];*/
}
