import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/components/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { DoctorRegisterComponent } from './core/components/doctor-register/doctor-register.component';
import { PatientRegisterComponent } from './core/components/patient-register/patient-register.component'
import { LoginComponent } from './core/components/login/login.component';
import { LoginGuard } from './core/guards/login.guard';
import { HomeResolver } from './core/resolvers/home.resolver';
import { VideoComponent } from './video/video.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
   

const routes: Routes = [  
  {path:"",redirectTo:"home" ,pathMatch:"full"},
  {path:"home",component:HomeComponent, resolve:{home:HomeResolver}},
  {path:"doctor/register",component:DoctorRegisterComponent, canActivate:[LoginGuard]},
  {path:"patient/register",component:PatientRegisterComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent, canActivate:[LoginGuard]},
  {path:"video",component:VideoComponent},
  {path:"subscriber",component:SubscriberComponent},
  {path:"**",component:PageNotFoundComponent},
 


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
