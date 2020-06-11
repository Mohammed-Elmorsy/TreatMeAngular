import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient/patient.service';
import { Patient } from 'src/app/_models/patient';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient:Patient;
  patient_modified:Patient;
  PatientImg:String;
  constructor(private patientservice:PatientService , private toastr:ToastrService,private route:Router) { }


  Patient_modified:Patient;
 
  Update()
  {
    console.log("updated",this.patient_modified);
    console.log(this.patient_modified.user.id);
  
    this.patientservice.UpdatePatient(this.patient_modified.user.id,this.patient_modified)
    .subscribe((res)=>{

            

     this.toastr.success("تم التعديل بنجاح");
  
    },err=>{
      this.toastr.error('نأسف لذلك هناك مشكلة فى عملية تعديل بيانات حسابك','حدث خطأ ما'); 

    })
  
  }

  ngOnInit() {

    let url=window.location.href;
    let PatientId = url.substring(url.lastIndexOf('/') + 1);
      this.patientservice.getPatientById(PatientId).subscribe((_patient)=>{
    this.patient=_patient;
    this.patient_modified=_patient;

    this.PatientImg="../../assets/images/patients/"+this.patient_modified.user.id+".jpg";



    console.log(_patient);


    })
  }


}
