import { Speciality } from './../../_models/speciality';
import { Component, OnInit } from '@angular/core';
import { SpecialityService } from 'src/app/core/services/speciality/speciality.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-admin-specialities-list',
  templateUrl: './admin-specialities-list.component.html',
  styleUrls: ['./admin-specialities-list.component.css']
})
export class AdminSpecialitiesListComponent implements OnInit {

  private specialities:Speciality[];
  private SpecialityForOperation:Speciality;

  constructor(private specialityService:SpecialityService,private toaster:ToastrService) { 

    this.SpecialityForOperation={id:0,name:""};
  }



  selectSpecialityForOperation(_speciality)
  {
    this.SpecialityForOperation=_speciality;
  }


  ngOnInit() {
    this.specialityService.getSpecialities().subscribe(res=>{
      this.specialities = res;
    })
  }
  AddSpeciality(){
    console.log(this.SpecialityForOperation);
    this.specialityService.AddSpeciality(this.SpecialityForOperation)
    .subscribe((res)=>{

         this.toaster.success("تم إضافة التخصص بنجاح");
         this.specialityService.getSpecialities().subscribe(res=>{  //Update Soecialities
          this.specialities = res;})


    },
  
    (err)=>{})
  }
    

  DeleteSpeciality()
  {
    this.specialityService.DeleteSpeciality(this.SpecialityForOperation.id).subscribe(()=>{

     this.toaster.success("تم حذف التخصص بنجاح");
     this.specialities.splice(this.specialities.indexOf(this.SpecialityForOperation),1)

    })
  }

}
