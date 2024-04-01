import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup, FormControl } from '@angular/forms';

export const minLengthValidator:ValidatorFn= (control:AbstractControl):ValidationErrors | null =>{
    if (control==null){
        return null;
    }
    if (typeof control.value!='string'){
        return null;
    }

    let cadena:string=control.value;
    if (cadena.length<3){
        return{
            minLength:true
        }
    }
    
    return null;
} 