import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorComponent } from './doctor-profile/doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';


const routes: Routes = [
  {
    path:"doctor", children:[
      //any doctor child routes with components are added here
    {path:"details/:id", component:DoctorComponent},
    {path:"list/:specialityID", component:DoctorListComponent}
  ]
}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
