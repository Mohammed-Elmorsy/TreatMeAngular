import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector:'[noWhiteSpaces]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:NoWhiteSpaces,
        multi:true
    }]
})

export class NoWhiteSpaces implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {

        let word = control.value;
        if(word){
            for (let i = 0; i < word.length; i++) {
                if(word[i] === ' ')  
                    return {'hasWhiteSpace':true}          
            }
        }
        
        return null;
    }

}