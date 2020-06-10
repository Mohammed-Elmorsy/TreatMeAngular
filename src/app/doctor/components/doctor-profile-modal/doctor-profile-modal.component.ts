import { Component, OnInit, NgModule } from '@angular/core';
import {NgbActiveModal  } from "@ng-bootstrap/ng-bootstrap";
import { Doctor } from 'src/app/_models/doctor';
@Component({
  selector: 'app-doctor-profile-modal',
  templateUrl: './doctor-profile-modal.component.html',
  styleUrls: ['./doctor-profile-modal.component.css']
})
export class DoctorProfileModalComponent implements OnInit {

  doctor:Doctor
  constructor(public modal:NgbActiveModal) { }

  ngOnInit() {
    console.log(this.doctor);
    
  }

}
