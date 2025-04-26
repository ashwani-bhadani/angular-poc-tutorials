import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-grouping',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form-grouping.component.html',
  styleUrl: './reactive-form-grouping.component.scss'
})
export class ReactiveFormGroupingComponent {

  //create a form group & add 3 keys inside as an object NOT directly,
  //attach this FormGroup to html form tag & use it, do not forget to add ReactiveFormsModule to .ts file
  profileRegistration = new FormGroup(
    {
      fname:new FormControl("fname", [Validators.required]), 
      //can also set default values, in 2nd param can add validators from Validators mdoule
      lname: new FormControl(''),
      password:new FormControl('',[Validators.minLength(5)]),
      email:new FormControl('',[Validators.maxLength(5), Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')])
      //RFC 5322 email pattern
    }
  )

  onSubmit(){
    console.log("on submit called")
    console.log(this.profileRegistration.value) //now one property can give all keys
    console.log(this.profileRegistration.value.email) //use this directly to print on UI
  }

  setDefaultValues(){
    this.profileRegistration.setValue(
      {
        fname:"anil",
        lname:"sharma",
        password:"pass123",
        email:"anil.sharma@gmail.com"
      }
    )
  }

  //creating getters where get = an accessor method
  get fname() {
    return this.profileRegistration.get('fname')
  }

  get lname() {
    return this.profileRegistration.get('lname')
  }

  get email() {
    return this.profileRegistration.get('email')
  }

  get password(){
    return this.profileRegistration.get('password')
  }

}
