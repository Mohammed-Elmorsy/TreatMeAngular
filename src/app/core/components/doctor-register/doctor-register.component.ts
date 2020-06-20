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
  Cv:File=null;

  private doctor:Doctor;
  constructor(private authService:AuthService, private router:Router ,
    private toastr:ToastrService , private specialityService:SpecialityService) { 
    this.doctor = {
      userId:null,  
      fees:200,
      rating:4,   
      title:'',    
      titleDescription:'',       
      CV:null,    
      specialityId:null, 
      confirmed:false,      
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

  handleFileInput(files:FileList)
  {
    this.Cv=files.item(0);
    const formdata:FormData=new FormData();
    formdata.append('cv',this.Cv,this.Cv.name);
    this.doctor.CV=this.Cv;;
console.log(files.item(0));
console.log(this.doctor);
  }

  onSubmit(){
    this.authService.registerDoctorUser(this.doctor)
    .subscribe(
      res =>{
        console.log(res);
        this.toastr.success('لقد تم تسجيل حسابك بنجاح','مرحبا بك'); 
        this.router.navigate(["/"]);

      },  
      err => {
        console.log(err);
        this.toastr.error('نأسف لذلك هناك مشكلة فى عملية تسجيل حسابك','حدث خطأ ما'); 
      }
    )
  }



}
