import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorComponent } from './doctor-profile/doctor.component';


const routes: Routes = [
  {
    path:"doctor", children:[
      //any doctor child routes with components are added here
    {path:"profile/:id", component:DoctorComponent} 
  ]
}
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
