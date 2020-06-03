import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from "./home/home.module";
import {DoctorModule} from "./doctor/doctor.module";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScheduleComponent } from './featuers/schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ScheduleComponent,
    
  ],
  imports: [
    BrowserModule, //always the first one
    CoreModule,
    HomeModule,
    DoctorModule,
    HttpClientModule,

    AppRoutingModule //always the last one
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
