import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-in-ng',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './routing-in-ng.component.html',
  styleUrl: './routing-in-ng.component.scss'
})
export class RoutingInNgComponent {
  //routing: import router link & router outlet
  //import & register route file, make links for open pages with routes, register a component & use it as a component

  //header component in routing, active class, feature of router link active options, adding homepage to route path

}
