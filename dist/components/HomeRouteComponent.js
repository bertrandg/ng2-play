System.register(['angular2/angular2', './movie/MovieListComponent', './movie/MovieAddComponent', './segmentBuilder/SegmentBuilderComponent', './../services/MovieListService'], function(exports_1) {
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
    var angular2_1, MovieListComponent_1, MovieAddComponent_1, SegmentBuilderComponent_1, MovieListService_1;
    var HomeRouteComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (MovieListComponent_1_1) {
                MovieListComponent_1 = MovieListComponent_1_1;
            },
            function (MovieAddComponent_1_1) {
                MovieAddComponent_1 = MovieAddComponent_1_1;
            },
            function (SegmentBuilderComponent_1_1) {
                SegmentBuilderComponent_1 = SegmentBuilderComponent_1_1;
            },
            function (MovieListService_1_1) {
                MovieListService_1 = MovieListService_1_1;
            }],
        execute: function() {
            HomeRouteComponent = (function () {
                function HomeRouteComponent(movieList) {
                    this.movieList = movieList;
                }
                HomeRouteComponent = __decorate([
                    angular2_1.Component({
                        selector: 'home'
                    }),
                    angular2_1.View({
                        directives: [SegmentBuilderComponent_1.SegmentBuilderComponent, MovieListComponent_1.MovieListComponent, MovieAddComponent_1.MovieAddComponent],
                        template: "\n        <div>\n            <segment-builder></segment-builder> \n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [MovieListService_1.MovieListService])
                ], HomeRouteComponent);
                return HomeRouteComponent;
            })();
            exports_1("HomeRouteComponent", HomeRouteComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSG9tZVJvdXRlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkhvbWVSb3V0ZUNvbXBvbmVudCIsIkhvbWVSb3V0ZUNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFhSUEsNEJBQW1CQSxTQUEyQkE7b0JBQTNCQyxjQUFTQSxHQUFUQSxTQUFTQSxDQUFrQkE7Z0JBQUdBLENBQUNBO2dCQWJ0REQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsTUFBTUE7cUJBQ25CQSxDQUFDQTtvQkFDREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLGlEQUF1QkEsRUFBRUEsdUNBQWtCQSxFQUFFQSxxQ0FBaUJBLENBQUNBO3dCQUM1RUEsUUFBUUEsRUFBRUEseUZBSVRBO3FCQUNKQSxDQUFDQTs7dUNBSURBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FkQSxBQWNDQSxJQUFBO1lBZEQsbURBY0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0hvbWVSb3V0ZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcbmltcG9ydCB7TW92aWVMaXN0Q29tcG9uZW50fSBmcm9tICcuL21vdmllL01vdmllTGlzdENvbXBvbmVudCc7XHJcbmltcG9ydCB7TW92aWVBZGRDb21wb25lbnR9IGZyb20gJy4vbW92aWUvTW92aWVBZGRDb21wb25lbnQnO1xyXG5pbXBvcnQge1NlZ21lbnRCdWlsZGVyQ29tcG9uZW50fSBmcm9tICcuL3NlZ21lbnRCdWlsZGVyL1NlZ21lbnRCdWlsZGVyQ29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7TW92aWVMaXN0U2VydmljZSwgTW92aWV9IGZyb20gJy4vLi4vc2VydmljZXMvTW92aWVMaXN0U2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZSdcclxufSlcclxuQFZpZXcoe1xyXG4gICAgZGlyZWN0aXZlczogW1NlZ21lbnRCdWlsZGVyQ29tcG9uZW50LCBNb3ZpZUxpc3RDb21wb25lbnQsIE1vdmllQWRkQ29tcG9uZW50XSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlZ21lbnQtYnVpbGRlcj48L3NlZ21lbnQtYnVpbGRlcj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb3ZpZUxpc3Q6IE1vdmllTGlzdFNlcnZpY2UpIHt9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
