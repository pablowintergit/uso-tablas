import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export const passwordMatchValidator:ValidatorFn=(control:AbstractControl):ValidationErrors | null=> {
    if (control==null){
        return null;
    }
    
    console.log(control);

    let fg:FormGroup=control.parent as FormGroup;
    
    if (fg==null){
        return null;
    }
    
    let password=fg.get('password');
    let repeatPassword=fg.get('repeatPassword');

    if (!password || !repeatPassword){
        return null;
    }

    return password.value === repeatPassword.value ? null : { passwordNoMatch: true };

}