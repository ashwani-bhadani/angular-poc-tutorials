import { Component, Output, output } from '@angular/core';
import { UserComponent } from "../user/user.component";
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-reusing',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './reusing.component.html',
  styleUrl: './reusing.component.scss'
})
export class ReusingComponent {
 users=["anil","ravi","vikram","sunil"] //can also pass data in child component to parent component
 //jis bhi child component to use karna chahte ho parent me, usske selector ko as a #tag use karo parent me
 //#app-reusing

 //use output decorator to get data from parent function to child component & also declare it as a
 //  new emitter which helps parent function to come here
 @Output() getUsersFromParent= new EventEmitter()

 ngOnInit(){
  // this.getUsersFromParent.emit(this.users) //this will emitt properties from child to parent
 }

}
