import {Component, View} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import {RouterOutlet, RouterLink} from 'angular2/router';

import {MovieListComponent} from './movie/MovieListComponent';


@Component({
  selector: 'loop-route'
})

@RouteConfig([
  { path: '/looper', component: MovieListComponent, as: 'Looper' }
])

@View({
    directives: [RouterOutlet, RouterLink],
    template: `
      <div style="border: 1px solid #000; margin: 5px; padding: 5px;">
        <h2>We are inside the looper!!</h2>
        <a [router-link]="['./Looper']">Looper</a>
        <router-outlet></router-outlet>
      </div>
    `
})

export class LoopRouteComponent {
  constructor() {}
}