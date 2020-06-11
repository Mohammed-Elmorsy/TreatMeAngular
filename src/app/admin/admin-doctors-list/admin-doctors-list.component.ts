import { DoctorService } from './../../core/services/doctor/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/_models/doctor';

@Component({
  selector: 'app-admin-doctors-list',
  templateUrl: './admin-doctors-list.component.html',
  styleUrls: ['./admin-doctors-list.component.css']
})
export class AdminDoctorsListComponent implements OnInit {

  private doctors:Doctor[];
  constructor(private doctorService:DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(res =>{
       this.doctors = res;
    })
       
  }

}
