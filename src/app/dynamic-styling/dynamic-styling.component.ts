import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-styling.component.html',
  styleUrl: './dynamic-styling.component.scss'
})
export class DynamicStylingComponent {
  //like apply large styling using properties
  bgcolor = "cyan"
  fontSize="20" 

  h3Big="80"
  h3Small="10"
  zoom=false

  updateSize(){
    this.zoom = !this.zoom
  }

}
