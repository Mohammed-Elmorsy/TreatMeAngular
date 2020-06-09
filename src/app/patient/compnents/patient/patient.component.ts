import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient/patient.service';
import { Patient } from 'src/app/_models/patient';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private patientservice:PatientService) { }
  patients:Patient;




  ngOnInit() {
console.log('test run')
    this.patientservice.getPatientById(2).subscribe((data)=>{
    console.log(data);

    })
  }

}
