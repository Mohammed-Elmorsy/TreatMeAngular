import { Component, OnInit } from '@angular/core';

import { Speciality } from '../../_models/speciality';
import { Router, ActivatedRoute } from '@angular/router';
import { SpecialityService } from 'src/app/core/services/speciality/speciality.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private specialities:Speciality[]; 

  constructor(private router:Router, private route:ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe((data: { home: any }) => {
      this.specialities = data.home;      
    })

  }

  

  //still not considered time loading from server
  navigateToDocsList(specialityID){
    this.router.navigate(["doctor/list", specialityID])
  }
  

}
