import {Component, View, NgFor} from 'angular2/angular2';

import {ViewArrayComponent} from './arrayTest/ViewArrayComponent';


@Component({
    selector: 'loop-route'
})

@View({
    directives: [NgFor, ViewArrayComponent],
    template: `
        <div style="border: 1px solid #000; margin: 5px; padding: 5px;">
            <h1>Parent component</h1>
            <p>TAB1 = <span *ng-for="#d of myTab1">{{ d.name }} - </span></p>
            <p>TAB2 = <span *ng-for="#t of myTab2">{{ t }} - </span></p>
            <input type="text" #new />
            <button (click)="add(new.value)">ADD</button><br><br>
            <view-array [tab1]="myTab1" [tab2]="myTab2"></view-array>
            <div class="clearfix"></div>
        </div>
    `
})

export class ArrayTestRouteComponent {
    myTab1: Array<Object>
    myTab2: Array<string>

    constructor() {
        this.myTab1 = [
        { name: 'Tim' },
        { name: 'Jack' },
        { name: 'Dude' },
        { name: 'Franck' }
        ];

        this.myTab2 = ['Tim', 'Jack', 'Dude', 'Franck'];
    }

    add(v:string) {
        this.myTab1.push({name: v});
        this.myTab2.push(v);
        console.log(v, this.myTab1, this.myTab2);
    }
}

