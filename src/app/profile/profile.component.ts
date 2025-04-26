import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [], //RouterLink
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  //passing data across components like user name
  //to bind this username from html, create constructor & register the active router as a
  // must else you get binding error, also can make this route private
  constructor(private route:ActivatedRoute){} //will take data from home page

  username:string|null=""
  //ngOnInit is a lifecycle directive that is called on page load automatically, use it to get the value of URL
  //now route will have a snapshot & every instance having RouterLink will have route, get the params from snapshot
  //and get the key passed in html from the param map, using the data we got from home page
  ngOnInit():void{
    this.username = this.route.snapshot.paramMap.get("name")
    // console.log(this.route)
    console.log( this.username ) //you can use this param in the same html page now
  }



}
