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
    var SbSegmentComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (SegmentBuilderService_1_1) {
                SegmentBuilderService_1 = SegmentBuilderService_1_1;
            }],
        execute: function() {
            SbSegmentComponent = (function () {
                function SbSegmentComponent(segmentBuilder) {
                    this.segmentBuilder = segmentBuilder;
                }
                SbSegmentComponent = __decorate([
                    angular2_1.Component({
                        selector: 'sb-segment',
                        properties: [
                            'parentgroup',
                            'segment'
                        ],
                        host: {
                            '[class.recentAction]': 'segment.recentAction'
                        }
                    }),
                    angular2_1.View({
                        directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
                        template: "\n        <div class=\"form-inline\">\n            <span class=\"badge\">[{{ segment.position }}] Segment ({{ segment.id }})</span> - \n            <input class=\"form-control\" type=\"text\" [(ng-model)]=\"segment.name\" />\n            <button class=\"btn btn-danger\" (click)=\"segmentBuilder.removeElement(parentgroup, segment)\"><span class=\"glyphicon glyphicon-trash\"></span></button>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [SegmentBuilderService_1.SegmentBuilderService])
                ], SbSegmentComponent);
                return SbSegmentComponent;
            })();
            exports_1("SbSegmentComponent", SbSegmentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudEJ1aWxkZXIvU2JTZWdtZW50Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlNiU2VnbWVudENvbXBvbmVudCIsIlNiU2VnbWVudENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkF5QklBLDRCQUFvQkEsY0FBb0NBO29CQUFwQ0MsbUJBQWNBLEdBQWRBLGNBQWNBLENBQXNCQTtnQkFBR0EsQ0FBQ0E7Z0JBekJoRUQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7d0JBQ3RCQSxVQUFVQSxFQUFFQTs0QkFDUkEsYUFBYUE7NEJBQ2JBLFNBQVNBO3lCQUNaQTt3QkFDREEsSUFBSUEsRUFBRUE7NEJBQ0ZBLHNCQUFzQkEsRUFBRUEsc0JBQXNCQTt5QkFDakRBO3FCQUNKQSxDQUFDQTtvQkFDREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFlQSxFQUFFQSwwQkFBZUEsQ0FBQ0E7d0JBQzlDQSxRQUFRQSxFQUFFQSxnYUFNVEE7cUJBQ0pBLENBQUNBOzt1Q0FPREE7Z0JBQURBLHlCQUFDQTtZQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtZQTFCRCxtREEwQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NlZ21lbnRCdWlsZGVyL1NiU2VnbWVudENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xyXG5cclxuaW1wb3J0IHtTYkdyb3VwLCBTYlNlZ21lbnQsIFNlZ21lbnRCdWlsZGVyU2VydmljZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9TZWdtZW50QnVpbGRlclNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzYi1zZWdtZW50JyxcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICAncGFyZW50Z3JvdXAnLFxyXG4gICAgICAgICdzZWdtZW50J1xyXG4gICAgXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLnJlY2VudEFjdGlvbl0nOiAnc2VnbWVudC5yZWNlbnRBY3Rpb24nXHJcbiAgICB9XHJcbn0pXHJcbkBWaWV3KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU10sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+W3t7IHNlZ21lbnQucG9zaXRpb24gfX1dIFNlZ21lbnQgKHt7IHNlZ21lbnQuaWQgfX0pPC9zcGFuPiAtIFxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIFsobmctbW9kZWwpXT1cInNlZ21lbnQubmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJzZWdtZW50QnVpbGRlci5yZW1vdmVFbGVtZW50KHBhcmVudGdyb3VwLCBzZWdtZW50KVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFwiPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTYlNlZ21lbnRDb21wb25lbnQge1xyXG4gICAgcGFyZW50Z3JvdXA6U2JHcm91cFxyXG4gICAgc2VnbWVudDpTYlNlZ21lbnRcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlZ21lbnRCdWlsZGVyOlNlZ21lbnRCdWlsZGVyU2VydmljZSkge31cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
