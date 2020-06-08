import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor:Doctor;

  constructor(private service:DoctorService,private route:ActivatedRoute,
     private router:Router) { }   

     
  ngOnInit() {
    
  let url=window.location.href;
  let docId = url.substring(url.lastIndexOf('/') + 1);
  console.log(docId);
  this.service.getDoctor(docId)
  .subscribe(
    (_doctor)=> {
      this.doctor = _doctor
    }); 

    console.log(this.doctor);
  }

}
