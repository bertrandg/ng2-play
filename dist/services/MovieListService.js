System.register(['angular2/angular2', 'lodash'], function(exports_1) {
    var angular2_1, lodash_1;
    var Movie, MovieListService;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            Movie = (function () {
                function Movie(name, year, score) {
                    if (name === void 0) { name = null; }
                    if (year === void 0) { year = null; }
                    if (score === void 0) { score = null; }
                    this.name = name;
                    this.year = year;
                    this.score = score;
                    this.id = Math.round(Math.random() * 1000000000);
                    this.selected = false;
                }
                return Movie;
            })();
            exports_1("Movie", Movie);
            MovieListService = (function () {
                function MovieListService() {
                    this.selectMovie = new angular2_1.EventEmitter();
                    this.list = [
                        new Movie('Star Wars 2', 1991, 3.5),
                        new Movie('Roger Rabbit', 2002, 3.4),
                        new Movie('Le Fils de l\'Homme', 2004, 4.6),
                        new Movie('Scream', 1995, 2.8),
                        new Movie('Interstellar', 2014, 3.8),
                    ];
                }
                MovieListService.prototype.add = function (m) {
                    this.list.push(m);
                };
                MovieListService.prototype.remove = function (m) {
                    var index = this.list.indexOf(m);
                    if (index !== -1) {
                        if (m.selected)
                            this.select();
                        this.list.splice(index, 1);
                    }
                };
                MovieListService.prototype.get = function (id) {
                    return lodash_1.find(this.list, { 'id': id });
                };
                MovieListService.prototype.update = function (id, edited) {
                    var m = lodash_1.find(this.list, { 'id': id });
                    if (m) {
                        m.name = edited.name;
                        m.year = edited.year;
                        m.score = edited.score;
                    }
                };
                MovieListService.prototype.select = function (m) {
                    if (m === void 0) { m = null; }
                    this.list.map(function (m) { return m.selected = false; });
                    if (m)
                        m.selected = true;
                    this.selectMovie.next(m);
                };
                return MovieListService;
            })();
            exports_1("MovieListService", MovieListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL01vdmllTGlzdFNlcnZpY2UudHMiXSwibmFtZXMiOlsiTW92aWUiLCJNb3ZpZS5jb25zdHJ1Y3RvciIsIk1vdmllTGlzdFNlcnZpY2UiLCJNb3ZpZUxpc3RTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiTW92aWVMaXN0U2VydmljZS5hZGQiLCJNb3ZpZUxpc3RTZXJ2aWNlLnJlbW92ZSIsIk1vdmllTGlzdFNlcnZpY2UuZ2V0IiwiTW92aWVMaXN0U2VydmljZS51cGRhdGUiLCJNb3ZpZUxpc3RTZXJ2aWNlLnNlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBSUlBLGVBQW1CQSxJQUFrQkEsRUFBU0EsSUFBa0JBLEVBQVNBLEtBQW1CQTtvQkFBaEZDLG9CQUF5QkEsR0FBekJBLFdBQXlCQTtvQkFBRUEsb0JBQXlCQSxHQUF6QkEsV0FBeUJBO29CQUFFQSxxQkFBMEJBLEdBQTFCQSxZQUEwQkE7b0JBQXpFQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFjQTtvQkFBU0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBY0E7b0JBQVNBLFVBQUtBLEdBQUxBLEtBQUtBLENBQWNBO29CQUg1RkEsT0FBRUEsR0FBV0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQUE7b0JBQ2pEQSxhQUFRQSxHQUFZQSxLQUFLQSxDQUFBQTtnQkFFc0VBLENBQUNBO2dCQUNwR0QsWUFBQ0E7WUFBREEsQ0FMQSxBQUtDQSxJQUFBO1lBTEQseUJBS0MsQ0FBQTtZQUdEO2dCQUlJRTtvQkFGQUMsZ0JBQVdBLEdBQUdBLElBQUlBLHVCQUFZQSxFQUFFQSxDQUFDQTtvQkFHN0JBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBO3dCQUNSQSxJQUFJQSxLQUFLQSxDQUFDQSxhQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQTt3QkFDbkNBLElBQUlBLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBO3dCQUNwQ0EsSUFBSUEsS0FBS0EsQ0FBQ0EscUJBQXFCQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxDQUFDQTt3QkFDM0NBLElBQUlBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLENBQUNBO3dCQUM5QkEsSUFBSUEsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsQ0FBQ0E7cUJBQ3ZDQSxDQUFDQTtnQkFDTkEsQ0FBQ0E7Z0JBRURELDhCQUFHQSxHQUFIQSxVQUFJQSxDQUFPQTtvQkFDUEUsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RCQSxDQUFDQTtnQkFFREYsaUNBQU1BLEdBQU5BLFVBQU9BLENBQU9BO29CQUNWRyxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDakNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNmQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQTs0QkFBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7d0JBQzdCQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDL0JBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREgsOEJBQUdBLEdBQUhBLFVBQUlBLEVBQVNBO29CQUNUSSxNQUFNQSxDQUFDQSxhQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtnQkFDekNBLENBQUNBO2dCQUVESixpQ0FBTUEsR0FBTkEsVUFBT0EsRUFBU0EsRUFBRUEsTUFBWUE7b0JBQzFCSyxJQUFJQSxDQUFDQSxHQUFVQSxhQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFFN0NBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNIQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDckJBLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO3dCQUNyQkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQzNCQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRURMLGlDQUFNQSxHQUFOQSxVQUFPQSxDQUFjQTtvQkFBZE0saUJBQWNBLEdBQWRBLFFBQWNBO29CQUNqQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBQ0EsQ0FBQ0EsSUFBS0EsT0FBQUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsRUFBbEJBLENBQWtCQSxDQUFDQSxDQUFDQTtvQkFDekNBLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLENBQUNBO3dCQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDeEJBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUM3QkEsQ0FBQ0E7Z0JBRUxOLHVCQUFDQTtZQUFEQSxDQTlDQSxBQThDQ0EsSUFBQTtZQTlDRCwrQ0E4Q0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9Nb3ZpZUxpc3RTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcclxuaW1wb3J0IHtmaW5kfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZpZSB7XHJcbiAgICBpZDogbnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEwMDAwMDAwMDApXHJcbiAgICBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nID0gbnVsbCwgcHVibGljIHllYXI6bnVtYmVyID0gbnVsbCwgcHVibGljIHNjb3JlOm51bWJlciA9IG51bGwpIHt9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTW92aWVMaXN0U2VydmljZSB7XHJcbiAgICBsaXN0OiBBcnJheTxNb3ZpZT5cclxuICAgIHNlbGVjdE1vdmllID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtcclxuICAgICAgICAgICAgbmV3IE1vdmllKCdTdGFyIFdhcnMgMicsIDE5OTEsIDMuNSksXHJcbiAgICAgICAgICAgIG5ldyBNb3ZpZSgnUm9nZXIgUmFiYml0JywgMjAwMiwgMy40KSxcclxuICAgICAgICAgICAgbmV3IE1vdmllKCdMZSBGaWxzIGRlIGxcXCdIb21tZScsIDIwMDQsIDQuNiksXHJcbiAgICAgICAgICAgIG5ldyBNb3ZpZSgnU2NyZWFtJywgMTk5NSwgMi44KSxcclxuICAgICAgICAgICAgbmV3IE1vdmllKCdJbnRlcnN0ZWxsYXInLCAyMDE0LCAzLjgpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG06TW92aWUpIHtcclxuICAgICAgICB0aGlzLmxpc3QucHVzaChtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUobTpNb3ZpZSkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubGlzdC5pbmRleE9mKG0pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgaWYobS5zZWxlY3RlZCkgdGhpcy5zZWxlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldChpZDpudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gZmluZCh0aGlzLmxpc3QsIHsgJ2lkJzogaWQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGlkOm51bWJlciwgZWRpdGVkOk1vdmllKSB7XHJcbiAgICAgICAgbGV0IG06IE1vdmllID0gZmluZCh0aGlzLmxpc3QsIHsgJ2lkJzogaWQgfSk7XHJcblxyXG4gICAgICAgIGlmKG0pIHtcclxuICAgICAgICAgICAgbS5uYW1lID0gZWRpdGVkLm5hbWU7XHJcbiAgICAgICAgICAgIG0ueWVhciA9IGVkaXRlZC55ZWFyO1xyXG4gICAgICAgICAgICBtLnNjb3JlID0gZWRpdGVkLnNjb3JlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QobTpNb3ZpZSA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmxpc3QubWFwKChtKSA9PiBtLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICAgIGlmKG0pIG0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW92aWUubmV4dChtKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
