import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../../core/services/doctor/doctor.service';

import { Doctor } from 'src/app/_models/doctor';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-doctors-list',
  templateUrl: './admin-doctors-list.component.html',
  styleUrls: ['./admin-doctors-list.component.css']
})
export class AdminDoctorsListComponent implements OnInit {

   doctors:Doctor[]=[new Doctor(1000,{id:0,name:""},{id:1000,firstName:"",lastName:"",role:1,gender:1,userName:"",password:""})];
  doctor_modified:Doctor=new  Doctor(1000,{id:0,name:""},{id:1000,firstName:"",lastName:"",role:1,gender:1,userName:"",password:""});
  doctor_ForOperation:Doctor=new  Doctor(1000,{id:0,name:""},{id:1000,firstName:"",lastName:"",role:1,gender:1,userName:"",password:""});

  Specialities:any;
  constructor(private doctorService:DoctorService,private toastr:ToastrService) { }


  
  ngOnInit() {
    this.doctorService.getDoctors().subscribe(res =>{
       this.doctors = res;
       console.log(this.doctors);
       this.doctorService.getSpecialities().subscribe((res)=>{
         this.Specialities=res;

       });

    })
       
  }


  //get selected pbject to bind it in modal form and to send to api after editing
  SelectDoctorToEdit(_doctor:Doctor)
  {
    this.doctor_modified=_doctor;
  }
  SelectDoctorToDelete(_doctor:Doctor)
  {
    this.doctor_ForOperation=_doctor;
  }



  Update()
  {
    console.log(this.doctor_modified)
    this.doctorService.UpdateDoctor(this.doctor_modified.user.id,this.doctor_modified)
    .subscribe(()=>{
      this.toastr.success("تم تعديل بيانات الطبيب بنجاح");
      



    }),(err)=>{
      console.log(err);

      this.toastr.success("حدثت مشكلة ما")


    }
  }


  DeleteDoctor()
  {
   
    this.doctorService.DeleteDoctor(this.doctor_ForOperation.userId).subscribe(()=>{
       this.toastr.success("تم حذف الطبيب بنجاح");
       


  }),(err)=>{
    console.log(err);

    this.toastr.success("حدثت مشكلة ما")



    }
  }  

}
