import {Component, View} from 'angular2/angular2';
import {MovieListComponent} from './movie/MovieListComponent';
import {MovieEditComponent} from './movie/MovieEditComponent';
import {MovieListService, Movie} from './../services/MovieListService';

@Component({
    selector: 'list'
})
@View({
    directives: [MovieListComponent, MovieEditComponent],
    template: `
        <movie-list [is-editable]="true" [title]="'Do what you want'"></movie-list>
        <movie-edit></movie-edit>
    `
})

export class ListRouteComponent {
    constructor(public movieList: MovieListService) {}
}