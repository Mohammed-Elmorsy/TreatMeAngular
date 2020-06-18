import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit { 

  private doctors:Doctor[];
  private specialityID:number;

  constructor(private doctorService:DoctorService ,
    private route:ActivatedRoute , private router:Router,private authService:AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.specialityID = +params.get('specialityID');
    })

    this.doctorService.GetAllDoctorDetailsBySpecialityId(this.specialityID).subscribe(doctors=>
      this.doctors = doctors)     
  }
  
  navigateToDocDetails(doctorID:number){

    this.router.navigate(['doctor/details/'+doctorID]);
    this.doctorService.docId=doctorID;

  }

  navigateToSchedule(){
    this.router.navigate(['/schedule/index']);
  }

}
