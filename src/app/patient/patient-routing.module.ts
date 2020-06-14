import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './compnents/patient/patient.component';
import { PatientProfileGuard } from '../core/guards/patient-profile.guard';


const routes: Routes = [
  {path:"patient/profile",component:PatientComponent, canActivate:[PatientProfileGuard]},



];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
