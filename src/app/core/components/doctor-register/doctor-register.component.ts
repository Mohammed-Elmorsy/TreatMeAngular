import { ToastrService } from 'ngx-toastr';
import { Component, OnInit} from '@angular/core';
import { Doctor } from 'src/app/_models/doctor';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Speciality } from 'src/app/_models/speciality';
import { SpecialityService } from '../../services/speciality/speciality.service';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  private specialities:Speciality[];

  private doctor:Doctor;
  constructor(private authService:AuthService, private router:Router ,
    private toastr:ToastrService , private specialityService:SpecialityService) { 
    this.doctor = {
      userId:null,  
      fees:200,
      rating:4,   
      title:'',    
      CV:null,  
      specialityId:null,  
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
        role:1,
        image:''
      },
    }
  }
  
  ngOnInit() {
    this.specialityService.getSpecialities().subscribe(res =>{
      this.specialities = res; 
    }) 

  }

  onSubmit(){
    this.authService.registerDoctorUser(this.doctor)
    .subscribe(
      res =>{
        console.log(res);
        //alert("You have registered successfully! ..please wait to confirm your acount");
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
