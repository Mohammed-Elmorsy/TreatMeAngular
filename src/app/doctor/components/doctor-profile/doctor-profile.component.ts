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
  DoctorSchedule:Schedule[];

  docImg:String;

  hours:number[];
  
  duration:number[];
  
  schedule={
    
  date1:Date,
  date2:Date,
  day1:Number,
  day2:Number,
  hour1:Number,
  hour2:Number,
  durtaion:Number
  };




  constructor(private doctorService:DoctorService,private scheduleService:ScheduleService,private modalService:NgbModal) {
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
      this.doctor = _doctor}); 

    console.log(this.doctor);
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
    //print props
    console.log(this.schedule.date1);
    console.log(this.schedule.date1);
    console.log(this.schedule.hour1);
    console.log(this.schedule.hour2);
    console.log(this.schedule.day1);
    console.log(this.schedule.day2);
    console.log(this.schedule.durtaion);

    //dividing code



    //call service and post 
    
    // this.doctorService.addSchedules(this.DoctorSchedule).subscribe((a)=>{
    //   this.DoctorSchedule=a;
    //  console.log(this.DoctorSchedule);
     
    //  });

  }
  
  


}
