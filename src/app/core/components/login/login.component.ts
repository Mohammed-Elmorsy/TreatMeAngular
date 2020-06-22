import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginCredentials } from 'src/app/_models/loginCredentials';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('form',null) loginForm:NgForm;
  @ViewChild('btn',null) submitBtn:NgModel;
  submitBtnClicked:number = 0;


  pictureName:string="patient";
  
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
        console.log(res);
      if(res.confirmed == true)  //then he is a doctor and check if the doctor is confirmed by admin
      {
        localStorage.setItem('token',res.user.token);
        this.toastr.success('تم تسجيل دخولك بنجاح');
        let profileRoute:string = this.authService.navigateByRole();
        this.router.navigate([profileRoute]);
      }
      else if(res.role == 2 || res.role == 3)  //in case of patient or admin
      {
        localStorage.setItem('token',res.token); 
        this.toastr.success('تم تسجيل دخولك بنجاح');
        let profileRoute:string = this.authService.navigateByRole();
        this.router.navigate([profileRoute]);
      }
      else
      {
        this.toastr.warning('لم يتم تأكيد حسابك بعد');
        this.router.navigate(['/home']); 
      }


    },
    err=>{
      if(err.status == 400){
        this.toastr.error('اسم المستخدم او كلمة المرور غير صحيح');
/*         this.loginForm.resetForm();  
        this.loginForm.getControl(this.submitBtn).enable();  
        if(this.countClicks() > 5){
          this.loginForm.getControl(this.submitBtn).disable();
          console.log(this.submitBtnClicked);
          this.toastr.error('اذا كنت نسيت كلمة المرور يمكنك الضغط على اللينك بالاسفل')
        } */
      }
      else
      {
        console.log(err);  
        this.toastr.error('حدث خطأ فى عملية تسجيل الدخول من فضلك تحدث مع المسئول عن السيرفر');
        
      }

    }
    )
  }//end of onSubmit()

  countClicks():number{
      return this.submitBtnClicked++;
  }
  
  
  

}
