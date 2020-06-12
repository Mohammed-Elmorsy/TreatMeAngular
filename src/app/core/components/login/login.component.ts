import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from 'src/app/_models/loginCredentials';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pictureName:string="patient"

  private loginCredentials:LoginCredentials;

  constructor(private authService:AuthService, private router:Router,
    private toastr:ToastrService) 
    { 
    this.loginCredentials = {
      userName:'',
      password:''
    }

  }  

  ngOnInit() {
    
  }

  onSubmit(){
    this.authService.loginUser(this.loginCredentials).subscribe(
      res=>{
      localStorage.setItem('token',res.token);
      this.toastr.success('تم تسجيل دخولك بنجاح')
      let profileRoute:string = this.authService.navigateByRole();
      this.router.navigate([profileRoute]);
      
      

    },
    err=>{
      if(err.status == 400){
        this.toastr.error('اسم المستخدم او كلمة المرور غير صحيح');
        this.router.navigate(['/login']);
      }
      else
      {
        console.log(err);  
        this.toastr.error('حدث خطأ فى عملية تسجيل الدخول من فضلك تحدث مع المسئول عن السيرفر');
        this.router.navigate(['/login']);
      }

    }
    )
  }
  
  
  

}
