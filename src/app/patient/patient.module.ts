import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './compnents/patient/patient.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [PatientComponent],
  imports: [
    SharedModule,
    PatientRoutingModule,NgxExtendedPdfViewerModule
    
  ]
})
export class PatientModule { }
