import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Patient } from 'src/app/_models/patient';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
  
@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  private patient:Patient;

  constructor(private authService:AuthService, private router:Router ,
    private toastr:ToastrService) { 
    this.patient = {
      userId:null,
      bloodType:null,    
      user:{
        firstName: '',
        lastName:'', 
        userName:'',  
        age:null,  
        address:'',
        gender:null,
        phoneNumber:null,
        mail:'',
        password:'',
        role:2,
        image:''
      }
    }  
  }
  
  ngOnInit() {
  }

  OnSelectedFile(event)
  {
  }
  onSubmit(){
    this.authService.registerPatientUser(this.patient)
    .subscribe(
      res =>{
        console.log(res);
        //alert("You have registered successfully! .. /nplease wait to confirm your acount");
        this.toastr.success('لقد تم تسجيل حسابك بنجاح','مرحبا بك');  

        this.router.navigate(["/"]);

      },
      err => {
        console.log(err);
        //alert("there are some errors during registeration!");
        this.toastr.error('نأسف لذلك هناك مشكلة فى عملية تسجيل حسابك','حدث خطأ ما'); 
      }
    )
  }


}
