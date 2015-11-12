System.register(['angular2/angular2', 'angular2/router', './movie/MovieEditComponent', './movie/MovieListComponent', './../services/MovieListService'], function(exports_1) {
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
    var angular2_1, router_1, MovieEditComponent_1, MovieListComponent_1, MovieListService_1;
    var EditRouteComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (MovieEditComponent_1_1) {
                MovieEditComponent_1 = MovieEditComponent_1_1;
            },
            function (MovieListComponent_1_1) {
                MovieListComponent_1 = MovieListComponent_1_1;
            },
            function (MovieListService_1_1) {
                MovieListService_1 = MovieListService_1_1;
            }],
        execute: function() {
            EditRouteComponent = (function () {
                function EditRouteComponent(movieList, routeParams) {
                    var _this = this;
                    this.movieList = movieList;
                    this.routeParams = routeParams;
                    setTimeout(function () {
                        _this.movieList.select(_this.movieList.get(Number(_this.routeParams.params['id'])));
                    });
                }
                EditRouteComponent = __decorate([
                    angular2_1.Component({
                        selector: 'edit'
                    }),
                    angular2_1.View({
                        directives: [MovieEditComponent_1.MovieEditComponent, MovieListComponent_1.MovieListComponent],
                        template: "\n        <movie-edit></movie-edit>\n        <movie-list [is-editable]=\"false\"></movie-list>\n    "
                    }), 
                    __metadata('design:paramtypes', [MovieListService_1.MovieListService, router_1.RouteParams])
                ], EditRouteComponent);
                return EditRouteComponent;
            })();
            exports_1("EditRouteComponent", EditRouteComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWRpdFJvdXRlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkVkaXRSb3V0ZUNvbXBvbmVudCIsIkVkaXRSb3V0ZUNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFZSUEsNEJBQW1CQSxTQUEyQkEsRUFBU0EsV0FBd0JBO29CQVpuRkMsaUJBaUJDQTtvQkFMc0JBLGNBQVNBLEdBQVRBLFNBQVNBLENBQWtCQTtvQkFBU0EsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWFBO29CQUMzRUEsVUFBVUEsQ0FBQ0E7d0JBQ1BBLEtBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUVBLEtBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUVBLE1BQU1BLENBQUVBLEtBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUVBLENBQUVBLENBQUNBO29CQUMxRkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQWhCTEQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsTUFBTUE7cUJBQ25CQSxDQUFDQTtvQkFDREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLHVDQUFrQkEsRUFBRUEsdUNBQWtCQSxDQUFDQTt3QkFDcERBLFFBQVFBLEVBQUVBLHNHQUdUQTtxQkFDSkEsQ0FBQ0E7O3VDQVFEQTtnQkFBREEseUJBQUNBO1lBQURBLENBakJBLEFBaUJDQSxJQUFBO1lBakJELG1EQWlCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvRWRpdFJvdXRlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcclxuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7TW92aWVFZGl0Q29tcG9uZW50fSBmcm9tICcuL21vdmllL01vdmllRWRpdENvbXBvbmVudCc7XHJcbmltcG9ydCB7TW92aWVMaXN0Q29tcG9uZW50fSBmcm9tICcuL21vdmllL01vdmllTGlzdENvbXBvbmVudCc7XHJcbmltcG9ydCB7TW92aWVMaXN0U2VydmljZSwgTW92aWV9IGZyb20gJy4vLi4vc2VydmljZXMvTW92aWVMaXN0U2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZWRpdCdcclxufSlcclxuQFZpZXcoe1xyXG4gICAgZGlyZWN0aXZlczogW01vdmllRWRpdENvbXBvbmVudCwgTW92aWVMaXN0Q29tcG9uZW50XSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPG1vdmllLWVkaXQ+PC9tb3ZpZS1lZGl0PlxyXG4gICAgICAgIDxtb3ZpZS1saXN0IFtpcy1lZGl0YWJsZV09XCJmYWxzZVwiPjwvbW92aWUtbGlzdD5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0Um91dGVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG1vdmllTGlzdDogTW92aWVMaXN0U2VydmljZSwgcHVibGljIHJvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmllTGlzdC5zZWxlY3QoIHRoaXMubW92aWVMaXN0LmdldCggTnVtYmVyKCB0aGlzLnJvdXRlUGFyYW1zLnBhcmFtc1snaWQnXSkgKSApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
