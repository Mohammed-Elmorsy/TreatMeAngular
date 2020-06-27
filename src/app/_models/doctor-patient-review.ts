import { Patient } from './patient';
import { Doctor } from './doctor';

export class DoctorPatientReview {

    constructor(
        public doctorId:Number,
        public patientId:Number,
        public comment:String,
        public rating:Number,
        public patient?:Patient,
        public doctor?:Doctor,
        public doctorFeedback?:String
        
    )
    {}
}
