import { Component, effect, signal, WritableSignal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-effects-in-ng',
  standalone: true,
  imports: [],
  templateUrl: './effects-in-ng.component.html',
  styleUrl: './effects-in-ng.component.scss'
})
export class EffectsInNgComponent {
  //effects are basically functions used in constructor for signals to no signal was called, takes a callback function
  username= signal("Hello")
  // count: WritableSignal<number> = signal<number>(0); //need to give type in both sides as ts can't determine type implicitly
  count = signal(0)  //no need to use writeable  signal, just use signal.set()
  displayHeading=true

  constructor() {
    effect(
      ()=>{
        console.log(this.username())
      } //now whenver signal is updated this will get called
    )

    effect(
      ()=>{
        console.log(this.count())
      }
    )
  }

  toggleHeading(){ //if count is odd, display Heading else do not display for even

    this.count.set(this.count()+1)

    if(this.count()%2==0){
      this.displayHeading=false
    } else {
      this.displayHeading = true
    }
  }

}