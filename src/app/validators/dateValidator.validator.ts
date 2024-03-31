import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"
import moment, { Moment } from "moment";

/*
📌 Este metodo valida que la fecha ingresada no sea mayor a la actual
y al menos sea 4 años menor a la actual. 
*/
export const dateValidator:ValidatorFn= (control:AbstractControl):ValidationErrors | null =>{
    if (control==null ||  !(control.value instanceof Date) ){
        return null;
    }
    
    const errors:ValidationErrors={};

    const now= moment();

    const dateToEval = moment(control.value);

    // Comparar las fechas
    if (dateToEval.isAfter(now)) {
        errors["dateOverflow"]=true;   
    }

    let diff:number=now.diff(dateToEval,"years");

    if (diff>4){
        errors["yearsOverflow"]=true;   
    }

    return Object.keys(errors).length !== 0 ? errors : null;
    
} 