import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { doctorPatientSchedule } from 'src/app/_models/doctorPatientSchedule';
import { PatientService } from 'src/app/core/services/patient/patient.service';
import { ToastrService } from 'ngx-toastr';
import {  BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import { now } from 'jquery';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})

export class DoctorDetailsComponent implements OnInit {
  


  datePickerConfig:Partial<BsDatepickerConfig>

  test:String;
  choocedDate:String;
  patientId:Number;
  dateOfBirth:string;

  docImg:string;
 
  doctor:Doctor;
  role:string;
  docId:Number;
 
  constructor(private service:DoctorService,private authService:AuthService,private sCheduleService:ScheduleService,private patientService:PatientService,private toastr:ToastrService) {
 
   }

   DoctorSchedule:Schedule[];
   getChoosedDate(){
     alert(this.dateOfBirth+"");
   }

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
  
   
    if (this.authService.getUserPayLoad().role=='Doctor') {
      this.docId = this.authService.getUserPayLoad().id;
    }
    else{
      let url=window.location.href;
      this.docId =Number( url.substring(url.lastIndexOf('/') + 1));
    }

  this.service.getDoctor(this.docId)
  .subscribe(
    (_doctor)=> {this.doctor = _doctor});  
    console.log(this.doctor);
  this.docImg="../../assets/images/doctors/"+this.docId+".jpg";


  }



  bookSession(sessionId){
    let booking:doctorPatientSchedule={
      DoctorId:this.docId,
      PatientId:this.authService.getUserPayLoad().id,
      ScheduleId:sessionId
    };
    this.patientService.bookPatientSession(booking)
    .subscribe(()=>{  
      
        this.toastr.success('تم حجز الجلسة');



    })

    


  }
}
