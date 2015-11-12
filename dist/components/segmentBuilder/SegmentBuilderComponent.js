System.register(['angular2/angular2', './SbGroupComponent', './../../services/SegmentBuilderService'], function(exports_1) {
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
    var angular2_1, SbGroupComponent_1, SegmentBuilderService_1;
    var SegmentBuilderComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (SbGroupComponent_1_1) {
                SbGroupComponent_1 = SbGroupComponent_1_1;
            },
            function (SegmentBuilderService_1_1) {
                SegmentBuilderService_1 = SegmentBuilderService_1_1;
            }],
        execute: function() {
            SegmentBuilderComponent = (function () {
                function SegmentBuilderComponent(segmentBuilder) {
                    this.mainGroup = segmentBuilder.rootGroup;
                }
                SegmentBuilderComponent = __decorate([
                    angular2_1.Component({
                        selector: 'segment-builder'
                    }),
                    angular2_1.View({
                        directives: [SbGroupComponent_1.SbGroupComponent, angular2_1.NgFor],
                        template: "\n        <div class=\"container\">\n            <h1>Segment Builder:</h1>\n            <sb-group [group]=\"mainGroup\" level=\"0\"></sb-group>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [SegmentBuilderService_1.SegmentBuilderService])
                ], SegmentBuilderComponent);
                return SegmentBuilderComponent;
            })();
            exports_1("SegmentBuilderComponent", SegmentBuilderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudEJ1aWxkZXIvU2VnbWVudEJ1aWxkZXJDb21wb25lbnQudHMiXSwibmFtZXMiOlsiU2VnbWVudEJ1aWxkZXJDb21wb25lbnQiLCJTZWdtZW50QnVpbGRlckNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFnQklBLGlDQUFZQSxjQUFvQ0E7b0JBQzVDQyxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQTtnQkFDOUNBLENBQUNBO2dCQWxCTEQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsaUJBQWlCQTtxQkFDOUJBLENBQUNBO29CQUNEQSxlQUFJQSxDQUFDQTt3QkFDRkEsVUFBVUEsRUFBRUEsQ0FBQ0EsbUNBQWdCQSxFQUFFQSxnQkFBS0EsQ0FBQ0E7d0JBQ3JDQSxRQUFRQSxFQUFFQSx1S0FLVEE7cUJBQ0pBLENBQUNBOzs0Q0FRREE7Z0JBQURBLDhCQUFDQTtZQUFEQSxDQW5CQSxBQW1CQ0EsSUFBQTtZQW5CRCw2REFtQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NlZ21lbnRCdWlsZGVyL1NlZ21lbnRCdWlsZGVyQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcbmltcG9ydCB7U2JHcm91cENvbXBvbmVudH0gZnJvbSAnLi9TYkdyb3VwQ29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7U2JHcm91cCwgU2VnbWVudEJ1aWxkZXJTZXJ2aWNlfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL1NlZ21lbnRCdWlsZGVyU2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2VnbWVudC1idWlsZGVyJ1xyXG59KVxyXG5AVmlldyh7XHJcbiAgICBkaXJlY3RpdmVzOiBbU2JHcm91cENvbXBvbmVudCwgTmdGb3JdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5TZWdtZW50IEJ1aWxkZXI6PC9oMT5cclxuICAgICAgICAgICAgPHNiLWdyb3VwIFtncm91cF09XCJtYWluR3JvdXBcIiBsZXZlbD1cIjBcIj48L3NiLWdyb3VwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlZ21lbnRCdWlsZGVyQ29tcG9uZW50IHtcclxuICAgIG1haW5Hcm91cDpTYkdyb3VwXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VnbWVudEJ1aWxkZXI6U2VnbWVudEJ1aWxkZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5tYWluR3JvdXAgPSBzZWdtZW50QnVpbGRlci5yb290R3JvdXA7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
