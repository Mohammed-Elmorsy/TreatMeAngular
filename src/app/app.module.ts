import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
//feature modules
import { HomeModule } from "./home/home.module";
import {DoctorModule} from "./doctor/doctor.module";
import { ScheduleModule } from './schedule/schedule.module';
import {PatientModule} from './patient/patient.module';
import { AdminModule } from './admin/admin.module';
//other modules
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { TranslateModule , TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";  
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
//components
import { AppComponent } from './app.component';
import { DoctorProfileModalComponent } from './doctor/components/doctor-profile-modal/doctor-profile-modal.component';
//interceptor providers
import { HttpInterceptorProviders } from './core/interceptors';


@NgModule({
  declarations: [ //components
    AppComponent

  ],
  entryComponents:[DoctorProfileModalComponent],
  imports: [ //modules
    BrowserModule, //always the first one
    CoreModule,
    HomeModule,
    DoctorModule,
    ScheduleModule,
    PatientModule,
    AdminModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:4000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    NgbModalModule,
   
    
    TranslateModule.forRoot({
      defaultLanguage: 'en' ,
      loader:{
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory ,
        deps: [HttpClient]
      }
    }),

    AppRoutingModule //always the last one
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
