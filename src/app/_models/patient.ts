import { User } from './user';

export class Patient {
    constructor(
       public user:User,
       public bloodType:Number,
       public userId?:Number

       
    )
    {}
}
