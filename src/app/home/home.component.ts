import { Component, OnInit } from '@angular/core';

import { DoctorService } from '../core/services/doctor/doctor.service';

import { Speciality } from '../_models/speciality';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  specialities:Speciality[];
  constructor(private doctorService:DoctorService) { }


  ngOnInit() {
    this.doctorService.getSpecialities()
                            .subscribe(
                              (_specialities)=> this.specialities = _specialities
                              );
    console.log(this.specialities);
  }
  

}
