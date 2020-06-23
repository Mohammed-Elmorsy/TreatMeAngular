import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient/patient.service';
import { Patient } from 'src/app/_models/patient';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Url } from 'url';
import { FileUploadService } from 'src/app/core/services/FileUpload/file-upload.service';

@Component({
  selector: 'app-admin-patients-list',
  templateUrl: './admin-patients-list.component.html',
  styleUrls: ['./admin-patients-list.component.css']
})
export class AdminPatientsListComponent implements OnInit {
  
  private patients:Patient[];
  patientImg:String;
  PatientImage:String;
  medical:string;
  patientFoOperation:Patient=new Patient({id:0,firstName:"",lastName:"",role:2,userName:"",password:""});



  constructor(private patientService:PatientService,private patientservice:PatientService,private toastr:ToastrService,private fileserice:FileUploadService) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe(res=>{
      this.patients = res;
      console.log(this.patients);
    })
  }

  SelectDoctorToOperation(_patient:Patient)
  {


    this.patientFoOperation=_patient;
    console.log(this.patientFoOperation);
    this.patientImg="../../assets/images/doctors/profile-pic.png";
    if(this.patientFoOperation.user.imageName != null)
    {
      this.PatientImage=environment.baseURL+"images/"+this.patientFoOperation.user.imageName;
    }
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


SelectpatientForMedical(patient:Patient)
{
  this.patientFoOperation=patient;
  console.log(this.patientFoOperation)
  
  //this.medical=environment.baseURL+"medicalHistory/"+this.patientFoOperation.medicalHstoryName;
  let tab = window.open();
  this.fileserice
    .downloadPDF(this.patientFoOperation)
    .subscribe(data => {
      const fileUrl = URL.createObjectURL(data);
      this.medical=fileUrl;


    });
}

downloadPDF() {
 
}
/*
this.patientFoOperation=patient;
  this.fileupload.getMedicalHistory(this.patientFoOperation)
  .subscribe((res)=>{

    this.medical=res;
    console.log(this.medical)

  }),(err)=>{
    console.log('errooooooooooor',err);
  };
}
*/
}


