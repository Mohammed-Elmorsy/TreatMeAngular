import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient/patient.service';
import { Patient } from 'src/app/_models/patient';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient:Patient;
  patient_modified:Patient;
  constructor(private patientservice:PatientService) { }


  Patient_modified:Patient;
 
  Update()
  {
    console.log("updated",this.patient_modified);
    console.log(this.patient_modified.user.id);
  
    this.patientservice.UpdatePatient(this.patient_modified.user.id,this.patient_modified)
    .subscribe((res)=>{

      alert("        done");

    },err=>{
      console.log('error');
    })
  
  }

  ngOnInit() {

    let url=window.location.href;
    let PatientId = url.substring(url.lastIndexOf('/') + 1);
      this.patientservice.getPatientById(PatientId).subscribe((_patient)=>{
    this.patient=_patient;
    this.patient_modified=_patient;
    console.log(_patient);


    })
  }


}
