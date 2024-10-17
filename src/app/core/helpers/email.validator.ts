import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Patterns } from "../constants";
export function EmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if(!value){
            return null;
        }
        const patternRegex = new RegExp(Patterns.email);
        if(!patternRegex.test(value)){
            return {invalidEmail: true};
        }
    }
}