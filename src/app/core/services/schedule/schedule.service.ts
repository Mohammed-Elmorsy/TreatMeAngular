import { Injectable } from '@angular/core';
import {Schedule} from '../../../_models/schedule'

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }
  scheduleTimes:Schedule[]=[
    {
      Id:1,
      date:1/6/2020,
      StartTime:'10.30 AM',
        EndTime:'11.00 PM',
        IsBooked:true,
        DoctorId :1



    },
    {
      Id:2,
      date:1/6/2020,
      StartTime:'12.30 PM',
        EndTime:'1.00 PM',
        IsBooked:false,
        DoctorId :1



    },
    {
      Id:3,
      date:1/6/2020,
      StartTime:'2.30 PM',
        EndTime:'3.00 PM',
        IsBooked:true,
        DoctorId :1



    },
    {
      Id:1,
      date:1/6/2020,
      StartTime:'5.30 PM',
        EndTime:'6.30 PM',
        IsBooked:false,
        DoctorId :1



    },




  ];

}
