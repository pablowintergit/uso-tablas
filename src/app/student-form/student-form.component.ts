import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
    studentForm:FormGroup;

    constructor(private formBuilder:FormBuilder){
      this.studentForm=this.formBuilder.group({
        name:this.formBuilder.control(''),
        lastName:this.formBuilder.control(''),
        birthDate:this.formBuilder.control(''),
        email:this.formBuilder.control('',
        [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
        Validators.required]),
        adreess:this.formBuilder.control(''),
        password:this.formBuilder.control(''),
        repeatPassword:this.formBuilder.control('')
      });
    }

    onSubmit():void{
      //alert(JSON.stringify(this.studentForm.value))
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
