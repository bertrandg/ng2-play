System.register(['angular2/angular2', './../../services/MovieListService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, MovieListService_1;
    var MovieAddComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (MovieListService_1_1) {
                MovieListService_1 = MovieListService_1_1;
            }],
        execute: function() {
            MovieAddComponent = (function () {
                function MovieAddComponent(movieList) {
                    this.movieList = movieList;
                    this.tempMovie = new MovieListService_1.Movie();
                }
                MovieAddComponent.prototype.add = function (form) {
                    if (form.valid) {
                        this.movieList.add(this.tempMovie);
                        this.tempMovie = new MovieListService_1.Movie();
                    }
                };
                MovieAddComponent = __decorate([
                    angular2_1.Component({
                        selector: 'movie-add'
                    }),
                    angular2_1.View({
                        directives: [angular2_1.FORM_DIRECTIVES],
                        template: "\n        <div class=\"bloc\">\n            <h1>Ajouter un film:</h1>\n            <form #f=\"form\" (ng-submit)=\"add(f)\" novalidate>\n                <input ng-control=\"name\" [(ng-model)]=\"tempMovie.name\" type=\"text\" placeholder=\"nom\" required />\n                <input ng-control=\"year\" [(ng-model)]=\"tempMovie.year\" type=\"number\" placeholder=\"ann\u00E9e\" required />\n                <input ng-control=\"score\" [(ng-model)]=\"tempMovie.score\" type=\"number\" placeholder=\"score\" required />\n                <button type=\"submit\" [disabled]=\"!f.valid\">Ajout</button>\n            </form>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [MovieListService_1.MovieListService])
                ], MovieAddComponent);
                return MovieAddComponent;
            })();
            exports_1("MovieAddComponent", MovieAddComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWUvTW92aWVBZGRDb21wb25lbnQudHMiXSwibmFtZXMiOlsiTW92aWVBZGRDb21wb25lbnQiLCJNb3ZpZUFkZENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIk1vdmllQWRkQ29tcG9uZW50LmFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFzQklBLDJCQUFtQkEsU0FBMkJBO29CQUEzQkMsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBa0JBO29CQUY5Q0EsY0FBU0EsR0FBU0EsSUFBSUEsd0JBQUtBLEVBQUVBLENBQUNBO2dCQUVtQkEsQ0FBQ0E7Z0JBRWxERCwrQkFBR0EsR0FBSEEsVUFBSUEsSUFBUUE7b0JBQ1JFLEVBQUVBLENBQUFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO3dCQUNaQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTt3QkFDbkNBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLHdCQUFLQSxFQUFFQSxDQUFDQTtvQkFDakNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkE3QkxGO29CQUFDQSxvQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBO3FCQUN4QkEsQ0FBQ0E7b0JBRURBLGVBQUlBLENBQUNBO3dCQUNGQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBZUEsQ0FBQ0E7d0JBQzdCQSxRQUFRQSxFQUFFQSxpb0JBVVRBO3FCQUNKQSxDQUFDQTs7c0NBYURBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0E5QkEsQUE4QkNBLElBQUE7WUE5QkQsaURBOEJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9tb3ZpZS9Nb3ZpZUFkZENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBGT1JNX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcclxuaW1wb3J0IHtNb3ZpZUxpc3RTZXJ2aWNlLCBNb3ZpZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9Nb3ZpZUxpc3RTZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtb3ZpZS1hZGQnXHJcbn0pXHJcblxyXG5AVmlldyh7XHJcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NcIj5cclxuICAgICAgICAgICAgPGgxPkFqb3V0ZXIgdW4gZmlsbTo8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSAjZj1cImZvcm1cIiAobmctc3VibWl0KT1cImFkZChmKVwiIG5vdmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmctY29udHJvbD1cIm5hbWVcIiBbKG5nLW1vZGVsKV09XCJ0ZW1wTW92aWUubmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJub21cIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG5nLWNvbnRyb2w9XCJ5ZWFyXCIgWyhuZy1tb2RlbCldPVwidGVtcE1vdmllLnllYXJcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJhbm7DqWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG5nLWNvbnRyb2w9XCJzY29yZVwiIFsobmctbW9kZWwpXT1cInRlbXBNb3ZpZS5zY29yZVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cInNjb3JlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCIhZi52YWxpZFwiPkFqb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZUFkZENvbXBvbmVudCB7XHJcbiAgICB0ZW1wTW92aWU6TW92aWUgPSBuZXcgTW92aWUoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbW92aWVMaXN0OiBNb3ZpZUxpc3RTZXJ2aWNlKSB7fVxyXG5cclxuICAgIGFkZChmb3JtOmFueSkge1xyXG4gICAgICAgIGlmKGZvcm0udmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZpZUxpc3QuYWRkKHRoaXMudGVtcE1vdmllKTtcclxuICAgICAgICAgICAgdGhpcy50ZW1wTW92aWUgPSBuZXcgTW92aWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
