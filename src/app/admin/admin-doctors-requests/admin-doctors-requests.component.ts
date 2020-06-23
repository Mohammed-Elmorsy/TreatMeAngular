import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorService } from 'src/app/core/services/doctor/doctor.service';
import { Doctor } from 'src/app/_models/doctor';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-doctors-requests',
  templateUrl: './admin-doctors-requests.component.html',
  styleUrls: ['./admin-doctors-requests.component.css']
})
export class AdminDoctorsRequestsComponent implements OnInit {

  @Output() requestsChanged:EventEmitter<number> = new EventEmitter<number>();
  // This method raises the custom event
  onDoctorsRequestsChange() {
    this.requestsChanged 
        .emit(this.doctorsRequests.length);  
}

  doctorsRequests:Doctor[];
  doctor_modified:Doctor=new  Doctor(1000,{id:0,name:""},{id:1000,firstName:"",lastName:"",role:1,gender:1,userName:"",password:""});
  doctor_ForOperation:Doctor=new  Doctor(1000,{id:0,name:""},{id:1000,firstName:"",lastName:"",role:1,gender:1,userName:"",password:""});

  Specialities:any;
  DocImg:String;
  DoctorImage:String;

  constructor(private doctorService:DoctorService,private toastr:ToastrService) { }

  ngOnInit() {

    this.doctorService.getDoctorsRequests().subscribe(res =>{
      this.doctorsRequests = res;
      this.onDoctorsRequestsChange();          
    })
  }

  SelectDoctorToDelete(_doctor:Doctor)  
  {

    this.doctor_ForOperation=_doctor;
    this.DocImg="../../assets/images/doctors/profile-pic.png";
    if(this.doctor_ForOperation.user.imageName != null)
    {
      this.DoctorImage=environment.baseURL+"images/"+this.doctor_ForOperation.user.imageName;
    }

  }

  confirmRequest(_doctor:Doctor)
  {
    this.doctor_modified=_doctor;
    this.doctor_modified.confirmed = true;  

    console.log(_doctor);   
    console.log(this.doctor_modified);
    console.log(this.doctor_modified.user.id); 
    this.doctorService.UpdateDoctor(this.doctor_modified.user.id,this.doctor_modified)
    .subscribe(()=>{
      this.doctorsRequests.splice(this.doctorsRequests.indexOf(this.doctor_modified),1);
      this.onDoctorsRequestsChange();
      this.toastr.success("تم تأكيد تسجيل الطبيب بنجاح");
      



    }),(err)=>{
      console.log(err);

      this.toastr.success("حدثت مشكلة ما")


    }
  }
  
  DeleteDoctor()
  {
   
    this.doctorService.DeleteDoctor(this.doctor_ForOperation.userId).subscribe(()=>{
            
    this.doctorsRequests.splice(this.doctorsRequests.indexOf(this.doctor_ForOperation),1);
    this.onDoctorsRequestsChange();
    this.toastr.success("تم حذف الطبيب بنجاح");

  }),(err)=>{
    console.log(err);

    this.toastr.success("حدثت مشكلة ما")



    }
  }  
}
