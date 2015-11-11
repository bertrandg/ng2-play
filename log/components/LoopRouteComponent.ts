import {Component, View} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import {RouterOutlet, RouterLink} from 'angular2/router';

import {LoopComponent} from './loop/LoopComponent';


@Component({
    selector: 'loop-route'
})

@RouteConfig([
    { path: '/', component: LoopComponent, as: 'LooperHome' },
    { path: '/looper/...', component: LoopRouteComponent, as: 'Looper' }
])

@View({
    directives: [RouterOutlet, RouterLink],
    template: `
        <div style="border: 1px solid #000; margin: 5px; padding: 5px;">
            <h2>We are inside the looper!!</h2>
            <button [router-link]="['./Looper/LooperHome']">Click on the button to go deeper..</button>
            <button [router-link]="['./LooperHome']">Back here</button>
            <router-outlet></router-outlet>
        </div>
    `
})

export class LoopRouteComponent {
    constructor() {}
}