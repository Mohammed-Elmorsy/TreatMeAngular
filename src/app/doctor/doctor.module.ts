import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modules
import { SharedModule } from "../shared/shared.module";
import { DoctorRoutingModule } from './doctor-routing.module';
//components
import { DoctorDetailsComponent } from "./components/doctor-details/doctor-details.component";
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorProfileModalComponent } from './components/doctor-profile-modal/doctor-profile-modal.component';


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
   DoctorRoutingModule
  ],
  exports:[DoctorProfileModalComponent]
})
export class DoctorModule { }
