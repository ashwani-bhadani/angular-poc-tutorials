import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals-in-ng',
  standalone: true,
  imports: [],
  templateUrl: './signals-in-ng.component.html',
  styleUrl: './signals-in-ng.component.scss'
})
export class SignalsInNgComponent {

  //signal is a wrapper around a value, which gives signal when value changes, can contain primitive & advanced data structures
  //signals are reactive & wherever it is used, the new value is sent on change, are 2 types writeable & computeable(read only)
  //and also an effect function can let you provide functionality to perform based on signals new value
  x=10 //a normal property
  count = signal(10); //a signal

  msg = signal<number|string>(10) //defining data type of signal's data contained
  msg2 : WritableSignal<number|string> = signal<number|string>(10) //there are 2 type of signals writeable & computeable, 2nd <> is not required now
  msg3 : Signal<number> = computed(()=>10) //computeable signal takes a function

  constructor(){ //pass signal based on update of x
    effect( //will be called everytime there is an update in signal
      ()=>{
        console.log(this.count()) //you need to call the signal as a function to see its value
      }
    )

    effect(
      ()=>{
        console.log(this.msg())
      }
    )
  }

  updateValue(){
    this.x+=10
    this.count.set(this.count()+10)
    this.msg.set("Hello")
    this.msg2.set("Vinit")
    // this.msg.update(this.msg() + 1) //update in signal has limited use when multiple datatypes are there
    // this.msg3.set("hello") updating computable signal not allowed
  }

}
