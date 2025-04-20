import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs-in-ng',
  standalone: true,
  imports: [],
  templateUrl: './inputs-in-ng.component.html',
  styleUrl: './inputs-in-ng.component.scss'
})
export class InputsInNgComponent {
  name=""
  enteredName=""
  getName(event:Event){
    const name = (event.target as HTMLInputElement).value //since event target or value can be null
    // console.log(name) //this is a local variable
    this.name = name //this is a instance variable setting
  }

  displayName() {
    this.enteredName = this.name
  }
}
