import { Component } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  standalone: true,
  imports: [],
  templateUrl: './datatypes.component.html',
  styleUrl: './datatypes.component.scss'
})
export class DatatypesComponent {
  name:string="ashwani bhadani" //this is a property can also have implicit type declaration name = "ashwani" directly

  data:string|number="hello" //defining multiple type for a property
  anyData:any=true //not recommended, use only in places where you're unsure of incoming data type

  updateName() { //parameters are called functional params
    let x =30; //this is a variable, allowed inside functions only in ng class
    this.name = "Hello ashwani"
    this.data = 20 //can use both number & string
    this.anyData = "$50"
    this.sum(10,30) //now input parameters cannot be of 'any' type
  }

  //parameters of sum is implicitly 'any' type, must declare one
  sum(a:number,b:number){
    console.log("Calculating summation")
    console.log(a+b)
  }

}
