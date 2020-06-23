import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionDetails } from 'src/app/_models/SessionDetails';
import { environment } from 'src/environments/environment';
import { FileUploadService } from 'src/app/core/services/FileUpload/file-upload.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

import config from '../../../../config';
import { StateService } from '../../../stateService';


@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor:Doctor;
  doctor_modified:Doctor;

  sessionsDetails:SessionDetails;
  days=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
  
  daysChecked = [];

  docId:Number;

  AMhours:number[];
  PMhours:number[];
  duration:number[];
  
  AMhour1:Number;
  AMhour2:Number;
  PMhour1:Number;
  PMhour2:Number;
  sessionDuration:Number;

  AMworkHours:boolean;
  PMworkHours:boolean;
  
  

  initSchedule:Schedule;
  
   DoctorImage:string;
   comingSessions:Schedule[];


  constructor(private toastr:ToastrService,
    private doctorService:DoctorService,

    private fileupload:FileUploadService,
    private route:ActivatedRoute ,
    private stateService: StateService,
    private http:HttpClient,
     private router:Router,
      private scheduleService:ScheduleService,
  private modalService:NgbModal, private authService:AuthService) {

    this.AMhours=Array(12).fill(0);
    this.PMhours=Array(12).fill(0);
    this.duration=Array(11).fill(0);
    this.sessionsDetails=null;



     
 
   
  }   
  docImg:String='../../assets/images/doctors/profile-pic.png';
  private fieToUpload:File=null;


  ngOnInit() {

    
/*   let url=window.location.href;
  this.docId =Number( url.substring(url.lastIndexOf('/') + 1)); */
  this.docId = this.authService.getUserPayLoad().id;

  console.log(this.docId);
  this.doctorService.getDoctor(this.docId)
  .subscribe(
    (_doctor)=> {
      this.doctor = _doctor;
      this.doctor_modified=_doctor;


      console.log(this.doctor);
      console.log(this.doctor_modified);

      if(this.doctor.user.imageName != "")
      {
        this.DoctorImage=environment.baseURL+"images/"+this.doctor.user.imageName;

      }

    }); 
    this.doctorService.getTodayTomorrowSessions(this.docId)
    .subscribe(
      (_schedule)=> {
        this.comingSessions = _schedule;
      });   
    console.log(this.doctor);
    
      this.setIterators();
  }
  

  navigateToDocDetails(doctorID:number){
    this.router.navigate(['doctor/details']) 
  }



  setIterators(){
    for (let index = 0; index < 12; index++) {
      this.AMhours[index] =index+1;
      this.PMhours[index] =index+1;
    }

    for (let i = 1; i < 12; i++) {
      this.duration[i-1] =i*5;
    }

  }

  editDoctor(){

    this.doctorService.UpdateDoctor(this.doctor_modified.user.id,this.doctor_modified)
    .subscribe(()=>{  
      
        this.toastr.success('تم تعديل البيانات بنجاح')



    })
 
  }


  addSessions(){
    this.sessionsDetails={
      doctorId:this.docId,
      days:this.daysChecked,
      duration:Number(this.sessionDuration),
      startAM:Number(this.AMhour1),
      endAM:Number(this.AMhour2),
      startPM:Number(this.PMhour1),
      endPM:Number(this.PMhour2)
    };
    console.log(this.sessionsDetails);
    this.doctorService.addSchedules(this.sessionsDetails)
    .subscribe(
      res =>{
        console.log(res);
        //alert("You have registered successfully! ..please wait to confirm your acount");
        this.toastr.success('لقد تم اضافة جلسات',''); 
        this.router.navigate(["/doctor/details/"+this.docId]);

      },  
      err => {
        console.log(err);
        //alert("there are some errors during registeration!");
        this.toastr.error('نأسف لذلك هناك مشكلة فى عملية اضافة الجلسات','حدث خطأ ما'); 
      }
    );
   
  }




  //OLDaddSessions(){
    
 
    // let dates=this.betweenDate(this.schedule.date1,this.schedule.date2);
    // //console.log(dates);

    // for (let i = 0; i < dates.length; i++) {
    //   for (let index = 0; index < this.daysChecked.length; index++) {
    //     const element = this.daysChecked[index];
    //     if (element==dates[i].toString().split(' ')[0]) {
    //       //the needed dates for the doctor
    //       let sessionsPerDay=60/Number(this.schedule.durtaion)*(Number(this.schedule.hour2)-Number(this.schedule.hour1));
    //        for (let x = 0; x < sessionsPerDay ; x++) {
    //         let currSession:Schedule={
    //             Id:null,
    //             DoctorId:this.docId,
    //             IsBooked:false,
    //             date:new Date(dates[i].setHours(Number(this.schedule.hour1),Number(this.schedule.durtaion)*x)),
    //             startTime:new Date(dates[i].setHours(Number(this.schedule.hour1),Number(this.schedule.durtaion)*x)),
    //             endTime:new Date(dates[i].setHours(Number(this.schedule.hour1),(Number(this.schedule.durtaion)*x)+Number(this.schedule.durtaion)))
    //           };

      // let currSession:Schedule={
                  
      //     "date": "2020-02-02T00:00:00",
      //     "startTime": "2020-02-02T00:00:00",
      //     "endTime": "2020-02-02T00:00:00",
      //     "isBooked": false,
      //     "doctorId": 1
      //      }

              // this.DoctorSessions.push(currSession);
              
        //   }
        
        // }
         
    //   }
   
    // }

   // call service

  //   this.doctorService.addSchedules(this.DoctorSessions);
  //   alert("Sessions Added Successfully");
  //   console.log(this.DoctorSessions);
    
  // }





  updateCheckedOptions(option, event) {
    if (event.target.checked==true) {
      this.daysChecked.push(option);
    }
    else{
      this.daysChecked=this.daysChecked.filter(a=>a!=event.target.value)
    }
  }

  // isDate(dateArg) {
  //     var t = (dateArg instanceof Date) ? dateArg : (new Date(dateArg));
  //     return !isNaN(t.valueOf());
  // }
  
  // isValidRange(minDate, maxDate) {
  //     return (new Date(minDate) <= new Date(maxDate));
  // }
  
  //  betweenDate(startDt, endDt) {
  //     var error = ((this.isDate(endDt)) && (this.isDate(startDt)) && this.isValidRange(startDt, endDt)) ? false : true;
  //     var between = [];
  //     if (error) console.log('error occured!!!... Please Enter Valid Dates');
  //     else {
  //         var currentDate = new Date(startDt),
  //             end = new Date(endDt);
  //         while (currentDate <= end) {
  //             between.push(new Date(currentDate));
  //             currentDate.setDate(currentDate.getDate() + 1);
  //         }
  //     }
  //     return between;
  // }




  handleFileInput(files:FileList)
  {
    this.fieToUpload=files.item(0);
    this.fileupload.postImage(this.fieToUpload,this.doctor.user.id).subscribe(
      ()=>{


        this.toastr.info("photo Uploaded")

      this.doctorService.getDoctor(this.doctor.user.id).subscribe((_doctor)=>{
    this.doctor= _doctor;


    this.DoctorImage=environment.baseURL+"images/"+this.doctor.user.imageName;
    console.log(environment.baseURL+"images/"+this.doctor.user.imageName);
      })



      

      }
,(err)=>{
console.log(err);
}

    );
  }

  joinMeeting(RoomId){
    let get_session_url = config.SAMPLE_SERVER_BASE_URL + '/api/session/getSession/'+RoomId;
    this.http.get(get_session_url).subscribe(
      (res) => {
        this.stateService.token$ = res['token'];
        this.stateService.sessionId$ = res['sessionId'];
        this.stateService.apiKey$ = res['apiKey'];
        this.router.navigate(['/video/'+RoomId])
      }
    )
   
    
    

  }


}
