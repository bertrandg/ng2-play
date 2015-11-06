import {EventEmitter} from 'angular2/angular2';
import {find} from 'lodash';


export class Movie {
    id: number = Math.round(Math.random()*1000000000)
    selected: boolean = false

    constructor(public name:string = null, public year:number = null, public score:number = null) {}
}


export class MovieListService {
    list: Array<Movie>
    selectMovie = new EventEmitter();

    constructor() {
        this.list = [
            new Movie('Star Wars 2', 1991, 3.5),
            new Movie('Roger Rabbit', 2002, 3.4),
            new Movie('Le Fils de l\'Homme', 2004, 4.6),
            new Movie('Scream', 1995, 2.8),
            new Movie('Interstellar', 2014, 3.8),
        ];
    }

    add(m:Movie) {
        this.list.push(m);
    }

    remove(m:Movie) {
        var index = this.list.indexOf(m);
        if (index !== -1) {
            if(m.selected) this.select();
            this.list.splice(index, 1);
        }
    }

    get(id:number) {
        return find(this.list, { 'id': id });
    }

    update(id:number, edited:Movie) {
        let m: Movie = find(this.list, { 'id': id });

        if(m) {
            m.name = edited.name;
            m.year = edited.year;
            m.score = edited.score;
        }
    }

    select(m:Movie = null) {
        this.list.map((m) => m.selected = false);
        if(m) m.selected = true;
        this.selectMovie.next(m);
    }

}