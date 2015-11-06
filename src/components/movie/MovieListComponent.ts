import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {MovieListItemComponent} from './MovieListItemComponent';
import {MovieListService, Movie} from './../../services/MovieListService';

@Component({
    selector: 'movie-list',
    properties: [
        'title',
        'isEditable'
    ]
})

@View({
    directives: [NgFor, MovieListItemComponent],
    template: `
        <div class="bloc">
            <h1>Collection: {{ title }}</h1>
            <ul>
                <li movie-list-item *ng-for="#m of list" [item]="m" [is-editable]="isEditable"></li>
            </ul>
        </div>
    `
})

export class MovieListComponent {
    list: Array<Movie>
    isEditable: boolean = true

    constructor(public movieList: MovieListService) {
        this.list = movieList.list;
    }
}