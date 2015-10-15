import {Component, View} from 'angular2/angular2';
import {MovieListComponent} from './movie/MovieListComponent';
import {MovieAddComponent} from './movie/MovieAddComponent';
import {MovieListService, Movie} from './../services/MovieListService';

@Component({
  selector: 'home'
})
@View({
    directives: [MovieListComponent, MovieAddComponent],
    template: `
      <div class="bloc">
        <p>Vous avez {{ movieList.list.length }} films en base!</p>
        <movie-add></movie-add>
      </div>
      <movie-list [is-editable]="false" [title]="'Discover the list'"></movie-list>
    `
})

export class HomeRouteComponent {
  constructor(public movieList: MovieListService) {}
}