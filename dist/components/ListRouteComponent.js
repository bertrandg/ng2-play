System.register(['angular2/angular2', './movie/MovieListComponent', './movie/MovieEditComponent', './../services/MovieListService'], function(exports_1) {
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
    var angular2_1, MovieListComponent_1, MovieEditComponent_1, MovieListService_1;
    var ListRouteComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (MovieListComponent_1_1) {
                MovieListComponent_1 = MovieListComponent_1_1;
            },
            function (MovieEditComponent_1_1) {
                MovieEditComponent_1 = MovieEditComponent_1_1;
            },
            function (MovieListService_1_1) {
                MovieListService_1 = MovieListService_1_1;
            }],
        execute: function() {
            ListRouteComponent = (function () {
                function ListRouteComponent(movieList) {
                    this.movieList = movieList;
                }
                ListRouteComponent = __decorate([
                    angular2_1.Component({
                        selector: 'list'
                    }),
                    angular2_1.View({
                        directives: [MovieListComponent_1.MovieListComponent, MovieEditComponent_1.MovieEditComponent],
                        template: "\n        <movie-list [is-editable]=\"true\" [title]=\"'Do what you want'\"></movie-list>\n        <movie-edit></movie-edit>\n    "
                    }), 
                    __metadata('design:paramtypes', [MovieListService_1.MovieListService])
                ], ListRouteComponent);
                return ListRouteComponent;
            })();
            exports_1("ListRouteComponent", ListRouteComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdFJvdXRlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkxpc3RSb3V0ZUNvbXBvbmVudCIsIkxpc3RSb3V0ZUNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFZSUEsNEJBQW1CQSxTQUEyQkE7b0JBQTNCQyxjQUFTQSxHQUFUQSxTQUFTQSxDQUFrQkE7Z0JBQUdBLENBQUNBO2dCQVp0REQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsTUFBTUE7cUJBQ25CQSxDQUFDQTtvQkFDREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLHVDQUFrQkEsRUFBRUEsdUNBQWtCQSxDQUFDQTt3QkFDcERBLFFBQVFBLEVBQUVBLG9JQUdUQTtxQkFDSkEsQ0FBQ0E7O3VDQUlEQTtnQkFBREEseUJBQUNBO1lBQURBLENBYkEsQUFhQ0EsSUFBQTtZQWJELG1EQWFDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9MaXN0Um91dGVDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xyXG5pbXBvcnQge01vdmllTGlzdENvbXBvbmVudH0gZnJvbSAnLi9tb3ZpZS9Nb3ZpZUxpc3RDb21wb25lbnQnO1xyXG5pbXBvcnQge01vdmllRWRpdENvbXBvbmVudH0gZnJvbSAnLi9tb3ZpZS9Nb3ZpZUVkaXRDb21wb25lbnQnO1xyXG5pbXBvcnQge01vdmllTGlzdFNlcnZpY2UsIE1vdmllfSBmcm9tICcuLy4uL3NlcnZpY2VzL01vdmllTGlzdFNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpc3QnXHJcbn0pXHJcbkBWaWV3KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtNb3ZpZUxpc3RDb21wb25lbnQsIE1vdmllRWRpdENvbXBvbmVudF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxtb3ZpZS1saXN0IFtpcy1lZGl0YWJsZV09XCJ0cnVlXCIgW3RpdGxlXT1cIidEbyB3aGF0IHlvdSB3YW50J1wiPjwvbW92aWUtbGlzdD5cclxuICAgICAgICA8bW92aWUtZWRpdD48L21vdmllLWVkaXQ+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdFJvdXRlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb3ZpZUxpc3Q6IE1vdmllTGlzdFNlcnZpY2UpIHt9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
