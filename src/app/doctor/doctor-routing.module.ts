import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
//components
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorProfileComponent  } from './components/doctor-profile/doctor-profile.component';
//guards
import { DoctorProfileGuard } from '../core/guards/doctor-profile.guard';

const routes: Routes = [
  {
    path:"doctor", children:[
    //any doctor child routes with components are added here
    {path:"profile", component:DoctorProfileComponent, canActivate:[DoctorProfileGuard]},
    {path:"details/:id", component:DoctorDetailsComponent},
    {path:"list/:specialityID", component:DoctorListComponent}
 
  ]
}    
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
