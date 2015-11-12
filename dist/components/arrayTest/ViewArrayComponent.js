System.register(['angular2/angular2'], function(exports_1) {
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
    var angular2_1;
    var ViewArrayComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            ViewArrayComponent = (function () {
                function ViewArrayComponent() {
                }
                ViewArrayComponent.prototype.add = function (v) {
                    this.tab1.push({ name: v });
                    this.tab2.push(v);
                    console.log(v, this.tab1, this.tab2);
                };
                ViewArrayComponent = __decorate([
                    angular2_1.Component({
                        selector: 'view-array',
                        properties: [
                            'tab1',
                            'tab2'
                        ]
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgFor],
                        template: "\n        <div class=\"bloc\">\n            <h2>Child component</h2>\n            <p>TAB1 = <span *ng-for=\"#d of tab1\">{{ d.name }} - </span></p>\n            <p>TAB2 = <span *ng-for=\"#t of tab2\">{{ t }} - </span></p>\n            <input type=\"text\" #new />\n            <button (click)=\"add(new.value)\">ADD</button>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ViewArrayComponent);
                return ViewArrayComponent;
            })();
            exports_1("ViewArrayComponent", ViewArrayComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXJyYXlUZXN0L1ZpZXdBcnJheUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJWaWV3QXJyYXlDb21wb25lbnQiLCJWaWV3QXJyYXlDb21wb25lbnQuY29uc3RydWN0b3IiLCJWaWV3QXJyYXlDb21wb25lbnQuYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtnQkE4QkFDLENBQUNBO2dCQUxHRCxnQ0FBR0EsR0FBSEEsVUFBSUEsQ0FBUUE7b0JBQ1JFLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEVBQUNBLElBQUlBLEVBQUVBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBO29CQUMxQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDekNBLENBQUNBO2dCQTdCTEY7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxVQUFVQSxFQUFFQTs0QkFDUkEsTUFBTUE7NEJBQ05BLE1BQU1BO3lCQUNUQTtxQkFDSkEsQ0FBQ0E7b0JBRURBLGVBQUlBLENBQUNBO3dCQUNGQSxVQUFVQSxFQUFFQSxDQUFDQSxnQkFBS0EsQ0FBQ0E7d0JBQ25CQSxRQUFRQSxFQUFFQSw0VkFRVEE7cUJBQ0pBLENBQUNBOzt1Q0FXREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQTlCQSxBQThCQ0EsSUFBQTtZQTlCRCxtREE4QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FycmF5VGVzdC9WaWV3QXJyYXlDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2aWV3LWFycmF5JyxcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICAndGFiMScsXHJcbiAgICAgICAgJ3RhYjInXHJcbiAgICBdXHJcbn0pXHJcblxyXG5AVmlldyh7XHJcbiAgICBkaXJlY3RpdmVzOiBbTmdGb3JdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY1wiPlxyXG4gICAgICAgICAgICA8aDI+Q2hpbGQgY29tcG9uZW50PC9oMj5cclxuICAgICAgICAgICAgPHA+VEFCMSA9IDxzcGFuICpuZy1mb3I9XCIjZCBvZiB0YWIxXCI+e3sgZC5uYW1lIH19IC0gPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+VEFCMiA9IDxzcGFuICpuZy1mb3I9XCIjdCBvZiB0YWIyXCI+e3sgdCB9fSAtIDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuZXcgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkKG5ldy52YWx1ZSlcIj5BREQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3QXJyYXlDb21wb25lbnQge1xyXG4gICAgdGFiMTogQXJyYXk8T2JqZWN0PlxyXG4gICAgdGFiMjogQXJyYXk8c3RyaW5nPlxyXG5cclxuICAgIGFkZCh2OnN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGFiMS5wdXNoKHtuYW1lOiB2fSk7XHJcbiAgICAgICAgdGhpcy50YWIyLnB1c2godik7XHJcbiAgICAgICAgY29uc29sZS5sb2codiwgdGhpcy50YWIxLCB0aGlzLnRhYjIpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
