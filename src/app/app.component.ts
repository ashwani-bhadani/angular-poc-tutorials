import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicReactiveFormsComponent } from './basic-reactive-forms/basic-reactive-forms.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BasicReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
