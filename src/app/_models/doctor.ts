import { User } from './user';
import { Speciality } from './speciality';
import { Form } from '@angular/forms';

export class Doctor {
    constructor(
        public specialityId?:number,
        public speciality?:Speciality,
        public user?:User,
        public userId?:Number,       
        public fees?:Number,
        public rating?:Number,
        public  CV?:File,
        public title?:string,
        public titleDescription?:string,
        public confirmed?:boolean

    )
    {}
}