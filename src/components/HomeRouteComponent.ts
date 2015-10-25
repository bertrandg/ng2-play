import {Component, View} from 'angular2/angular2';
import {MovieListComponent} from './movie/MovieListComponent';
import {MovieAddComponent} from './movie/MovieAddComponent';
import {SegmentBuilderComponent} from './segmentBuilder/SegmentBuilderComponent';

import {MovieListService, Movie} from './../services/MovieListService';

@Component({
  selector: 'home'
})
@View({
    directives: [SegmentBuilderComponent, MovieListComponent, MovieAddComponent],
    template: `
      <div>
       <segment-builder></segment-builder> 
      </div>
    `
})

export class HomeRouteComponent {
  constructor(public movieList: MovieListService) {}
}