
import { ViewContainerRef, Component, ElementRef, AfterViewInit, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';
import * as OT from '@opentok/client';
import { SubscriberComponent } from '../subscriber/subscriber.component';
import { StateService } from '../stateService';
import { Router } from '@angular/router';

import { AuthService } from '../core/services/auth/auth.service';
import { DoctorService } from '../core/services/doctor/doctor.service';
import { PatientService } from '../core/services/patient/patient.service';
import { PatternValidator } from '@angular/forms';
import { Doctor } from '../_models/doctor';
import { Patient } from '../_models/patient';
import { ScheduleService } from '../core/services/schedule/schedule.service';
import { Schedule } from '../_models/schedule';
import { doctorPatientSchedule } from '../_models/doctorPatientSchedule';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewInit, OnInit {
  

@ViewChild('publisherDiv', { static: false }) publisherDiv: ElementRef;
@ViewChild('subscriberHost', { read: ViewContainerRef, static: true }) subscriberHost: ViewContainerRef;
session: OT.Session;
publisher: OT.Publisher;
publishing;
apiKey: string;
token: string;
sessionId: string;
Name:string;
myName:string;
hisName:string;

constructor(private auth:AuthService,
  private componentFactoryResolver: ComponentFactoryResolver,
  private stateService: StateService,
  private doctorService:DoctorService,
  private scheduleService:ScheduleService,
  private patientService:PatientService,
  private router: Router
) { 


}

ngOnInit(): void {
  // this.Name=this.auth.getUserPayLoad().;
  if (!this.stateService.apiKey$ || !this.stateService.token$ || !this.stateService.sessionId$) {
    this.router.navigate(['/']);
  }

  let docId:number;
  this.apiKey = this.stateService.apiKey$;
  this.token = this.stateService.token$;
  this.sessionId = this.stateService.sessionId$;
  let id=this.auth.getUserPayLoad().id;
  let role=this.auth.getUserPayLoad().role;

  let doctor:Doctor;
  let patient:Patient;
  let schedule:doctorPatientSchedule={
    
  };
  var url = window.location.pathname;
  var scheduleId = Number(url.substring(url.lastIndexOf('/') + 1));
  this.scheduleService.getScheduleById(scheduleId).subscribe((a)=>{
    schedule =a;   
    console.log(schedule);
    
   });




  if (role=="Doctor") {

    this.doctorService.getDoctor(id).subscribe((a)=>{
      doctor =a;  

      this.Name=doctor.user.firstName + " "+ doctor.user.lastName; 
     });

     this.scheduleService.getScheduleById(scheduleId).subscribe((a)=>{
 
  
      this.myName="Dr : "+a.doctor.user.firstName + " "+a.doctor.user.lastName;
      this.hisName=a.patient.user.firstName + " "+a.patient.user.lastName;
 
      
     });
  


  }


  else{

    this.patientService.getPatientById(id).subscribe((a)=>{
     
      
      patient =a;  
      this.Name=patient.user.firstName + " "+ patient.user.lastName; 
 
       
  
     });

     this.scheduleService.getScheduleById(scheduleId).subscribe((a)=>{
 
  
      this.hisName="Dr : "+a.doctor.user.firstName + " "+a.doctor.user.lastName;
      this.myName=a.patient.user.firstName + " "+a.patient.user.lastName;
 
      
     });

  }
}


publish() {
  this.session.publish(this.publisher, (err) => {
    if (err) {
      console.log(err)
    }
    else {
      this.publishing = true;
    }
  });
}

onStreamCreated(stream,status:boolean) 
{
  if(status!=false)
  {const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SubscriberComponent);
  const viewContainerRef = this.subscriberHost;
  const componentRef = viewContainerRef.createComponent(componentFactory);
  (<SubscriberComponent>componentRef.instance).stream = stream;
  (<SubscriberComponent>componentRef.instance).session = this.session;
  (<SubscriberComponent>componentRef.instance).subscribe();
}
else{
  stream.getTracks().forEach(function(track) {
    track.stop();
  });
}
}

ngAfterViewInit(): void {
  this.publisher = OT.initPublisher
    (
      this.publisherDiv.nativeElement, {
      height: "100%",
      width: "100%",
      insertMode: 'append'
    });
  this.session = OT.initSession(this.apiKey, this.sessionId);
  this.session.connect(this.token, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log("connected");
      this.publish()
      let that = this;
      this.session.on("streamCreated", function (event) {
        that.onStreamCreated(event.stream,true);
        
      });
    }
  })

  
}
  endMeeting(){
    //destroy session
  var r = confirm("Are you sure you want to end the meeting?");
    if (r==true) {
      this.session.disconnect();

      this.router.navigate(['/home']);
    }
  


  }




}