export class Schedule {
    constructor(

      
       public date?:Date, 
       public startTime?:Date,
       public endTime?:Date,
       public IsBooked?:Boolean,
       public DoctorId? :Number,
       public Id?:Number

    ){

    }
}
