import { Component, OnInit } from '@angular/core';

import { DoctorService } from '../core/services/doctor/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  specialities:String[];
  constructor(private doctorService:DoctorService) { }


  ngOnInit() {
    this.specialities = this.doctorService.getSpecialities();
    console.log(this.specialities);
  }
  

}
