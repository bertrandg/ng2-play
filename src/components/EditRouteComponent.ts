import {Component, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

import {MovieEditComponent} from './movie/MovieEditComponent';
import {MovieListComponent} from './movie/MovieListComponent';
import {MovieListService, Movie} from './../services/MovieListService';

@Component({
  selector: 'edit'
})
@View({
    directives: [MovieEditComponent, MovieListComponent],
    template: `
      <movie-edit></movie-edit>
      <movie-list [is-editable]="false"></movie-list>
    `
})

export class EditRouteComponent {
  constructor(public movieList: MovieListService, public routeParams: RouteParams) {
      setTimeout(() => {
        this.movieList.select( this.movieList.get( Number( this.routeParams.params['id']) ) );
      });
  }
}