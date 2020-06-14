import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Patient } from 'src/app/_models/patient';
import { Doctor } from 'src/app/_models/doctor';
import { LoginCredentials } from 'src/app/_models/loginCredentials';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private router: Router) { }

  //------------------------------------methods----------------------------------------
    //register
    registerPatientUser(patient:Patient){
      return this.httpClient.post<Patient>(environment.baseURL+'api/user/create',patient)
    }

    registerDoctorUser(doctor:Doctor){
      return this.httpClient.post<Doctor>(environment.baseURL+'api/user/create',doctor)
    }

    //login
    loginUser(loginCredentials:LoginCredentials){
      return this.httpClient.post<any>(environment.baseURL+'api/user/login',loginCredentials)
    }

    //JWT Token
    isLoggedIn(){     
      const token = localStorage.getItem('token');
      return !!token
    }

    getAccessToken(){
      return localStorage.getItem('token');
    }

    getUserPayLoad(){
      let token = this.getAccessToken();
      if (token) {
          let userPayload = atob(token.split('.')[1]);
          // console.log(userPayload);
          return JSON.parse(userPayload);
      }else{
        return "null";
      }
    } 
  
    navigateByRole(){
      let role = this.getUserPayLoad().role;
      console.log(role);
      switch(role){
        case "Doctor":
          return "/doctor/profile";  
          break;
        case "Patient":  
          return "/patient/profile";      
          break;
        case "Admin":  
          return "/admin/profile";
          break;
        default:
          return "/";
      }
    }

    logout(){
      //just remove the access token and redirect
      console.log("user logged out successfully");
      localStorage.removeItem('token');   
      this.router.navigate(["/login"]);
  
    }



}
