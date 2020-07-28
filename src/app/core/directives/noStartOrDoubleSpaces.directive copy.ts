import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector:'[noStartOrDoubleSpaces]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:NoStartOrDoubleSpacesDirective,
        multi:true
    }]
})

export class NoStartOrDoubleSpacesDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {

        let word = control.value;

        if(word){

            if(word[0] === ' ') return {'startsWithSpace':true}

            for (let i = 0; i < word.length; i++) {
                if(word[i] === ' ' && word[i+1] === ' ')  
                    return {'hasDoubleSpace':true}          
            }
        }
        
        return null;
    }

}