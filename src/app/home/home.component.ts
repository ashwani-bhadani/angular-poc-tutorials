import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //for m-2 of passing around variables, you need to import router & use in constructor

  constructor(private router:Router){}

  goToProfile(){
    //use the router to got to profile page
    this.router.navigate(['profile']) //will take array
  }

}
