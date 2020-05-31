import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { DoctorRoutingModule } from './doctor-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
