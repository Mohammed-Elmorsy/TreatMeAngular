import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AdminService } from 'src/app/core/services/Admin/admin.service';
import { User } from 'src/app/_models/user';
import { FileUploadService } from 'src/app/core/services/FileUpload/file-upload.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AdminDoctorsRequestsComponent } from '../admin-doctors-requests/admin-doctors-requests.component';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  admin:User;
  requestsNumber:number;

  fieToUpload:File;
  imageFromApi:String;

  constructor(private authService:AuthService,private adminservice:AdminService
    ,private toastr:ToastrService,private fileUploadservice:FileUploadService) { }

  ngOnInit() {
      let AdminId = this.authService.getUserPayLoad().id;

      this.adminservice.getAdminById(AdminId).subscribe((_admin)=>{

        this.admin=_admin;

        if(this.admin.imageName != null)
        {
          this.imageFromApi=environment.baseURL+"images/"+this.admin.imageName;


        }
        console.log(this.admin);


      })

  }


  handleFileInput(files:FileList)
  {
    this.fieToUpload=files.item(0);
    this.fileUploadservice.postImage(this.fieToUpload,this.admin.id).subscribe(
      ()=>{


        this.toastr.info("photo Uploaded")


      this.adminservice.getAdminById(this.admin.id).subscribe((_admin)=>{
    this.admin=_admin;


    this.imageFromApi=environment.baseURL+"images/"+this.admin.imageName;
    console.log(environment.baseURL+"images/"+this.admin.imageName);
      })






})
}
}