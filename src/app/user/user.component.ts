import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  //now when in home page u click on user, how to get id from url,
  //jis component me get karna hai waha constructor bana lo & route to get karo from ActivatedRoute

  constructor(private route: ActivatedRoute){

  }

  name:string |null=""

  ngOnInit(){ //lifecycle method hai, param to subscribe karke get karo jaise hi activate honge
    this.route.params.subscribe(
          (urlParams)=>{
          console.log(urlParams) //this params can be null or contain info, example to use as below
          this.name= urlParams['name']
        }
    )
  }

}
