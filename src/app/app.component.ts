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
import { ApiCallingService } from './services/api-calling.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Post } from './interfaces/post';
import { LazyLoadingRouteComponent } from './lazy-loading-route/lazy-loading-route.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [LoginComponent,CounterComponent, ProfileComponent, DatatypesComponent,
  //  EventsInNgComponent,InputsInNgComponent, IfelseInNgComponent, SignalsInNgComponent, EffectsInNgComponent,
  // ForLoopInNgComponent,TwoWayBindingInNgComponent, ToDoListComponent, DynamicStylingComponent, DirectivesInNgComponent,
  // RoutingInNgComponent, BasicReactiveFormsComponent,ReactiveFormGroupingComponent, TemplateDrivenFormsComponent,PassDataFromParentToChildComponent
  // ReusingComponent, PipesInNgComponent, NgIf
  // ],
  imports: [FormsModule, LazyLoadingRouteComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  postsAll:any
  // !! it is very imp to declare data type using interfaces in angular & use them instead
  //example calling APIs 
  constructor(private apiServie:ApiCallingService){}
  
  ngOnInit(){ //ek provider be add karna padega in app.config.ts, htthProvider otherise error dega
  //   R3InjectorError(Environment Injector)[_ApiCallingService -> _HttpClient -> _HttpClient]: 
  // NullInjectorError: No provider for _HttpClient!
  
    /* "Subscribe to the observable returned by the HTTP call to start the request and asynchronously
     handle the emitted response data. In Angular, HTTP methods like GET return cold observables, 
     which execute only upon subscription."
    subscribe() ke through response ko asynchronously handle karte hain (kyunki HTTP responses late aate hain).
     */
    this.apiServie.getJsonPlaceholderPosts().subscribe(
      (data:any)=>{
        console.log(data)
        this.postsAll= data
      }
      
    )//subscribe takes a callback function
  }

  //method to add a post by POST API via form & call method in api-calling service
  addPostByUserId(post:Post){
    this.apiServie.savePost(post).subscribe(
      (data:Post) =>{
        console.log(data)
        // this.postsAll.s
      }
    )
  }

  
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
