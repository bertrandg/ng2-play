System.register(['angular2/angular2', 'angular2/router', './../../services/MovieListService'], function(exports_1) {
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
    var angular2_1, router_1, MovieListService_1;
    var MovieListItemComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (MovieListService_1_1) {
                MovieListService_1 = MovieListService_1_1;
            }],
        execute: function() {
            MovieListItemComponent = (function () {
                function MovieListItemComponent(movieList, elRef) {
                    this.movieList = movieList;
                    this.elRef = elRef;
                    this.isEditable = true;
                    this.el = elRef.nativeElement;
                }
                MovieListItemComponent.prototype.click = function () {
                    if (!this.isEditable)
                        return;
                    this.highlight(false);
                    this.movieList.select(this.m);
                };
                MovieListItemComponent.prototype.highlight = function (b) {
                    if (!this.isEditable)
                        return;
                    if (b) {
                        this.el.style.outline = '2px solid yellow';
                    }
                    else {
                        this.el.style.outline = '0';
                    }
                };
                MovieListItemComponent.prototype.onInit = function () {
                    console.log('onInit', this);
                };
                MovieListItemComponent.prototype.onChange = function () {
                    console.log('onChange', this);
                };
                MovieListItemComponent.prototype.oncheck = function () {
                    console.log('onCheck', this);
                };
                MovieListItemComponent.prototype.onAllChangesDone = function () {
                    console.log('onAllChangesDone', this);
                };
                MovieListItemComponent.prototype.onDestroy = function () {
                    console.log('onDestroy', this);
                };
                MovieListItemComponent = __decorate([
                    angular2_1.Component({
                        selector: '[movie-list-item]',
                        properties: [
                            'm: item',
                            'isEditable'
                        ],
                        host: {
                            'class': 'item',
                            '(mouseover)': 'highlight(true)',
                            '(mouseout)': 'highlight(false)',
                            '(click)': 'click()'
                        }
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgIf, router_1.RouterLink],
                        template: "\n        <h3 [class.isselected]=\"m.selected\">\n            {{ m.name + ' - ' + m.year + ' - ' + m.score }}\n            <span *ng-if=\"isEditable\">\n                <button (click)=\"movieList.remove(m)\">REMOVE</button>\n                <button [router-link]=\"['/Edit', {id: m.id}]\">EDIT</burron>\n            </span>\n        </h3>\n    "
                    }), 
                    __metadata('design:paramtypes', [MovieListService_1.MovieListService, angular2_1.ElementRef])
                ], MovieListItemComponent);
                return MovieListItemComponent;
            })();
            exports_1("MovieListItemComponent", MovieListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92aWUvTW92aWVMaXN0SXRlbUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RJdGVtQ29tcG9uZW50IiwiTW92aWVMaXN0SXRlbUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIk1vdmllTGlzdEl0ZW1Db21wb25lbnQuY2xpY2siLCJNb3ZpZUxpc3RJdGVtQ29tcG9uZW50LmhpZ2hsaWdodCIsIk1vdmllTGlzdEl0ZW1Db21wb25lbnQub25Jbml0IiwiTW92aWVMaXN0SXRlbUNvbXBvbmVudC5vbkNoYW5nZSIsIk1vdmllTGlzdEl0ZW1Db21wb25lbnQub25jaGVjayIsIk1vdmllTGlzdEl0ZW1Db21wb25lbnQub25BbGxDaGFuZ2VzRG9uZSIsIk1vdmllTGlzdEl0ZW1Db21wb25lbnQub25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQWdDSUEsZ0NBQW1CQSxTQUEyQkEsRUFBU0EsS0FBaUJBO29CQUFyREMsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBa0JBO29CQUFTQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFZQTtvQkFKeEVBLGVBQVVBLEdBQVlBLElBQUlBLENBQUFBO29CQUt0QkEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFFREQsc0NBQUtBLEdBQUxBO29CQUNJRSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFBQ0EsTUFBTUEsQ0FBQ0E7b0JBRTdCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDdEJBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNsQ0EsQ0FBQ0E7Z0JBRURGLDBDQUFTQSxHQUFUQSxVQUFVQSxDQUFTQTtvQkFDZkcsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7d0JBQUNBLE1BQU1BLENBQUNBO29CQUU3QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ0hBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLGtCQUFrQkEsQ0FBQ0E7b0JBQy9DQSxDQUFDQTtvQkFDREEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ0ZBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEdBQUdBLENBQUNBO29CQUNoQ0EsQ0FBQ0E7Z0JBQ0xBLENBQUNBO2dCQUVESCx1Q0FBTUEsR0FBTkE7b0JBQ0lJLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBQ0RKLHlDQUFRQSxHQUFSQTtvQkFDSUssT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFDREwsd0NBQU9BLEdBQVBBO29CQUNJTSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxTQUFTQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDakNBLENBQUNBO2dCQUNETixpREFBZ0JBLEdBQWhCQTtvQkFDSU8sT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQUNEUCwwQ0FBU0EsR0FBVEE7b0JBQ0lRLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7Z0JBcEVMUjtvQkFBQ0Esb0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxtQkFBbUJBO3dCQUM3QkEsVUFBVUEsRUFBRUE7NEJBQ1JBLFNBQVNBOzRCQUNUQSxZQUFZQTt5QkFDZkE7d0JBQ0RBLElBQUlBLEVBQUVBOzRCQUNGQSxPQUFPQSxFQUFFQSxNQUFNQTs0QkFDZkEsYUFBYUEsRUFBRUEsaUJBQWlCQTs0QkFDaENBLFlBQVlBLEVBQUVBLGtCQUFrQkE7NEJBQ2hDQSxTQUFTQSxFQUFFQSxTQUFTQTt5QkFDdkJBO3FCQUNKQSxDQUFDQTtvQkFFREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLGVBQUlBLEVBQUVBLG1CQUFVQSxDQUFDQTt3QkFDOUJBLFFBQVFBLEVBQUVBLDJWQVFUQTtxQkFDSkEsQ0FBQ0E7OzJDQTRDREE7Z0JBQURBLDZCQUFDQTtZQUFEQSxDQXJFQSxBQXFFQ0EsSUFBQTtZQXJFRCwyREFxRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL21vdmllL01vdmllTGlzdEl0ZW1Db21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdGb3IsIE5nSWYsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcclxuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtNb3ZpZUxpc3RTZXJ2aWNlLCBNb3ZpZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9Nb3ZpZUxpc3RTZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdbbW92aWUtbGlzdC1pdGVtXScsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgJ206IGl0ZW0nLFxyXG4gICAgICAgICdpc0VkaXRhYmxlJ1xyXG4gICAgXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnY2xhc3MnOiAnaXRlbScsXHJcbiAgICAgICAgJyhtb3VzZW92ZXIpJzogJ2hpZ2hsaWdodCh0cnVlKScsXHJcbiAgICAgICAgJyhtb3VzZW91dCknOiAnaGlnaGxpZ2h0KGZhbHNlKScsXHJcbiAgICAgICAgJyhjbGljayknOiAnY2xpY2soKSdcclxuICAgIH1cclxufSlcclxuXHJcbkBWaWV3KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtOZ0lmLCBSb3V0ZXJMaW5rXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGgzIFtjbGFzcy5pc3NlbGVjdGVkXT1cIm0uc2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAge3sgbS5uYW1lICsgJyAtICcgKyBtLnllYXIgKyAnIC0gJyArIG0uc2NvcmUgfX1cclxuICAgICAgICAgICAgPHNwYW4gKm5nLWlmPVwiaXNFZGl0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibW92aWVMaXN0LnJlbW92ZShtKVwiPlJFTU9WRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBbcm91dGVyLWxpbmtdPVwiWycvRWRpdCcsIHtpZDogbS5pZH1dXCI+RURJVDwvYnVycm9uPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZUxpc3RJdGVtQ29tcG9uZW50IHtcclxuICAgIGlzRWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBtOk1vdmllICBcclxuICAgIGVsOkhUTUxFbGVtZW50XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG1vdmllTGlzdDogTW92aWVMaXN0U2VydmljZSwgcHVibGljIGVsUmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5lbCA9IGVsUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRWRpdGFibGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHQoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubW92aWVMaXN0LnNlbGVjdCh0aGlzLm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZ2hsaWdodChiOmJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFZGl0YWJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZihiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUub3V0bGluZSA9ICcycHggc29saWQgeWVsbG93JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUub3V0bGluZSA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkluaXQnLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkNoYW5nZScsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25jaGVjaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25DaGVjaycsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25BbGxDaGFuZ2VzRG9uZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25BbGxDaGFuZ2VzRG9uZScsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkRlc3Ryb3knLCB0aGlzKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
