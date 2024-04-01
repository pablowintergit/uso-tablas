import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"
import moment, { Moment } from "moment";

/*
📌 Este metodo valida que la fecha ingresada no sea mayor a la actual
y al menos sea 4 años menor a la actual. 
*/
export const dateValidator:ValidatorFn= (control:AbstractControl):ValidationErrors | null =>{
    console.log("dateValidator");
    
    //📌El valor value de control aunque sea fecha viene como string idem javascript
    if (control==null ||  typeof control.value!='string'){
        return null;
    }

    let mili=Date.parse(control.value);

    //📌No es una fecha
    if (isNaN(mili)){
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

    if (diff<5){
        errors["yearsOverflow"]=true;   
    }


    return Object.keys(errors).length !== 0 ? errors : null;
    
} 