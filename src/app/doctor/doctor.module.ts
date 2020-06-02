import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';
import { DoctorRoutingModule } from './doctor-routing.module';

import { DoctorComponent } from "./doctor-profile/doctor.component";
import { DoctorListComponent } from './doctor-list/doctor-list.component';


@NgModule({
  declarations: [
    DoctorComponent,
    DoctorListComponent
  ],
  imports: [
   SharedModule,
   RouterModule,
   DoctorRoutingModule

  ]
})
export class DoctorModule { }
