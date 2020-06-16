import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';
import { AuthService } from 'src/app/core/services/auth/auth.service';


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

  constructor(private service:DoctorService,private authService:AuthService,private sCheduleService:ScheduleService) {
 
   }

   DoctorSchedule:Schedule[];

   GetDoctorScheduleTimes(id:Number,choocedDate:Date)
   {
     console.log(choocedDate);
      this.sCheduleService.getScheduleByDoctorId(id,choocedDate).subscribe((a)=>{
        this.DoctorSchedule=a;
       console.log(this.DoctorSchedule);
       if (a.length==0) {
        this.DoctorSchedule=[];
      }
       
       });
      
 
      }

  ngOnInit() {
    let docId:number;
    let role = this.authService.getUserPayLoad().role;
    if (role=="Doctor") {
          docId= this.authService.getUserPayLoad().id
    }
    else{

      docId= Number(this.service.docId);
    }

  this.service.getDoctor(docId)
  .subscribe(
    (_doctor)=> {this.doctor = _doctor});  
    console.log(this.doctor);
  this.docImg="../../assets/images/doctors/"+docId+".jpg";


  }

}
