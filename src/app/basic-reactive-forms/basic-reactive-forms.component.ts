import { Component } from '@angular/core';
import { FormControl, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './basic-reactive-forms.component.html',
  styleUrl: './basic-reactive-forms.component.scss'
})
export class BasicReactiveFormsComponent {
  //need to import Reactive Forms Module & import form control a feature of forms to have
  // name property having form control features & bind it using [formControl]="name" i.e, the property name
  name = new FormControl('default user') //input param is the default value to set 
  password = new FormControl('default password') //this is binded one way & always will have the typed value

  // to check whether this input has a value or not
  displayValue(){
    console.log(this.name.value, this.password.value)
  }
  //setting values on event click, useful for large forms
  resetValue(){
    this.name.setValue('hello')
    this.password.setValue('world')
  }

  //with reactive form grouping you can have one FormControl & access items using keys,
  //better readability, organised, one place to apply validation & error handling

}
