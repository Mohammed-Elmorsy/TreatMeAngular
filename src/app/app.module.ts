import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
//feature modules
import { HomeModule } from "./home/home.module";
import {DoctorModule} from "./doctor/doctor.module";
import { ScheduleModule } from './schedule/schedule.module';
import {PatientModule} from './patient/patient.module';
//other modules
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { TranslateModule , TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
//components
import { AppComponent } from './app.component';
import { DoctorProfileModalComponent } from './doctor/components/doctor-profile-modal/doctor-profile-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


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
    HttpClientModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
