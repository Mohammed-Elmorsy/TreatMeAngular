import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  docImg:string;
  rating:number;
  constructor() { }

  ngOnInit() {
  
  let url=window.location.href;
  let docId = url.substring(url.lastIndexOf('/') + 1);
  console.log(docId);
  this.docImg="../../assets/images/doctors/"+docId+".jpg";
  console.log(this.docImg);

  }
 
}
