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

  private doctors:Doctor[] = [];   

  constructor(
    private route:ActivatedRoute , private router:Router,private authService:AuthService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { doctorsList: any }) => {
      this.doctors = data.doctorsList;  
      console.log(this.doctors)
    })
     
  }
  
  navigateToDocDetails(doctorID:number){

    this.router.navigate(['doctor/details/'+doctorID]);

  }

  navigateToSchedule(){
    this.router.navigate(['/schedule/index']);
  }

}
