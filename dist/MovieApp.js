System.register(['angular2/angular2', 'angular2/router', './components/HomeRouteComponent', './components/ListRouteComponent', './components/EditRouteComponent', './components/LoopRouteComponent', './components/ArrayTestRouteComponent', './services/MovieListService', './services/SegmentBuilderService'], function(exports_1) {
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
    var angular2_1, router_1, router_2, router_3, HomeRouteComponent_1, ListRouteComponent_1, EditRouteComponent_1, LoopRouteComponent_1, ArrayTestRouteComponent_1, MovieListService_1, SegmentBuilderService_1;
    var MovieApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
            },
            function (HomeRouteComponent_1_1) {
                HomeRouteComponent_1 = HomeRouteComponent_1_1;
            },
            function (ListRouteComponent_1_1) {
                ListRouteComponent_1 = ListRouteComponent_1_1;
            },
            function (EditRouteComponent_1_1) {
                EditRouteComponent_1 = EditRouteComponent_1_1;
            },
            function (LoopRouteComponent_1_1) {
                LoopRouteComponent_1 = LoopRouteComponent_1_1;
            },
            function (ArrayTestRouteComponent_1_1) {
                ArrayTestRouteComponent_1 = ArrayTestRouteComponent_1_1;
            },
            function (MovieListService_1_1) {
                MovieListService_1 = MovieListService_1_1;
            },
            function (SegmentBuilderService_1_1) {
                SegmentBuilderService_1 = SegmentBuilderService_1_1;
            }],
        execute: function() {
            MovieApp = (function () {
                function MovieApp() {
                }
                MovieApp = __decorate([
                    angular2_1.Component({
                        selector: 'movie-app'
                    }),
                    router_2.RouteConfig([
                        { path: '/', component: HomeRouteComponent_1.HomeRouteComponent, as: 'Home' },
                        { path: '/list', component: ListRouteComponent_1.ListRouteComponent, as: 'List' },
                        { path: '/edit/:id', component: EditRouteComponent_1.EditRouteComponent, as: 'Edit' },
                        { path: '/loop/...', component: LoopRouteComponent_1.LoopRouteComponent, as: 'Loop' },
                        { path: '/array-test', component: ArrayTestRouteComponent_1.ArrayTestRouteComponent, as: 'ArrayTest' }
                    ]),
                    angular2_1.View({
                        directives: [router_3.RouterOutlet, router_3.RouterLink],
                        template: "\n        <div>\n            <ul>\n                <li><a [router-link]=\"['./Home']\">Home</a></li>\n                <li><a [router-link]=\"['./List']\">Liste</a></li>\n                <li><a [router-link]=\"['./Loop/LooperHome']\">Loop</a></li>\n                <li><a [router-link]=\"['./ArrayTest']\">Array test</a></li>\n            </ul> \n            <router-outlet></router-outlet>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieApp);
                return MovieApp;
            })();
            exports_1("MovieApp", MovieApp);
            angular2_1.bootstrap(MovieApp, [MovieListService_1.MovieListService, SegmentBuilderService_1.SegmentBuilderService, router_1.ROUTER_PROVIDERS, angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vdmllQXBwLnRzIl0sIm5hbWVzIjpbIk1vdmllQXBwIiwiTW92aWVBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQUE7Z0JBMEJ1QkMsQ0FBQ0E7Z0JBMUJ4QkQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsV0FBV0E7cUJBQ3hCQSxDQUFDQTtvQkFFREEsb0JBQVdBLENBQUNBO3dCQUNUQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSx1Q0FBa0JBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO3dCQUN4REEsRUFBRUEsSUFBSUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0EsRUFBRUEsdUNBQWtCQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFFQTt3QkFDNURBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLHVDQUFrQkEsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7d0JBQ2hFQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxTQUFTQSxFQUFFQSx1Q0FBa0JBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUVBO3dCQUNoRUEsRUFBRUEsSUFBSUEsRUFBRUEsYUFBYUEsRUFBRUEsU0FBU0EsRUFBRUEsaURBQXVCQSxFQUFFQSxFQUFFQSxFQUFFQSxXQUFXQSxFQUFFQTtxQkFDL0VBLENBQUNBO29CQUVEQSxlQUFJQSxDQUFDQTt3QkFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTt3QkFDdENBLFFBQVFBLEVBQUVBLDZaQVVUQTtxQkFDSkEsQ0FBQ0E7OzZCQUNzQkE7Z0JBQURBLGVBQUNBO1lBQURBLENBMUJ2QixBQTBCd0JBLElBQUE7WUExQnhCLCtCQTBCd0IsQ0FBQTtZQUV4QixvQkFBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLG1DQUFnQixFQUFFLDZDQUFxQixFQUFFLHlCQUFnQixFQUFFLGVBQUksQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2QkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJNb3ZpZUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXAsIE5nRm9yLCBiaW5kfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBMb2NhdGlvbiwgUm91dGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JvdXRlck91dGxldCwgUm91dGVyTGlua30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtIb21lUm91dGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9Ib21lUm91dGVDb21wb25lbnQnO1xuaW1wb3J0IHtMaXN0Um91dGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9MaXN0Um91dGVDb21wb25lbnQnO1xuaW1wb3J0IHtFZGl0Um91dGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9FZGl0Um91dGVDb21wb25lbnQnO1xuaW1wb3J0IHtMb29wUm91dGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9Mb29wUm91dGVDb21wb25lbnQnO1xuaW1wb3J0IHtBcnJheVRlc3RSb3V0ZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL0FycmF5VGVzdFJvdXRlQ29tcG9uZW50JztcblxuaW1wb3J0IHtNb3ZpZUxpc3RTZXJ2aWNlLCBNb3ZpZX0gZnJvbSAnLi9zZXJ2aWNlcy9Nb3ZpZUxpc3RTZXJ2aWNlJztcbmltcG9ydCB7U2VnbWVudEJ1aWxkZXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL1NlZ21lbnRCdWlsZGVyU2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbW92aWUtYXBwJ1xufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lUm91dGVDb21wb25lbnQsIGFzOiAnSG9tZScgfSxcbiAgICB7IHBhdGg6ICcvbGlzdCcsIGNvbXBvbmVudDogTGlzdFJvdXRlQ29tcG9uZW50LCBhczogJ0xpc3QnIH0sXG4gICAgeyBwYXRoOiAnL2VkaXQvOmlkJywgY29tcG9uZW50OiBFZGl0Um91dGVDb21wb25lbnQsIGFzOiAnRWRpdCcgfSxcbiAgICB7IHBhdGg6ICcvbG9vcC8uLi4nLCBjb21wb25lbnQ6IExvb3BSb3V0ZUNvbXBvbmVudCwgYXM6ICdMb29wJyB9LFxuICAgIHsgcGF0aDogJy9hcnJheS10ZXN0JywgY29tcG9uZW50OiBBcnJheVRlc3RSb3V0ZUNvbXBvbmVudCwgYXM6ICdBcnJheVRlc3QnIH1cbl0pXG5cbkBWaWV3KHtcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyLWxpbmtdPVwiWycuL0hvbWUnXVwiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlci1saW5rXT1cIlsnLi9MaXN0J11cIj5MaXN0ZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyLWxpbmtdPVwiWycuL0xvb3AvTG9vcGVySG9tZSddXCI+TG9vcDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyLWxpbmtdPVwiWycuL0FycmF5VGVzdCddXCI+QXJyYXkgdGVzdDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTW92aWVBcHAge31cbiAgXG5ib290c3RyYXAoTW92aWVBcHAsIFtNb3ZpZUxpc3RTZXJ2aWNlLCBTZWdtZW50QnVpbGRlclNlcnZpY2UsIFJPVVRFUl9QUk9WSURFUlMsIGJpbmQoTG9jYXRpb25TdHJhdGVneSkudG9DbGFzcyhIYXNoTG9jYXRpb25TdHJhdGVneSldKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
