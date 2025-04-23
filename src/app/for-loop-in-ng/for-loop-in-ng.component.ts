import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop-in-ng',
  standalone: true,
  imports: [],
  templateUrl: './for-loop-in-ng.component.html',
  styleUrl: './for-loop-in-ng.component.scss'
})
export class ForLoopInNgComponent {
  //contextual variables in for loop ng : are varibles already available in for loop
  // $count $index $last $first $odd & $even, empty block with for loop
  
  users=["anil","sam","peter","bruce","bhaskar","vinay","tony","shekhar"]


}
