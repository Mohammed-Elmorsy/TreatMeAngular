export class Schedule {
    constructor(

       public Id:Number,
       public date:Date, 
       public startTime:Date,
       public endTime:Date,
       public IsBooked:Boolean,
       public DoctorId :Number
    ){

    }
}
