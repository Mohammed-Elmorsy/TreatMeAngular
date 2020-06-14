import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient/patient.service';
import { Patient } from 'src/app/_models/patient';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-patients-list',
  templateUrl: './admin-patients-list.component.html',
  styleUrls: ['./admin-patients-list.component.css']
})
export class AdminPatientsListComponent implements OnInit {
  
  private patients:Patient[];
  patientFoOperation:Patient=new Patient({id:0,firstName:"",lastName:"",role:2,userName:"",password:""});



  constructor(private patientService:PatientService,private patientservice:PatientService,private toastr:ToastrService) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe(res=>{
      this.patients = res;
    })
  }

  SelectDoctorToOperation(_patient:Patient)
  {
    this.patientFoOperation=_patient;
    console.log(this.patientFoOperation)
  }

  Update()
  {
    this.patientService.UpdatePatient(this.patientFoOperation.user.id,this.patientFoOperation)
    .subscribe(
      (res)=>{

        this.toastr.success("تم تعديل بيانات المريض بنجاح")

      },
    
    
    
    
    (err)=>{



    })
  }


  DeletePatient()
  {
    console.log(this.patientFoOperation.user.id);
    this.patientservice.DeletPatient(this.patientFoOperation.user.id).subscribe(()=>{
    this.toastr.success(" تم حذف المريض بنجاح")


    },()=>{})
    this.patients.splice(this.patients.indexOf(this.patientFoOperation),1);
  }

}
