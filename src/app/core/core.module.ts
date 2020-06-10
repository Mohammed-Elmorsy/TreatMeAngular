import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";  
//components
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DoctorRegisterComponent } from './components/doctor-register/doctor-register.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { LoginComponent } from './components/login/login.component';
//directives
import { NoWhiteSpaces } from './directives/noWhiteSpaces.directive';
import { ConfirmEqualValidatorDirective } from './directives/confirmEqualValidator.directive';
import { NoStartOrDoubleSpacesDirective } from './directives/noStartOrDoubleSpaces.directive copy';
  

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DoctorRegisterComponent,
    PatientRegisterComponent,
    LoginComponent, 

    NoWhiteSpaces,
    ConfirmEqualValidatorDirective,
    NoStartOrDoubleSpacesDirective 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],  
  exports:[
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DoctorRegisterComponent,
    PatientRegisterComponent,
    LoginComponent

  ]
})
export class CoreModule { }
