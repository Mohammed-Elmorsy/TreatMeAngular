import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Patient } from 'src/app/_models/patient';
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpclient:HttpClient) { 

  }

  
  postImage(fileToUpload:File  ,id)
  {


      const formData: FormData = new FormData();
      formData.append('image', fileToUpload, fileToUpload.name);
  
      return this.httpclient.post(environment.baseURL+"api/User/UploadImage/"+id, formData,{headers: {
        'Accept': 'application/json',     
        'Content-Disposition' : 'multipart/form-data'}})
    }

    PostMedicalHistory(MedicalFile:File,id)
    {

      const formdata:FormData=new FormData();
      formdata.append('medicalHistory',MedicalFile,MedicalFile.name);

      return this.httpclient.post(environment.baseURL+"api/Patient/"+id,formdata,{headers:{
        'Accept': 'application/json',     
        'Content-Disposition' : 'multipart/form-data'
      }})

    }


    getMedicalHistory(patient:Patient)
    {
      return this.httpclient.get<File>(environment.baseURL+"medicalHistory/"+patient.medicalHstoryName)
    }
    downloadPDF(patient):any{
      return this.httpclient.get(environment.baseURL+"medicalHistory/"+patient.medicalHstoryName, { responseType: 'arraybuffer'}).pipe(map
      
      
      (res => {
        return new Blob([res], { type: 'application/pdf' });
    }));
  
    }


}
