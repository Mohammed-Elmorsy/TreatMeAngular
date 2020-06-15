import { Component, OnInit } from '@angular/core';

import { Speciality } from '../../_models/speciality';
import { Router } from '@angular/router';
import { SpecialityService } from 'src/app/core/services/speciality/speciality.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private specialities:Speciality[]; 

  constructor(private specialityService:SpecialityService, 
    private router:Router) { }


  ngOnInit() {
    this.specialityService.getSpecialities().subscribe((_specialities)=>{
      this.specialities = _specialities ;
      console.log(_specialities);
    },
    err =>{
      console.log(err); 
    }
     
     );  
     console.log(this.specialities);

  }

  

  //still not considered time loading from server
  navigateToDocsList(specialityID:number){
    this.router.navigate(["doctor/list", specialityID])
  }
  

}
