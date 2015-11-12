System.register(['angular2/angular2', './MovieListItemComponent', './../../services/MovieListService'], function(exports_1) {
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
    var angular2_1, MovieListItemComponent_1, MovieListService_1;
    var MovieListComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (MovieListItemComponent_1_1) {
                MovieListItemComponent_1 = MovieListItemComponent_1_1;
            },
            function (MovieListService_1_1) {
                MovieListService_1 = MovieListService_1_1;
            }],
        execute: function() {
            MovieListComponent = (function () {
                function MovieListComponent(movieList) {
                    this.movieList = movieList;
                    this.isEditable = true;
                    this.list = movieList.list;
                }
                MovieListComponent = __decorate([
                    angular2_1.Component({
                        selector: 'movie-list',
                        properties: [
                            'title',
                            'isEditable'
                        ]
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgFor, MovieListItemComponent_1.MovieListItemComponent],
                        template: "\n        <div class=\"bloc\">\n            <h1>Collection: {{ title }}</h1>\n            <ul>\n                <li movie-list-item *ng-for=\"#m of list\" [item]=\"m\" [is-editable]=\"isEditable\"></li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [MovieListService_1.MovieListService])
                ], MovieListComponent);
                return MovieListComponent;
            })();
            exports_1("MovieListComponent", MovieListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWUvTW92aWVMaXN0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIk1vdmllTGlzdENvbXBvbmVudCIsIk1vdmllTGlzdENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkF3QklBLDRCQUFtQkEsU0FBMkJBO29CQUEzQkMsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBa0JBO29CQUY5Q0EsZUFBVUEsR0FBWUEsSUFBSUEsQ0FBQUE7b0JBR3RCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTtnQkFDL0JBLENBQUNBO2dCQTFCTEQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxVQUFVQSxFQUFFQTs0QkFDUkEsT0FBT0E7NEJBQ1BBLFlBQVlBO3lCQUNmQTtxQkFDSkEsQ0FBQ0E7b0JBRURBLGVBQUlBLENBQUNBO3dCQUNGQSxVQUFVQSxFQUFFQSxDQUFDQSxnQkFBS0EsRUFBRUEsK0NBQXNCQSxDQUFDQTt3QkFDM0NBLFFBQVFBLEVBQUVBLHFQQU9UQTtxQkFDSkEsQ0FBQ0E7O3VDQVNEQTtnQkFBREEseUJBQUNBO1lBQURBLENBM0JBLEFBMkJDQSxJQUFBO1lBM0JELG1EQTJCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbW92aWUvTW92aWVMaXN0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yLCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcclxuaW1wb3J0IHtNb3ZpZUxpc3RJdGVtQ29tcG9uZW50fSBmcm9tICcuL01vdmllTGlzdEl0ZW1Db21wb25lbnQnO1xyXG5pbXBvcnQge01vdmllTGlzdFNlcnZpY2UsIE1vdmllfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL01vdmllTGlzdFNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21vdmllLWxpc3QnLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgICd0aXRsZScsXHJcbiAgICAgICAgJ2lzRWRpdGFibGUnXHJcbiAgICBdXHJcbn0pXHJcblxyXG5AVmlldyh7XHJcbiAgICBkaXJlY3RpdmVzOiBbTmdGb3IsIE1vdmllTGlzdEl0ZW1Db21wb25lbnRdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY1wiPlxyXG4gICAgICAgICAgICA8aDE+Q29sbGVjdGlvbjoge3sgdGl0bGUgfX08L2gxPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGkgbW92aWUtbGlzdC1pdGVtICpuZy1mb3I9XCIjbSBvZiBsaXN0XCIgW2l0ZW1dPVwibVwiIFtpcy1lZGl0YWJsZV09XCJpc0VkaXRhYmxlXCI+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZUxpc3RDb21wb25lbnQge1xyXG4gICAgbGlzdDogQXJyYXk8TW92aWU+XHJcbiAgICBpc0VkaXRhYmxlOiBib29sZWFuID0gdHJ1ZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb3ZpZUxpc3Q6IE1vdmllTGlzdFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBtb3ZpZUxpc3QubGlzdDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
