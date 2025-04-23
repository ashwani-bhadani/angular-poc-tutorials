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

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [LoginComponent,CounterComponent, ProfileComponent, DatatypesComponent,
  //  EventsInNgComponent,InputsInNgComponent, IfelseInNgComponent, SignalsInNgComponent, EffectsInNgComponent,
  // ForLoopInNgComponent,TwoWayBindingInNgComponent ],
  imports: [ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // title = 'ng-19-tutorials';
  // name = 'ashwani'; //these properties available to app.component.html as defined in templateUrl
  // user1="peter";
  // user2="sam"
}
