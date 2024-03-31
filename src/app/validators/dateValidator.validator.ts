import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

/*
📌 Este metodo valida que la fecha ingresada no sea mayor a la actual
y al menos sea 4 años menor a la actual. 
*/
export const dateValidator:ValidatorFn= (control:AbstractControl):ValidationErrors | null =>{
    if (control==null ||  !(control.value instanceof Date) ){
        return null;
    }
    



    /* let cadena:string=control.value;
    
    if (cadena.length===0){
        return null;
    }
    
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(cadena)){
        return{
            onlyLetters:true
        }
    } */

    return null;
} 