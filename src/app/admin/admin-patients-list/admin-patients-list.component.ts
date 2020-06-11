import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient/patient.service';
import { Patient } from 'src/app/_models/patient';

@Component({
  selector: 'app-admin-patients-list',
  templateUrl: './admin-patients-list.component.html',
  styleUrls: ['./admin-patients-list.component.css']
})
export class AdminPatientsListComponent implements OnInit {
  
  private patients:Patient[];

  constructor(private patientService:PatientService) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe(res=>{
      this.patients = res;
    })
  }

}
