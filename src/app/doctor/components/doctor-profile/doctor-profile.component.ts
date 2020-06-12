import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorProfileModalComponent } from '../doctor-profile-modal/doctor-profile-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionDetails } from 'src/app/_models/SessionDetails';

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

  docImg:String;
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
  


  constructor(private toastr:ToastrService,private doctorService:DoctorService,private route:ActivatedRoute , private router:Router, private scheduleService:ScheduleService,private modalService:NgbModal) {
      this.AMhours=Array(12).fill(0);
      this.PMhours=Array(12).fill(0);
      this.duration=Array(11).fill(0);
      this.sessionsDetails=null;
 
   
  }   


  ngOnInit() {
    
   
  let url=window.location.href;
  this.docId =Number( url.substring(url.lastIndexOf('/') + 1));

  console.log(this.docId);
  this.doctorService.getDoctor(this.docId)
  .subscribe(
    (_doctor)=> {
      this.doctor = _doctor;
      this.doctor_modified=_doctor;
      console.log(this.doctor);
      console.log(this.doctor_modified);


    }); 
    console.log(this.doctor);
    this.docImg="../../assets/images/doctors/"+this.docId+".jpg";
      this.setIterators();
  }
  

  navigateToDocDetails(doctorID:number){
    this.router.navigate(['doctor/details',doctorID]) 
  }



  setIterators(){
    for (let index = 0; index < 12; index++) {
      this.AMhours[index] =index+1;
      this.PMhours[index] =index+13;
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
    this.doctorService.addSchedules(this.sessionsDetails);
    

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
}
