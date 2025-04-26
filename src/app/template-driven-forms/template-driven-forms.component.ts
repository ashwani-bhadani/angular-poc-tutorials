import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {

  userDetails:any;

  addDetails(val:NgForm){ // add details to your form 
    console.log(val) //will be called in submit of form using (ngSubmit)
    this.userDetails=val.value
  }

  //how to apply validations in template driven forms. Types:
  //validation on required fields, min & max length, email, drop-down
  //display message on validation, disable button if any input is missing

}
