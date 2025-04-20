import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [LoginComponent, ProfileComponent, DatatypesComponent],
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'ng-19-tutorials';
  // name = 'ashwani'; //these properties available to app.component.html as defined in templateUrl
  // user1="peter";
  // user2="sam"
}
