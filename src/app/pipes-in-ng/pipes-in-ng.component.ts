import { Component, Input } from '@angular/core';
import { CurrencyConverterPipe } from '../customPipes/currency-converter.pipe';

@Component({
  selector: 'app-pipes-in-ng',
  standalone: true,
  imports: [CurrencyConverterPipe],
  templateUrl: './pipes-in-ng.component.html',
  styleUrl: './pipes-in-ng.component.scss'
})
export class PipesInNgComponent {
  constructor(){
    console.log("constructor is called first when component is initialised, var is available here, amout =  and counter =", this.amount, this.counter)
  }
  amount = 10
  ngOnInit(){
    console.log("next runs NgOnInit")
  }

  ngOnDestroy(){ //a component is destoryed when it is removed from UI
    console.log("pipes in ng component detroyed")
  }

  @Input() counter = 0
  ngOnChange(){ //run everytime a componenets input has changed
    console.log("counter value is changed")
  }

  //whenever in your component any child components DOM gets changed we use afterNextRender= 	Runs every time all components have been rendered to the DOM.
  //afterRender =	Runs every time all components have been rendered to the DOM.


}
