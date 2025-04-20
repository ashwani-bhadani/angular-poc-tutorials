import {Component} from '@angular/core';

@Component({
    selector: 'app-profile', //even if u change selector to html reserved word, ng will override the html keyword, for your selector name
    // template: `<h1>Profile Component</h1>`,
    // styles: `h1{color:orange}`,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    standalone: true
})
export class ProfileComponent {
 handleProfileSubmit() { //in ng no need to use var, let here, also function keyword not required
    //when you pass event as parameter you must also define its type
    // alert("Profile Submitted");
    console.log("handleProfileSubmit called")
    //to call other functions part of this class, you need to use this keyword
    this.otherFunction() //never forget to add () to invoke the function
 }

 otherFunction() {
    console.log("other function called by profile submit ")
 }
}

/**
    any component must have a component.ts file
    in ng component names start from lower case, in react it is upper case
    export is a normal type-script class, but it should have decorators
    also need to import component from @angular/core

    every component must have decorator @Component : marks a class as an 
    Angular component and provides configuration metadata that determines 
    how the component should be processed, instantiated, and used at runtime.

    Inside atleast need to have two things : 1 selector to define html tag & template to write html

    If ProfileComponent is NOT marked as standalone: true, you must not import it directly in 
    another component or route or It must be imported via an NgModule

    if your component is very small, do not add diff files, instead directly use the html & css
 */