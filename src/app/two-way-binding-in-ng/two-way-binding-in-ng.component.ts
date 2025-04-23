import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-two-way-binding-in-ng',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding-in-ng.component.html',
  styleUrl: './two-way-binding-in-ng.component.scss'
})
export class TwoWayBindingInNgComponent {
  //two way binding saves lot of time, linking properties/data in .ts & .html files so they are in sync
  //to update name you can use @NgModel or lengthy of event binding & calling function

  //2-way binding steps :
  // 1. import Forms Module from @angular/forms & register it in import of this .ts file
  // 2. enclose paranthese with sq brackets for two -way binding '[()]' ,called banana in a box & write ngModel

  name=""
  name2=""

  //time-consuming method 2
  updateName(input:Event){
    this.name2=(input.target as HTMLInputElement).value
  }

}
