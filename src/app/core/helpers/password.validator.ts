import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Patterns } from "../constants";

export function PasswordValidator(): ValidatorFn {
    return (control:AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if(!value){
            return null;
        }
        const patternRegex = new RegExp(Patterns.password);
        if(!patternRegex.test(value)){
            return { invalidPassword: true};
        }
    }
}