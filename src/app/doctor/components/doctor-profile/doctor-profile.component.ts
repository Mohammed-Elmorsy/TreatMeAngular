import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor:Doctor;

  docImg:String;
 
  constructor(private doctorService:DoctorService,private scheduleService:ScheduleService) { }   


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
  }
  
  


}
