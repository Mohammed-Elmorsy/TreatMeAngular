import { Component, OnInit, Output } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient/patient.service';
import { Patient } from 'src/app/_models/patient';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { EventEmitter } from '@angular/core';
import { FileUploadService } from 'src/app/core/services/FileUpload/file-upload.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient:Patient;
  patient_modified:Patient;
  PatientImg:String;


  private fieToUpload:File=null;
  constructor(private patientservice:PatientService , private toastr:ToastrService,private route:Router,private http:HttpClient,private fileupload:FileUploadService) { 

    this.patient={user:{}}
  }

defulatImage:String='../../assets/images/doctors/profile-pic.png';
  Patient_modified:Patient;
  imageFromApi:String;



//file Code
 

 /*
public UploadFile = (files) => {

  if(files.length === 0)
  {
    return;
  }
  let FileToUpload=<File>files[0];
  const formData=new FormData();
  formData.append('file',FileToUpload,FileToUpload.name);
  this.http.post(environment.baseURL+"api/user/UploadImage/"+this.patient.user.id,formData,{reportProgress:true,observe:'events'})
  .subscribe(event=>{

    if(event.type === HttpEventType.UploadProgress){
      this.progress=Math.round(100 * event.loaded/event.total);

    }
    else if(event.type === HttpEventType.Response)
    {
      this.message="uploaded Success. ";
      this.onUploadFinished.emit(event.body);
      
    }
  })

}
*/



uploadFile()
{
  
}
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

        if(this.patient.user.imageName !="")
        {
          this.imageFromApi=environment.baseURL+"images/"+this.patient.user.imageName;
        }


        console.log(_patient);


    })
  
  }
  handleFileInput(files:FileList)
  {
    this.fieToUpload=files.item(0);
    this.fileupload.postImage(this.fieToUpload,this.patient.user.id).subscribe(
      ()=>{



        let url=window.location.href;
    let PatientId = url.substring(url.lastIndexOf('/') + 1);
      this.patientservice.getPatientById(PatientId).subscribe((_patient)=>{
    this.patient=_patient;


    this.imageFromApi=environment.baseURL+"images/"+this.patient.user.imageName;
    console.log(environment.baseURL+"images/"+this.patient.user.imageName);
      })



      

      }
,(err)=>{
console.log(err);
}

    );;
  }

}

