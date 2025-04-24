import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-in-ng',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault], //must import directive from ng/commons & use it
  templateUrl: './directives-in-ng.component.html',
  styleUrl: './directives-in-ng.component.scss'
})
export class DirectivesInNgComponent {
  //directives are class which provide additional behaviour to your app, better DOM transformations
  users=["anil","sam","peter","bruce","bhaskar","vinay","tony","shekhar"]

  //*ngIf is for hiding & showing some property in html based on conditions, 
  // must import NgIf component, in inspection you will see this related html commented
  // <!--bindings={
  //   "ng-reflect-ng-if": "false"
  // }-->
  show=true
  loggedIn=true
  loggingToggle(input:Event){
    input.preventDefault() //so that you are not taken to the link on clicking
    this.loggedIn = !this.loggedIn
    console.log("loggedIn = ",this.loggedIn)
    // function loggingToggle() likely toggles login state but does not call event.preventDefault(), so:
    // The page will navigate away immediately (even if you only wanted to toggle login state).
  }

  //*ngSwitch is a structural directive used for conditional statements when they are more than 10, prefer this
  colorCode=1


  //need to display object using *ngFor
  studentData = [
    {
      name:'anil',
      age: 26,
      email: "anil@mail.com"
    },
    {
      name:'sam',
      age: 26,
      email: "sam@mail.com"
    },
    {
      name:'peter',
      age: 26,
      email: "peter@mail.com"
    },
    {
      name:'bruce',
      age: 26,
      email: "bruce@mail.com"
    },
    {
      name:'bhaskar',
      age: 26,
      email: "bhaskar@mail.com"
    },
    {
      name:'vinay',
      age: 26,
      email: "vinay@mail.com"
    },
    {
      name:'tony',
      age: 26,
      email: "tony@mail.com"
    }
  ]

}
