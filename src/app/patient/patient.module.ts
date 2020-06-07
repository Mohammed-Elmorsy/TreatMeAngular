import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './compnents/patient/patient.component';


@NgModule({
  declarations: [PatientComponent],
  imports: [
    SharedModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
