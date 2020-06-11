import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorProfileModalComponent } from '../doctor-profile-modal/doctor-profile-modal.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor:Doctor;
  doctor_modified:Doctor;
  DoctorSchedule:Schedule[];
  days=["Sat","Sun","Mon","Tue","Wed","Thu","Fri"];
  
  daysChecked = [];

  docImg:String;

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




  constructor(private toastr:ToastrService, private doctorService:DoctorService,private scheduleService:ScheduleService,private modalService:NgbModal) {
      this.hours=Array(24).fill(0);
      this.duration=Array(11).fill(0);
      
  }   


  ngOnInit() {
    
   
  let url=window.location.href;
  let docId = url.substring(url.lastIndexOf('/') + 1);

  console.log(docId);
  this.doctorService.getDoctor(docId)
  .subscribe(
    (_doctor)=> {
      this.doctor = _doctor;
      this.doctor_modified=_doctor;
      console.log(this.doctor);
      console.log(this.doctor_modified);


    }); 
    this.docImg="../../assets/images/doctors/"+docId+".jpg";
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

    this.doctorService.UpdateDoctor(this.doctor_modified.user.id,this.doctor_modified)
    .subscribe(()=>{  
      
        this.toastr.success('تم تعديل البيانات بنجاح')



    })
 
  }


  addSessions(){
    //print props
    let dates=this.betweenDate(this.schedule.date1,this.schedule.date2);
    console.log(dates);

    for (let i = 0; i < dates.length; i++) {
      for (let index = 0; index < this.daysChecked.length; index++) {
        const element = this.daysChecked[index];
        if (element==dates[i].toString().split(' ')[0]) {
          //the needed dates for the doctor
          console.log(dates[i]);    
        }
         
      }
   
    }



 

    console.log(this.schedule.hour1);
    console.log(this.schedule.hour2);
    
    console.log(this.schedule.durtaion);


    //dividing code

    //call service and post 
    
    // this.doctorService.addSchedules(this.DoctorSchedule).subscribe((a)=>{
    //   this.DoctorSchedule=a;
    //  console.log(this.DoctorSchedule);
     
    //  });

  
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