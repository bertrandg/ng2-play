import {Component, View, bootstrap, NgFor, bind} from 'angular2/angular2';

import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import {RouterOutlet, RouterLink} from 'angular2/router';

import {HomeRouteComponent} from './components/HomeRouteComponent';
import {ListRouteComponent} from './components/ListRouteComponent';
import {EditRouteComponent} from './components/EditRouteComponent';
import {LoopRouteComponent} from './components/LoopRouteComponent';
import {ArrayTestRouteComponent} from './components/ArrayTestRouteComponent';

import {MovieListService, Movie} from './services/MovieListService';
import {SegmentBuilderService} from './services/SegmentBuilderService';

@Component({
  selector: 'movie-app'
})

@RouteConfig([
  { path: '/', component: HomeRouteComponent, as: 'Home' },
  { path: '/list', component: ListRouteComponent, as: 'List' },
  { path: '/edit/:id', component: EditRouteComponent, as: 'Edit' },
  { path: '/loop/...', component: LoopRouteComponent, as: 'Loop' },
  { path: '/array-test', component: ArrayTestRouteComponent, as: 'ArrayTest' }
])

@View({
  directives: [RouterOutlet, RouterLink],
  template: `
    <div>
      <h1></h1>
      <ul>
        <li><a [router-link]="['./Home']">Home</a></li>
        <li><a [router-link]="['./List']">Liste</a></li>
        <li><a [router-link]="['./Loop/LooperHome']">Loop</a></li>
        <li><a [router-link]="['./ArrayTest']">Array test</a></li>
      </ul> 
      <router-outlet></router-outlet>
    </div>
  `
})
export class MovieApp {
    constructor() {}
    onInit() {}
}
  
bootstrap(MovieApp, [MovieListService, SegmentBuilderService, ROUTER_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy)]);
