System.register(['angular2/angular2', 'lodash', './../../services/MovieListService'], function(exports_1) {
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
    var angular2_1, lodash_1, MovieListService_1;
    var MovieEditComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (MovieListService_1_1) {
                MovieListService_1 = MovieListService_1_1;
            }],
        execute: function() {
            MovieEditComponent = (function () {
                function MovieEditComponent(movieList) {
                    var _this = this;
                    this.movieList = movieList;
                    this.vm = {};
                    this.currentMovie = null;
                    this.editMovie = null;
                    this.movieList.selectMovie.toRx().subscribe(function (m) { _this.movieChanged(m); });
                }
                MovieEditComponent.prototype.movieChanged = function (m) {
                    if (m === void 0) { m = null; }
                    this.currentMovie = m;
                    this.editMovie = lodash_1.cloneDeep(m);
                };
                MovieEditComponent.prototype.edit = function (form) {
                    if (form.valid) {
                        this.movieList.update(this.currentMovie.id, this.editMovie);
                        this.movieList.select();
                    }
                };
                MovieEditComponent.prototype.cancel = function () {
                    this.movieList.select();
                };
                MovieEditComponent = __decorate([
                    angular2_1.Component({
                        selector: 'movie-edit',
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgIf, angular2_1.FORM_DIRECTIVES],
                        template: "\n        <div class=\"bloc\">\n            <h1 *ng-if=\"currentMovie == null\">Aucun film s\u00E9lectionn\u00E9..</h1>\n            <div *ng-if=\"currentMovie != null\">\n                <form #f=\"form\" (ng-submit)=\"edit(f)\" novalidate>\n                    <h1>Edition d'un film: {{ currentMovie.name }}</h1>\n                    <input ng-control=\"name\" [(ng-model)]=\"editMovie.name\" type=\"text\" placeholder=\"nom\" required />\n                    <input ng-control=\"year\" [(ng-model)]=\"editMovie.year\" type=\"number\" placeholder=\"ann\u00E9e\" required />\n                    <input ng-control=\"score\" [(ng-model)]=\"editMovie.score\" type=\"number\" placeholder=\"score\" required />\n                    <button type=\"submit\" [disabled]=\"!f.valid\">Enregistrer</button>\n                </form>\n                <button (click)=\"cancel()\">Annuler</button>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [MovieListService_1.MovieListService])
                ], MovieEditComponent);
                return MovieEditComponent;
            })();
            exports_1("MovieEditComponent", MovieEditComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWUvTW92aWVFZGl0Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIk1vdmllRWRpdENvbXBvbmVudCIsIk1vdmllRWRpdENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIk1vdmllRWRpdENvbXBvbmVudC5tb3ZpZUNoYW5nZWQiLCJNb3ZpZUVkaXRDb21wb25lbnQuZWRpdCIsIk1vdmllRWRpdENvbXBvbmVudC5jYW5jZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBNEJJQSw0QkFBbUJBLFNBQTJCQTtvQkE1QmxEQyxpQkFvRENBO29CQXhCc0JBLGNBQVNBLEdBQVRBLFNBQVNBLENBQWtCQTtvQkFKOUNBLE9BQUVBLEdBQVVBLEVBQUVBLENBQUFBO29CQUNkQSxpQkFBWUEsR0FBU0EsSUFBSUEsQ0FBQUE7b0JBQ3pCQSxjQUFTQSxHQUFTQSxJQUFJQSxDQUFBQTtvQkFRbEJBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLENBQU9BLElBQU9BLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4RkEsQ0FBQ0E7Z0JBRURELHlDQUFZQSxHQUFaQSxVQUFhQSxDQUFjQTtvQkFBZEUsaUJBQWNBLEdBQWRBLFFBQWNBO29CQUN2QkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3RCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxrQkFBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFFREYsaUNBQUlBLEdBQUpBLFVBQUtBLElBQVFBO29CQUNURyxFQUFFQSxDQUFBQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDWkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7d0JBQzVEQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtvQkFDNUJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREgsbUNBQU1BLEdBQU5BO29CQUNJSSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDNUJBLENBQUNBO2dCQW5ETEo7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7cUJBQ3pCQSxDQUFDQTtvQkFFREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLGVBQUlBLEVBQUVBLDBCQUFlQSxDQUFDQTt3QkFDbkNBLFFBQVFBLEVBQUVBLGk2QkFjVEE7cUJBQ0pBLENBQUNBOzt1Q0ErQkRBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FwREEsQUFvRENBLElBQUE7WUFwREQsbURBb0RDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9tb3ZpZS9Nb3ZpZUVkaXRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdJZiwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcbi8vaW1wb3J0IHtPYnNlcnZlciwgT2JzZXJ2YWJsZX0gZnJvbSAncnguYWxsJztcclxuaW1wb3J0IHtjbG9uZURlZXB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQge01vdmllTGlzdFNlcnZpY2UsIE1vdmllfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL01vdmllTGlzdFNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtb3ZpZS1lZGl0JyxcclxufSlcclxuXHJcbkBWaWV3KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtOZ0lmLCBGT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY1wiPlxyXG4gICAgICAgICAgICA8aDEgKm5nLWlmPVwiY3VycmVudE1vdmllID09IG51bGxcIj5BdWN1biBmaWxtIHPDqWxlY3Rpb25uw6kuLjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nLWlmPVwiY3VycmVudE1vdmllICE9IG51bGxcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtICNmPVwiZm9ybVwiIChuZy1zdWJtaXQpPVwiZWRpdChmKVwiIG5vdmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkVkaXRpb24gZCd1biBmaWxtOiB7eyBjdXJyZW50TW92aWUubmFtZSB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5nLWNvbnRyb2w9XCJuYW1lXCIgWyhuZy1tb2RlbCldPVwiZWRpdE1vdmllLm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibm9tXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmctY29udHJvbD1cInllYXJcIiBbKG5nLW1vZGVsKV09XCJlZGl0TW92aWUueWVhclwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cImFubsOpZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5nLWNvbnRyb2w9XCJzY29yZVwiIFsobmctbW9kZWwpXT1cImVkaXRNb3ZpZS5zY29yZVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cInNjb3JlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIWYudmFsaWRcIj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2FuY2VsKClcIj5Bbm51bGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmllRWRpdENvbXBvbmVudCB7XHJcbiAgICB2bTpPYmplY3QgPSB7fVxyXG4gICAgY3VycmVudE1vdmllOk1vdmllID0gbnVsbFxyXG4gICAgZWRpdE1vdmllOk1vdmllID0gbnVsbFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb3ZpZUxpc3Q6IE1vdmllTGlzdFNlcnZpY2UpIHtcclxuICAgICAgICAvKnRoaXMubW92aWVMaXN0LnNlbGVjdE1vdmllLnRvUngoKS5zdWJzY3JpYmUoT2JzZXJ2ZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAobSkgPT4geyB0aGlzLm1vdmllQ2hhbmdlZChtKTsgfSxcclxuICAgICAgICAgICAgKGVycikgPT4geyB9LFxyXG4gICAgICAgICAgICAoZSkgPT4geyB9XHJcbiAgICAgICAgKSk7Ki9cclxuICAgICAgICB0aGlzLm1vdmllTGlzdC5zZWxlY3RNb3ZpZS50b1J4KCkuc3Vic2NyaWJlKChtOk1vdmllKSA9PiB7IHRoaXMubW92aWVDaGFuZ2VkKG0pOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZpZUNoYW5nZWQobTpNb3ZpZSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb3ZpZSA9IG07XHJcbiAgICAgICAgdGhpcy5lZGl0TW92aWUgPSBjbG9uZURlZXAobSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdChmb3JtOmFueSkge1xyXG4gICAgICAgIGlmKGZvcm0udmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZpZUxpc3QudXBkYXRlKHRoaXMuY3VycmVudE1vdmllLmlkLCB0aGlzLmVkaXRNb3ZpZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW92aWVMaXN0LnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZpZUxpc3Quc2VsZWN0KCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
