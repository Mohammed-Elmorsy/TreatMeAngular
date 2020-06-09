import { Component, OnInit} from '@angular/core';
import { Doctor } from 'src/app/_models/doctor';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  private doctor:Doctor;
  constructor() { 
    this.doctor = {
      userId:null,
      fees:null,
      rating:null,
      CV:null,  
      specialityId:null,  
      user:{
        id:null,
        firstName: '',
        lastName:'', 
        userName:'',   
        age:null,
        address:'',
        gender:null,
        phoneNumber:null,
        mail:'',
        password:'',
        role:'',
        image:''
      },
    }
  }
  
  ngOnInit() {

  }



}
