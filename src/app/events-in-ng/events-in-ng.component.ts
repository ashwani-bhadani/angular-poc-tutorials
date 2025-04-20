import { Component } from '@angular/core';

@Component({
  selector: 'app-events-in-ng',
  standalone: true,
  imports: [],
  templateUrl: './events-in-ng.component.html',
  styleUrl: './events-in-ng.component.scss'
})
export class EventsInNgComponent {

  handleEvent(event:Event){ //always be specific in params, do not use any, can use MouseEvent or parent Event
    // console.log("function called: ", event) //check whole event info
    console.log("handle events: ",event.type)

    console.log("value entered = ",(event.target as HTMLInputElement).value) //taking input from textbox

    console.log("handle events: ", (event.target as Element).className) 
    console.log("handle events: ", (event.target as Element).classList) //get class of an event
  }
}
