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
import { DoctorPatientReview } from 'src/app/_models/doctor-patient-review';
import { StarRatingComponent } from 'ng-starrating';

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
  PatientId:Number;
  doctor:Doctor;
  role:string;
  docId:number;
  DoctorImage:String;
  review:DoctorPatientReview;
  reviews:DoctorPatientReview[];
  flagToRole:Number;

 
  constructor(private service:DoctorService,private router:Router,private authService:AuthService
    ,private sCheduleService:ScheduleService,private patientService:PatientService
    ,private toastr:ToastrService ,private route:ActivatedRoute,private doctorService:DoctorService) {
      this.review={
        DoctorId:0,PatientId:0,Comment:'',Rating:0
      }
 
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
    else if(this.authService.getUserPayLoad().role=='Patient'){
      this.role='Patient'
      this.flagToRole=1;
      this.patientId=this.authService.getUserPayLoad().id;
    }   
    else{
      this.flagToRole=3;
    }


    /**this code to return reviews oF Doctor */
     
    this.doctorService.GetDoctorReviews(this.docId).subscribe((res)=>{
      this.reviews=res;
    })


    /** this code to Check If Doctor has image Or Not to View Defult Image And Upload or View Current Image or Update  */
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


/** THIS code to get Value of Rating  */

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
   
    this.review.Rating=$event.newValue;
     
  }
  

  /**  send Review to backEnd  */
  postReview()
  {
    this.review.DoctorId=this.docId;
    this.review.PatientId=this.patientId;
    this.patientService.AddDoctorReview(this.review).subscribe(()=>{
      this.toastr.warning("review Added");
      /** to update Reviews after posting */
      this.doctorService.GetDoctorReviews(this.docId).subscribe((res)=>{
        this.reviews=res;
      })
    });

  }
 /*
  bookSession(sessionId){
    let booking:doctorPatientSchedule={
      DoctorId:this.docId,doctor:null,patient:null,schedule:null,
      PatientId:this.authService.getUserPayLoad().id,
      ScheduleId:sessionId
    };
    this.patientService.bookPatientSession(booking)
    .subscribe(()=>{  
      
        this.toastr.success('تم حجز الجلسة');

        this.router.navigate(['/payment/'+sessionId]);


    })
  }
*/
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
