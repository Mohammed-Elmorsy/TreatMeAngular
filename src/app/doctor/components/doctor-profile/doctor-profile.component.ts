import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorProfileModalComponent } from '../doctor-profile-modal/doctor-profile-modal.component';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor:Doctor;

  DoctorSessions:Schedule[]=[];

  days=["Sat","Sun","Mon","Tue","Wed","Thu","Fri"];
  
  daysChecked = [];

  docImg:String;
  docId:Number;

  hours:number[];
  
  duration:number[];

  
  schedule={
      
    date1:Date,
    date2:Date,
    days:Number,
    hour1:Number,
    hour2:Number,
    durtaion:Number
  };

  initSchedule:Schedule;
  


  constructor(private doctorService:DoctorService,private scheduleService:ScheduleService,private modalService:NgbModal) {
      this.hours=Array(24).fill(0);
      this.duration=Array(11).fill(0);
 
   
  }   


  ngOnInit() {
    
   
  let url=window.location.href;
  this.docId =Number( url.substring(url.lastIndexOf('/') + 1));

  console.log(this.docId);
  this.doctorService.getDoctor(this.docId)
  .subscribe(
    (_doctor)=> {
      this.doctor = _doctor}); 

    console.log(this.doctor);
    this.docImg="../../assets/images/doctors/"+this.docId+".jpg";
      this.setIterators();
  }
  
  setIterators(){
    for (let index = 0; index < 24; index++) {
      this.hours[index] =index+1;
    }
    for (let i = 1; i < 12; i++) {
      this.duration[i-1] =i*5;
    }

  }

  editDoctor(){
  let ref=  this.modalService.open(DoctorProfileModalComponent);
  ref.componentInstance.doctor=this.doctor;

  ref.result.then((yes)=>{
    console.log("Ok Click");
    
  },
  (cancel)=>
  {
    console.log("Cancel Click");
    
  })

  }


  addSessions(){
    
 
    let dates=this.betweenDate(this.schedule.date1,this.schedule.date2);
    //console.log(dates);

    for (let i = 0; i < dates.length; i++) {
      for (let index = 0; index < this.daysChecked.length; index++) {
        const element = this.daysChecked[index];
        if (element==dates[i].toString().split(' ')[0]) {
          //the needed dates for the doctor
          let sessionsPerDay=60/Number(this.schedule.durtaion)*(Number(this.schedule.hour2)-Number(this.schedule.hour1));
           for (let x = 0; x < sessionsPerDay ; x++) {
            let currSession:Schedule={
                Id:null,
                DoctorId:this.docId,
                IsBooked:false,
                date:new Date(dates[i].setHours(Number(this.schedule.hour1),Number(this.schedule.durtaion)*x)),
                startTime:new Date(dates[i].setHours(Number(this.schedule.hour1),Number(this.schedule.durtaion)*x)),
                endTime:new Date(dates[i].setHours(Number(this.schedule.hour1),(Number(this.schedule.durtaion)*x)+Number(this.schedule.durtaion)))
              };

              this.DoctorSessions.push(currSession);
              
          }
          
        }
         
      }
   
    }

   // call service

    this.doctorService.addSchedules(this.DoctorSessions);
    alert("Sessions Added Successfully")
  }





  updateCheckedOptions(option, event) {
    if (event.target.checked==true) {
      this.daysChecked.push(option);
    }
    else{
      this.daysChecked=this.daysChecked.filter(a=>a!=event.target.value)
    }
  }

  isDate(dateArg) {
      var t = (dateArg instanceof Date) ? dateArg : (new Date(dateArg));
      return !isNaN(t.valueOf());
  }
  
  isValidRange(minDate, maxDate) {
      return (new Date(minDate) <= new Date(maxDate));
  }
  
   betweenDate(startDt, endDt) {
      var error = ((this.isDate(endDt)) && (this.isDate(startDt)) && this.isValidRange(startDt, endDt)) ? false : true;
      var between = [];
      if (error) console.log('error occured!!!... Please Enter Valid Dates');
      else {
          var currentDate = new Date(startDt),
              end = new Date(endDt);
          while (currentDate <= end) {
              between.push(new Date(currentDate));
              currentDate.setDate(currentDate.getDate() + 1);
          }
      }
      return between;
  }
}
