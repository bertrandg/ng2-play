System.register(['angular2/angular2', './arrayTest/ViewArrayComponent'], function(exports_1) {
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
    var angular2_1, ViewArrayComponent_1;
    var ArrayTestRouteComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (ViewArrayComponent_1_1) {
                ViewArrayComponent_1 = ViewArrayComponent_1_1;
            }],
        execute: function() {
            ArrayTestRouteComponent = (function () {
                function ArrayTestRouteComponent() {
                    this.myTab1 = [
                        { name: 'Tim' },
                        { name: 'Jack' },
                        { name: 'Dude' },
                        { name: 'Franck' }
                    ];
                    this.myTab2 = ['Tim', 'Jack', 'Dude', 'Franck'];
                }
                ArrayTestRouteComponent.prototype.add = function (v) {
                    this.myTab1.push({ name: v });
                    this.myTab2.push(v);
                    console.log(v, this.myTab1, this.myTab2);
                };
                ArrayTestRouteComponent = __decorate([
                    angular2_1.Component({
                        selector: 'loop-route'
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgFor, ViewArrayComponent_1.ViewArrayComponent],
                        template: "\n        <div style=\"border: 1px solid #000; margin: 5px; padding: 5px;\">\n            <h1>Parent component</h1>\n            <p>TAB1 = <span *ng-for=\"#d of myTab1\">{{ d.name }} - </span></p>\n            <p>TAB2 = <span *ng-for=\"#t of myTab2\">{{ t }} - </span></p>\n            <input type=\"text\" #new />\n            <button (click)=\"add(new.value)\">ADD</button><br><br>\n            <view-array [tab1]=\"myTab1\" [tab2]=\"myTab2\"></view-array>\n            <div class=\"clearfix\"></div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArrayTestRouteComponent);
                return ArrayTestRouteComponent;
            })();
            exports_1("ArrayTestRouteComponent", ArrayTestRouteComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJyYXlUZXN0Um91dGVDb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXJyYXlUZXN0Um91dGVDb21wb25lbnQiLCJBcnJheVRlc3RSb3V0ZUNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFycmF5VGVzdFJvdXRlQ29tcG9uZW50LmFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkF1QklBO29CQUNJQyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQTt3QkFDZEEsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBRUE7d0JBQ2ZBLEVBQUVBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUVBO3dCQUNoQkEsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUE7d0JBQ2hCQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQTtxQkFDakJBLENBQUNBO29CQUVGQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxLQUFLQSxFQUFFQSxNQUFNQSxFQUFFQSxNQUFNQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDcERBLENBQUNBO2dCQUVERCxxQ0FBR0EsR0FBSEEsVUFBSUEsQ0FBUUE7b0JBQ1JFLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUNBLElBQUlBLEVBQUVBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBO29CQUM1QkEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDN0NBLENBQUNBO2dCQXRDTEY7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7cUJBQ3pCQSxDQUFDQTtvQkFFREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxFQUFFQSx1Q0FBa0JBLENBQUNBO3dCQUN2Q0EsUUFBUUEsRUFBRUEsOGdCQVVUQTtxQkFDSkEsQ0FBQ0E7OzRDQXNCREE7Z0JBQURBLDhCQUFDQTtZQUFEQSxDQXZDQSxBQXVDQ0EsSUFBQTtZQXZDRCw2REF1Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0FycmF5VGVzdFJvdXRlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcblxyXG5pbXBvcnQge1ZpZXdBcnJheUNvbXBvbmVudH0gZnJvbSAnLi9hcnJheVRlc3QvVmlld0FycmF5Q29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9vcC1yb3V0ZSdcclxufSlcclxuXHJcbkBWaWV3KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtOZ0ZvciwgVmlld0FycmF5Q29tcG9uZW50XSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkICMwMDA7IG1hcmdpbjogNXB4OyBwYWRkaW5nOiA1cHg7XCI+XHJcbiAgICAgICAgICAgIDxoMT5QYXJlbnQgY29tcG9uZW50PC9oMT5cclxuICAgICAgICAgICAgPHA+VEFCMSA9IDxzcGFuICpuZy1mb3I9XCIjZCBvZiBteVRhYjFcIj57eyBkLm5hbWUgfX0gLSA8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cD5UQUIyID0gPHNwYW4gKm5nLWZvcj1cIiN0IG9mIG15VGFiMlwiPnt7IHQgfX0gLSA8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmV3IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZChuZXcudmFsdWUpXCI+QUREPC9idXR0b24+PGJyPjxicj5cclxuICAgICAgICAgICAgPHZpZXctYXJyYXkgW3RhYjFdPVwibXlUYWIxXCIgW3RhYjJdPVwibXlUYWIyXCI+PC92aWV3LWFycmF5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheVRlc3RSb3V0ZUNvbXBvbmVudCB7XHJcbiAgICBteVRhYjE6IEFycmF5PE9iamVjdD5cclxuICAgIG15VGFiMjogQXJyYXk8c3RyaW5nPlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubXlUYWIxID0gW1xyXG4gICAgICAgIHsgbmFtZTogJ1RpbScgfSxcclxuICAgICAgICB7IG5hbWU6ICdKYWNrJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0R1ZGUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnRnJhbmNrJyB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5teVRhYjIgPSBbJ1RpbScsICdKYWNrJywgJ0R1ZGUnLCAnRnJhbmNrJ107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHY6c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5teVRhYjEucHVzaCh7bmFtZTogdn0pO1xyXG4gICAgICAgIHRoaXMubXlUYWIyLnB1c2godik7XHJcbiAgICAgICAgY29uc29sZS5sb2codiwgdGhpcy5teVRhYjEsIHRoaXMubXlUYWIyKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
