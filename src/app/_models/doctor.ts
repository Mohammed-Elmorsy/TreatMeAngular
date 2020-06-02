export class Doctor {
    constructor(
       public id:Number,       
       public name:String,
       public age:Number,
       public address:String,
       public speciality:String,
       public gender:Number,
       public phoneNumber:Number,
       public duration:Number,
       public fees:Number,
       public rating:Number,
       public Image:Int32Array,
       public CV:Int32Array,
       public mail:String
    )
    {}
}