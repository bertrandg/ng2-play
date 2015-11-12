System.register(['angular2/angular2', './../../services/SegmentBuilderService'], function(exports_1) {
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
    var angular2_1, SegmentBuilderService_1;
    var SbCriterionComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (SegmentBuilderService_1_1) {
                SegmentBuilderService_1 = SegmentBuilderService_1_1;
            }],
        execute: function() {
            SbCriterionComponent = (function () {
                function SbCriterionComponent(segmentBuilder) {
                    this.segmentBuilder = segmentBuilder;
                }
                SbCriterionComponent = __decorate([
                    angular2_1.Component({
                        selector: 'sb-criterion',
                        properties: [
                            'parentgroup',
                            'criterion'
                        ],
                        host: {
                            '[class.recentAction]': 'criterion.recentAction'
                        }
                    }),
                    angular2_1.View({
                        directives: [angular2_1.FORM_DIRECTIVES],
                        template: "\n        <div class=\"form-inline\">\n            <span class=\"badge\">[{{ criterion.position }}] Criterion ({{ criterion.id }})</span> - \n            <input class=\"form-control\" type=\"text\" [(ng-model)]=\"criterion.name\" />\n            <button class=\"btn btn-danger\" (click)=\"segmentBuilder.removeElement(parentgroup, criterion)\"><span class=\"glyphicon glyphicon-trash\"></span></button>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [SegmentBuilderService_1.SegmentBuilderService])
                ], SbCriterionComponent);
                return SbCriterionComponent;
            })();
            exports_1("SbCriterionComponent", SbCriterionComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudEJ1aWxkZXIvU2JDcml0ZXJpb25Db21wb25lbnQudHMiXSwibmFtZXMiOlsiU2JDcml0ZXJpb25Db21wb25lbnQiLCJTYkNyaXRlcmlvbkNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkF5QklBLDhCQUFvQkEsY0FBb0NBO29CQUFwQ0MsbUJBQWNBLEdBQWRBLGNBQWNBLENBQXNCQTtnQkFBR0EsQ0FBQ0E7Z0JBekJoRUQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsY0FBY0E7d0JBQ3hCQSxVQUFVQSxFQUFFQTs0QkFDUkEsYUFBYUE7NEJBQ2JBLFdBQVdBO3lCQUNkQTt3QkFDREEsSUFBSUEsRUFBRUE7NEJBQ0ZBLHNCQUFzQkEsRUFBRUEsd0JBQXdCQTt5QkFDbkRBO3FCQUNKQSxDQUFDQTtvQkFDREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxDQUFDQTt3QkFDN0JBLFFBQVFBLEVBQUVBLDBhQU1UQTtxQkFDSkEsQ0FBQ0E7O3lDQU9EQTtnQkFBREEsMkJBQUNBO1lBQURBLENBMUJBLEFBMEJDQSxJQUFBO1lBMUJELHVEQTBCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VnbWVudEJ1aWxkZXIvU2JDcml0ZXJpb25Db21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgTmdGb3IsIEZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xyXG5cclxuaW1wb3J0IHtTYkdyb3VwLCBTYkNyaXRlcmlvbiwgU2VnbWVudEJ1aWxkZXJTZXJ2aWNlfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL1NlZ21lbnRCdWlsZGVyU2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NiLWNyaXRlcmlvbicsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgJ3BhcmVudGdyb3VwJyxcclxuICAgICAgICAnY3JpdGVyaW9uJ1xyXG4gICAgXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLnJlY2VudEFjdGlvbl0nOiAnY3JpdGVyaW9uLnJlY2VudEFjdGlvbidcclxuICAgIH1cclxufSlcclxuQFZpZXcoe1xyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+W3t7IGNyaXRlcmlvbi5wb3NpdGlvbiB9fV0gQ3JpdGVyaW9uICh7eyBjcml0ZXJpb24uaWQgfX0pPC9zcGFuPiAtIFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIFsobmctbW9kZWwpXT1cImNyaXRlcmlvbi5uYW1lXCIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cInNlZ21lbnRCdWlsZGVyLnJlbW92ZUVsZW1lbnQocGFyZW50Z3JvdXAsIGNyaXRlcmlvbilcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcIj48L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2JDcml0ZXJpb25Db21wb25lbnQge1xyXG4gICAgcGFyZW50Z3JvdXA6U2JHcm91cFxyXG4gICAgY3JpdGVyaW9uOlNiQ3JpdGVyaW9uXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWdtZW50QnVpbGRlcjpTZWdtZW50QnVpbGRlclNlcnZpY2UpIHt9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
