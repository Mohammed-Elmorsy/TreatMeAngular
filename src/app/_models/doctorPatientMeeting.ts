import { Doctor } from './doctor';
import { Patient } from './patient';
import { Schedule } from './schedule';

export class doctorPatientMeeting {
    constructor(

      
       public ScheduleId:Number, 
       public DoctorId :Number,
       public PatientId:Number,
       public doctor:Doctor,
       public patient:Patient,
       public schedule:Schedule

    ){

    }
}
