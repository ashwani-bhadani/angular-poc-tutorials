import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { CounterComponent } from './counter/counter.component';
import { EventsInNgComponent } from './events-in-ng/events-in-ng.component';
import { InputsInNgComponent } from './inputs-in-ng/inputs-in-ng.component';
import { IfelseInNgComponent } from './ifelse-in-ng/ifelse-in-ng.component';
import { SignalsInNgComponent } from './signals-in-ng/signals-in-ng.component';
import { EffectsInNgComponent } from './effects-in-ng/effects-in-ng.component';
import { ForLoopInNgComponent } from './for-loop-in-ng/for-loop-in-ng.component';
import { TwoWayBindingInNgComponent } from "./two-way-binding-in-ng/two-way-binding-in-ng.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { DynamicStylingComponent } from "./dynamic-styling/dynamic-styling.component";
import { DirectivesInNgComponent } from "./directives-in-ng/directives-in-ng.component";
import { RoutingInNgComponent } from "./routing-in-ng/routing-in-ng.component";
import { BasicReactiveFormsComponent } from "./basic-reactive-forms/basic-reactive-forms.component";
import { ReactiveFormGroupingComponent } from './reactive-form-grouping/reactive-form-grouping.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { PassDataFromParentToChildComponent } from "./pass-data-from-parent-to-child/pass-data-from-parent-to-child.component";
import { ReusingComponent } from "./reusing/reusing.component";
import { PipesInNgComponent } from "./pipes-in-ng/pipes-in-ng.component";
import { NgIf } from '@angular/common';
import { AmountServiceService } from './services/amount-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [LoginComponent,CounterComponent, ProfileComponent, DatatypesComponent,
  //  EventsInNgComponent,InputsInNgComponent, IfelseInNgComponent, SignalsInNgComponent, EffectsInNgComponent,
  // ForLoopInNgComponent,TwoWayBindingInNgComponent, ToDoListComponent, DynamicStylingComponent, DirectivesInNgComponent,
  // RoutingInNgComponent, BasicReactiveFormsComponent,ReactiveFormGroupingComponent, TemplateDrivenFormsComponent,PassDataFromParentToChildComponent
  // ReusingComponent, PipesInNgComponent, NgIf
  // ],
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  //example for services in angular
  //create a DS to have amountService
  // products:{
  //   product: string
  //   price:number
  // }[] | undefined

  // //injecting a service class & using it
  // constructor(private amountService:AmountServiceService){
  //   //in constructor we generally do not return anything
  // }

  // getProductData(){
  //   this.products= this.amountService.getAmountData()
  //   console.log(this.products)
  // }


  //example for lifecycle methods in angular
  // counter=0
  // increaseCounter(){
  //   this.counter+=1
  // }
  
  //example for sending data from parent -> child & vice versa
  // title = 'ng-19-tutorials'; //you can also send property from parent to child
  // //to take data from html select box
  // onSelectUser(user:string){
  //   this.title= ""
  // }

  // //reusing data properties defined in resusingComponent 
  // reuseUsers(users:string[]){
  //   console.log(users) //to pass this function to child component use banana braces in html
  // }

  // name = 'ashwani'; //these properties available to app.component.html as defined in templateUrl
  // user1="peter";
  // user2="sam"
}
