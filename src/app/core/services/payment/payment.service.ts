
import { Injectable } from '@angular/core';
import {Schedule} from '../../../_models/schedule'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { doctorPatientSchedule } from 'src/app/_models/doctorPatientSchedule';
import { doctorPatientMeeting } from 'src/app/_models/doctorPatientMeeting';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient:HttpClient) { }



  checkOut()
  {

      return this.httpClient.get(environment.baseURL+"api/payment");

  }
}