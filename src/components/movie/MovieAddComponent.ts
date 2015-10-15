import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
import {MovieListService, Movie} from './../../services/MovieListService';

@Component({
  selector: 'movie-add'
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
      <div class="bloc">
          <h1>Ajouter un film:</h1>
          <form #f="form" (ng-submit)="add(f)" novalidate>
            <input ng-control="name" [(ng-model)]="tempMovie.name" type="text" placeholder="nom" required />
            <input ng-control="year" [(ng-model)]="tempMovie.year" type="number" placeholder="année" required />
            <input ng-control="score" [(ng-model)]="tempMovie.score" type="number" placeholder="score" required />
            <button type="submit" [disabled]="!f.valid">Ajout</button>
          </form>
      </div>
    `
})

export class MovieAddComponent {
  tempMovie:Movie = new Movie();

  constructor(public movieList: MovieListService) {}

  add(form:any) {
    if(form.valid) {
        this.movieList.add(this.tempMovie);
        this.tempMovie = new Movie();
    }
  }
}