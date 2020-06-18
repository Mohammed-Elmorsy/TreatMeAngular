import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Patient } from 'src/app/_models/patient';



@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpclient:HttpClient) { }
  getPatients(){
    return this.httpclient.get<Patient[]>(environment.baseURL+"api/patient");
  }
  
  getPatientById(id)
  {

    return this.httpclient.get<Patient>(environment.baseURL+"api/patient/"+id);


  }

  UpdatePatient(id:Number,_patient:Patient)
  {

    return this.httpclient.put(environment.baseURL+"api/patient/"+id,_patient);





    
  }

  DeletPatient(id:Number)
  {
    return this.httpclient.delete(environment.baseURL+"api/patient/"+id);

  }



  postImage(fileToUpload:File  ,id)
  {


      const formData: FormData = new FormData();
      formData.append('image', fileToUpload, fileToUpload.name);
  
      return this.httpclient.post(environment.baseURL+"api/User/UploadImage/"+id, formData,{headers: {
        'Accept': 'application/json',     
        'Content-Disposition' : 'multipart/form-data'}}).subscribe(
        (data)=>{
          console.log('uploaded  !');
        }
,(err)=>{
console.log(err);
}

      );
    }
  

    getImageUrl(id)
    {
      return this.httpclient.get<String>(environment.baseURL+"api/User/GetImageUrl/"+id);
    }

}
