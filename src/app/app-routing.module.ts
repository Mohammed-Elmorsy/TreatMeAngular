import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { DoctorComponent } from './doctor/doctor-profile/doctor.component';
import {ScheduleComponent} from './featuers/schedule/schedule.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { from } from 'rxjs';
import { Schedule } from './_models/schedule';


const routes: Routes = [
  {path:"",redirectTo:"home" ,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"ss",component:ScheduleComponent},
  {path:"**",component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
