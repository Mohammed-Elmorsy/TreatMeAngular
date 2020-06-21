import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { doctorPatientSchedule } from 'src/app/_models/doctorPatientSchedule';
import { PatientService } from 'src/app/core/services/patient/patient.service';
import { ToastrService } from 'ngx-toastr';
import { now } from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})

export class DoctorDetailsComponent implements OnInit {
  


  test:String;
  choocedDate:String;
  patientId:Number;
  dateOfBirth:string;

  docImg:string;
 
  doctor:Doctor;
  role:string;
  docId:number;
  DoctorImage:String;
 
  constructor(private service:DoctorService,private router:Router,private authService:AuthService
    ,private sCheduleService:ScheduleService,private patientService:PatientService
    ,private toastr:ToastrService ,private route:ActivatedRoute) {
 
   }

   DoctorSchedule:Schedule[];
   getChoosedDate(){
     alert(this.dateOfBirth+"");
   }

   GetDoctorScheduleTimes(id:Number,choocedDate:Date)
   {
     console.log(choocedDate);
      this.sCheduleService.getScheduleByDoctorId(id,choocedDate).subscribe(
        (a)=>{
        this.DoctorSchedule=a;
       console.log(this.DoctorSchedule);
       if (a.length==0) {
        this.DoctorSchedule=[];
       }
       
       });
      
 
      }
      
     
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.docId = +params.get('id');
    })
  
   
    if (this.authService.getUserPayLoad().role=='Doctor') {
      this.role='doctor';
      this.docId=this.authService.getUserPayLoad().id;

    }
    else{
      this.role='patient'
    }   

  this.service.getDoctor(this.docId)
  .subscribe(

    (_doctor)=> {this.doctor = _doctor;
      if(this.doctor.user.imageName != null)
      {
        this.DoctorImage=environment.baseURL+"images/"+this.doctor.user.imageName;
  
      }});  
    console.log(this.doctor);
    
     this.docImg="../../assets/images/doctors/profile-pic.png";

   




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
        this.router.navigate(['patient/profile']);


    })
  }

  deleteSession(session){
    this.service.deleteSession(session.id).subscribe(()=>{  
     

      this.toastr.success('تم الغاء الجلسة');

      this.DoctorSchedule.splice(this.DoctorSchedule.indexOf(session),1);

      
     
  });


  }
  cancelSession(id){
    this.service.DoctorCancelSession(id).subscribe((a)=>{  
      this.DoctorSchedule=a;

      //send mail to patient
      this.toastr.success('تم الغاء حجز الجلسة');
      
 
    });

  }

  CancelDaySessions(choocedDate:Date){
    this.service.DoctorCancelDaySessions(this.docId,choocedDate).subscribe((a)=>{  
      this.DoctorSchedule=a;
      this.DoctorSchedule=[];

      //send mail to patient
      this.toastr.success('تم الغاء حجوزات اليوم');
      
 
    });

  }



}
