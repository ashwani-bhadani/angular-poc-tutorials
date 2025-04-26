import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pass-data-from-parent-to-child',
  standalone: true,
  imports: [],
  templateUrl: './pass-data-from-parent-to-child.component.html',
  styleUrl: './pass-data-from-parent-to-child.component.scss'
})
export class PassDataFromParentToChildComponent {
  @Input() user:string='default data when parent not sending data!!' 
  //need to import decorator, use same var name as in parent & fetch the variable from parent, also set default data
}
