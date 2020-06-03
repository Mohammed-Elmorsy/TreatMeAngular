import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  private doctors:Doctor[];
  private specialityID:number;

  constructor(private doctorService:DoctorService ,
    private route:ActivatedRoute , private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.specialityID = +params.get('specialityID');
    })

    this.doctorService.getDoctorsBySpecialityID(this.specialityID).subscribe(doctors=>
      this.doctors = doctors)     
  }
  
  navigateToDocDetails(doctorID:number){
    this.router.navigate(['doctor/details',doctorID]) 
  }

  navigateToSchedule(){
    this.router.navigate(['ss']);
  }

}
