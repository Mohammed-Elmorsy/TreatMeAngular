import { User } from './user';
import { Speciality } from './speciality';

export class Doctor {
    constructor(
        public specialityId?:number,
        public speciality?:Speciality,
        public user?:User,
        public userId?:Number,       
        public fees?:Number,
        public rating?:Number,
        public CV?:Int32Array,
        public title?:string

    )
    {}
}