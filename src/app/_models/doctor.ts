import { User } from './user';

export class Doctor {
    constructor(
        public specialityId:number,
        public user:User,
        public userId?:Number,       
        public fees?:Number,
        public rating?:Number,
        public CV?:Int32Array


    )
    {}
}