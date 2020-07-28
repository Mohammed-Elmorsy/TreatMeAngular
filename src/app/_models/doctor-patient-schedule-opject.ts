import { Schedule } from './schedule';
import { Doctor } from './doctor';
import { Patient } from './patient';

export class DoctorPatientScheduleOpject {

    constructor(

        public DoctorId?:Number,
        public Doctor?:Doctor,
        public PatientId?:Number,

        public Patient?:Patient,
        public ScheduleId?:Number,

        public schedule?:Schedule

 
     ){
 
     }
}
