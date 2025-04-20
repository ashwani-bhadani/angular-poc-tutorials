import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = 0

  handleIncrease(){
    this.count+=1;
  }

  handleDecrease(){
    this.count-=1;
  }

  handleReset(){
    this.count=0;
  }

}
