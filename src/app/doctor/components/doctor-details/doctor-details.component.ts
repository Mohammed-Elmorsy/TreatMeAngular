import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';


@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})

export class DoctorDetailsComponent implements OnInit {

  test:String;
  choocedDate:Date;

  docImg:string;
 
  doctor:Doctor;

  constructor(private service:DoctorService,private sCheduleService:ScheduleService) {
 
   }

   DoctorSchedule:Schedule[];

   GetDoctorScheduleTimes(id:Number,choocedDate:Date)
   {
     console.log(choocedDate);
      this.sCheduleService.getScheduleByDoctorId(id,choocedDate).subscribe((a)=>{
        this.DoctorSchedule=a;
       console.log(this.DoctorSchedule);
       
       });
 
      }

  ngOnInit() {

  let url=window.location.href;
  let docId = url.substring(url.lastIndexOf('/') + 1);

  this.service.getDoctor(docId)
  .subscribe(
    (_doctor)=> {this.doctor = _doctor});  
    console.log(this.doctor);
  this.docImg="../../assets/images/doctors/"+docId+".jpg";


  }

}
