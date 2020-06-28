import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{SharedModule} from './../shared/shared.module'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminDoctorsListComponent } from './admin-doctors-list/admin-doctors-list.component';
import { AdminSpecialitiesListComponent } from './admin-specialities-list/admin-specialities-list.component';
import { AdminPatientsListComponent } from './admin-patients-list/admin-patients-list.component';
import { AdminDoctorsRequestsComponent } from './admin-doctors-requests/admin-doctors-requests.component';
import{NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer'


@NgModule({
  declarations: [AdminProfileComponent, AdminDoctorsListComponent, AdminSpecialitiesListComponent, AdminPatientsListComponent, AdminDoctorsRequestsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgxExtendedPdfViewerModule
  
  ]
})
export class AdminModule { }
