import { Speciality } from './../../_models/speciality';
import { Component, OnInit } from '@angular/core';
import { SpecialityService } from 'src/app/core/services/speciality/speciality.service';

@Component({
  selector: 'app-admin-specialities-list',
  templateUrl: './admin-specialities-list.component.html',
  styleUrls: ['./admin-specialities-list.component.css']
})
export class AdminSpecialitiesListComponent implements OnInit {

  private specialities:Speciality[];

  constructor(private specialityService:SpecialityService) { }

  ngOnInit() {
    this.specialityService.getSpecialities().subscribe(res=>{
      this.specialities = res;
    })
  }

}
