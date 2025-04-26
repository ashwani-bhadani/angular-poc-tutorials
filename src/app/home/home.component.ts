import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ], //UserComponent
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

  users=[
    {id:1, name:"anil1", age:28, email:"anil@gmail.com"},
    {id:2, name:"anil2", age:28, email:"anil@gmail.com"},
    {id:3, name:"anil3", age:28, email:"anil@gmail.com"},
    {id:4, name:"anil4", age:28, email:"anil@gmail.com"},
    {id:5, name:"anil5", age:28, email:"anil@gmail.com"},
    {id:6, name:"anil6", age:28, email:"anil@gmail.com"},
    {id:7, name:"anil7", age:28, email:"anil@gmail.com"}
  ]
}
