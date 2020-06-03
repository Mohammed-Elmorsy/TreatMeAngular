export class Schedule {
    constructor(

       public Id:Number,
       public date:Date, 
       public StartTime:Date,
       public EndTime:Date,
       public IsBooked:Boolean,
       public DoctorId :Number
    ){

    }
}
