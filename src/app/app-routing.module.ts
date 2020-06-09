import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/components/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { DoctorRegisterComponent } from './core/components/doctor-register/doctor-register.component';
import { PatientRegisterComponent } from './core/components/patient-register/patient-register.component'
import { LoginComponent } from './core/components/login/login.component';
   

const routes: Routes = [  
  {path:"",redirectTo:"home" ,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"doctor/register",component:DoctorRegisterComponent},
  {path:"patient/register",component:PatientRegisterComponent},

  {path:"login",component:LoginComponent},
  {path:"**",component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
