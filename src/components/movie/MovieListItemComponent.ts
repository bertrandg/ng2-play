import {Component, View, NgFor, NgIf, ElementRef} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

import {MovieListService, Movie} from './../../services/MovieListService';

@Component({
    selector: '[movie-list-item]',
    properties: [
        'm: item',
        'isEditable'
    ],
    host: {
        'class': 'item',
        '(mouseover)': 'highlight(true)',
        '(mouseout)': 'highlight(false)',
        '(click)': 'click()'
    }
})

@View({
    directives: [NgIf, RouterLink],
    template: `
        <h3 [class.isselected]="m.selected">
            {{ m.name + ' - ' + m.year + ' - ' + m.score }}
            <span *ng-if="isEditable">
                <button (click)="movieList.remove(m)">REMOVE</button>
                <button [router-link]="['/Edit', {id: m.id}]">EDIT</burron>
            </span>
        </h3>
    `
})

export class MovieListItemComponent {
    isEditable: boolean = true
    m:Movie  
    el:HTMLElement

    constructor(public movieList: MovieListService, public elRef: ElementRef) {
        this.el = elRef.nativeElement;
    }

    click() {
        if (!this.isEditable) return;

        this.highlight(false);
        this.movieList.select(this.m);
    }

    highlight(b:boolean) {
        if (!this.isEditable) return;

        if(b) {
            this.el.style.outline = '2px solid yellow';
        }
        else {
            this.el.style.outline = '0';
        }
    }

    onInit() {
        console.log('onInit', this);
    }
    onChange() {
        console.log('onChange', this);
    }
    oncheck() {
        console.log('onCheck', this);
    }
    onAllChangesDone() {
        console.log('onAllChangesDone', this);
    }
    onDestroy() {
        console.log('onDestroy', this);
    }
}