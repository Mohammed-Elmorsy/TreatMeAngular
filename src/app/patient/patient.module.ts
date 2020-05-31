import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PatientRoutingModule } from './patient-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
