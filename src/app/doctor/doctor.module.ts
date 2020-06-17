import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from "../shared/shared.module";
import { DoctorRoutingModule } from './doctor-routing.module';

import { DoctorDetailsComponent } from "./components/doctor-details/doctor-details.component";
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorProfileModalComponent } from './components/doctor-profile-modal/doctor-profile-modal.component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

@NgModule({
  declarations: [
    DoctorDetailsComponent,
    DoctorListComponent,
    DoctorProfileComponent,
    DoctorProfileModalComponent

  ],
  entryComponents:[DoctorProfileModalComponent],
  imports: [
   SharedModule,
   DoctorRoutingModule,
   BsDatepickerModule.forRoot()

  ],
  exports:[DoctorProfileModalComponent]
})
export class DoctorModule { }
