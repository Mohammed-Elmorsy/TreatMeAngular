import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ScheduleService } from 'src/app/core/services/schedule/schedule.service';
import { Schedule } from 'src/app/_models/schedule';


@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})

export class DoctorDetailsComponent implements OnInit {

  docImg:string;
 
  doctor:Doctor;

 



  constructor(private service:DoctorService) {
 
   }

  ngOnInit() {

  let url=window.location.href;
  let docId = url.substring(url.lastIndexOf('/') + 1);

  this.service.getDoctor(docId)
  .subscribe(
    (_doctor)=> this.doctor = _doctor
    );  

  this.docImg="../../assets/images/doctors/"+docId+".jpg";


  }

}
