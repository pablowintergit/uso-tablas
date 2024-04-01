import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { minLengthValidator } from '../validators/minLengthValidator.validator';
import { onlyLettersValidator } from '../validators/onlyLettersValidator.validator';
import { dateValidator } from '../validators/dateValidator.validator';
import { passwordMatchValidator } from '../validators/passwordMatch.validator';




@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
    studentForm:FormGroup;

    constructor(private formBuilder:FormBuilder){
      this.studentForm=this.formBuilder.group({
        //📌 minLengthValidator=> ya existe una funcion en angular que hace lo mismo mejor
        //solo a fines ilustrativos ya que la actividad requeria de custom validators
        name:this.formBuilder.control('',[Validators.required,minLengthValidator,onlyLettersValidator]),
        lastName:this.formBuilder.control('',[Validators.required,minLengthValidator,onlyLettersValidator]),
        birthDate:this.formBuilder.control('',[Validators.required,dateValidator]),
        email:this.formBuilder.control('',
        [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
        Validators.required]),
        adreess:this.formBuilder.control('',[Validators.required,minLengthValidator]),
        password:this.formBuilder.control('',[Validators.required,Validators.minLength(4)]),
        repeatPassword:this.formBuilder.control('',[Validators.required,passwordMatchValidator])
      });
    }

    onSubmit():void{
      if (this.studentForm.valid){
        Swal.fire({
          title:"El alumno se guardo con exito",
          icon:"success"
        });
      }else{
        this.studentForm.markAllAsTouched();
      }
    }

    get nameControl() {
      return this.studentForm.get('name');
    }

    get lastNameControl() {
      return this.studentForm.get('lastName');
    }

    get birthDateControl(){
      return this.studentForm.get('birthDate');
    }

    get emailControl(){
      return this.studentForm.get('email');
    }

    get adreessControl(){
      return this.studentForm.get('adreess');
    }

    get passwordControl(){
      return this.studentForm.get('password');
    }

    get repeatPasswordControl(){
      return this.studentForm.get('repeatPassword');
    }

}
