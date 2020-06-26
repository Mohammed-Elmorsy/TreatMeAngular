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
import { DoctorsListResolver } from '../core/resolvers/doctors-list.resolver';
import{NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import{StarRatingComponent} from 'ng-starrating'


@NgModule({
  declarations: [
    DoctorDetailsComponent,
    DoctorListComponent,
    DoctorProfileComponent,
    DoctorProfileModalComponent,
    StarRatingComponent

  ],
  entryComponents:[DoctorProfileModalComponent],
  imports: [
   SharedModule,
   DoctorRoutingModule,
   NgxExtendedPdfViewerModule,
   

  ],
  exports:[DoctorProfileModalComponent],
  providers:[DoctorsListResolver]  
})
export class DoctorModule { }
