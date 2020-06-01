import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { DoctorComponent } from './doctor/doctor-profile/doctor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"",redirectTo:"home" ,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"doctor/1",component:DoctorComponent},
  {path:"**",component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
