import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from "../shared/shared.module";
import { DoctorRoutingModule } from './doctor-routing.module';

import { DoctorDetailsComponent } from "./components/doctor-details/doctor-details.component";
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';


@NgModule({
  declarations: [
    DoctorDetailsComponent,
    DoctorListComponent
  ],
  imports: [
   SharedModule,
   DoctorRoutingModule

  ]
})
export class DoctorModule { }
