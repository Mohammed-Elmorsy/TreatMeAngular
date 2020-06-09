import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  

  choocedDate:Date;
  constructor(private scheduleService:ScheduleService) { }
  //ScheduleTimes:Schedule[];

  DoctorSchedule:Schedule[];

  GetDoctorScheduleTimes(id:Number,choocedDate)
  {
     this.scheduleService.getScheduleByDoctorId(id,choocedDate).subscribe((a)=>{
       this.DoctorSchedule=a;
      console.log(this.DoctorSchedule);
      
      });



  }


  ngOnInit() {

   /*this.scheduleService.getSchedules().subscribe(schedule=>
    this.ScheduleTimes=schedule);*/

   

  }

}
