import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Patient } from 'src/app/_models/patient';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  patient:Patient={};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
     
  }

}
