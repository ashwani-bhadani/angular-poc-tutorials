import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse-in-ng',
  standalone: true,
  imports: [],
  templateUrl: './ifelse-in-ng.component.html',
  styleUrl: './ifelse-in-ng.component.scss'
})
export class IfelseInNgComponent {
  display=true //use to hide & show div using directive @if(display) & put the div inside that directive scope
  x:number=10
  color:number=10
  colorname="blue"
  usersList=["anil","bruce","robert","tony","samantha","carla"]
  students=[
    {name:"anil",age:25,email:"anil@gmail.com"},
    {name:"swapnil",age:26,email:"swapnil@gmail.com"},
    {name:"swapna",age:27,email:"swapna@gmail.com"},
    {name:"vikrant",age:28,email:"vikrant@gmail.com"},
    {name:"piyush",age:29,email:"piyush@gmail.com"},
    {name:"rekha",age:30,email:"rekha@gmail.com"}
  ]

  toggle(){ //clicking on blue div will hide/show the gray div
    this.display=!this.display
    console.log(this.display)
  }

  toggleBlueDiv(event:Event) {
    const input = event.target as HTMLInputElement;
    this.x = parseInt(input.value);
    console.log('x =', this.x);
  }

  handleColor(val:number){
    this.color=val
  }

  handleInput(event:Event){
    const input = event.target as HTMLInputElement;
    console.log(input)
    this.color = parseInt(input.value);
  }

  handleColorName(event:Event){
    this.colorname = (event.target as HTMLInputElement).value
  }

  //else-if conditions can help check multiple conditions compared to if-else


  getEmail(email:string) {
    console.log("email: ",email)
  }

}
