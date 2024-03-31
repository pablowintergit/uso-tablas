import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"


/*
📌 Podria hbbar usado directamente Validators.pattern, es solo a fines ilustrativos
*/
export const onlyLettersValidator:ValidatorFn= (control:AbstractControl):ValidationErrors | null =>{
    if (control==null ||  typeof control.value!='string' ){
        return null;
    }
    
    let cadena:string=control.value;
    
    if (cadena.length===0){
        return null;
    }
    
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(cadena)){
        return{
            onlyLetters:true
        }
    }

    return null;
} 