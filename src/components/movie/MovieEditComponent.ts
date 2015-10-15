import {Component, View, NgIf, FORM_DIRECTIVES} from 'angular2/angular2';
//import {Observer, Observable} from 'rx.all';
import {cloneDeep} from 'lodash';
import {MovieListService, Movie} from './../../services/MovieListService';

@Component({
  selector: 'movie-edit',
})
@View({
    directives: [NgIf, FORM_DIRECTIVES],
    template: `
      <div class="bloc">
          <h1 *ng-if="currentMovie == null">Aucun film sélectionné..</h1>
          <div *ng-if="currentMovie != null">
            <form #f="form" (ng-submit)="edit(f)" novalidate>
              <h1>Edition d'un film: {{ currentMovie.name }}</h1>
              <input ng-control="name" [(ng-model)]="editMovie.name" type="text" placeholder="nom" required />
              <input ng-control="year" [(ng-model)]="editMovie.year" type="number" placeholder="année" required />
              <input ng-control="score" [(ng-model)]="editMovie.score" type="number" placeholder="score" required />
              <button type="submit" [disabled]="!f.valid">Enregistrer</button>
            </form>
            <button (click)="cancel()">Annuler</button>
          </div>
      </div>
    `
})

export class MovieEditComponent {
  vm:Object = {}
  currentMovie:Movie = null
  editMovie:Movie = null

  constructor(public movieList: MovieListService) {
      /*this.movieList.selectMovie.toRx().subscribe(Observer.create(
          (m) => { this.movieChanged(m); },
          (err) => { },
          (e) => { }
      ));*/
      this.movieList.selectMovie.toRx().subscribe((m:Movie) => { this.movieChanged(m); });
  }

  movieChanged(m:Movie = null) {
      this.currentMovie = m;
      this.editMovie = cloneDeep(m);
  }

  edit(form:any) {
    if(form.valid) {
        this.movieList.update(this.currentMovie.id, this.editMovie);
        this.movieList.select();
    }
  }

  cancel() {
    this.movieList.select();
  }
}