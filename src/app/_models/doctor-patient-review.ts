import { Patient } from './patient';
import { Doctor } from './doctor';

export class DoctorPatientReview {

    constructor(
        public DoctorId:Number,
        public PatientId:Number,
        public Comment:String,
        public Rating:Number,
        public Patient?:Patient,
        public doctor?:Doctor
        
    )
    {}
}
