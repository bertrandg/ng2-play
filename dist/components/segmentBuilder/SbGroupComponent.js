System.register(['angular2/angular2', './SbCriterionComponent', './SbSegmentComponent', './DragDirective', './DropTargetComponent', './../../services/SegmentBuilderService'], function(exports_1) {
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
    var angular2_1, SbCriterionComponent_1, SbSegmentComponent_1, DragDirective_1, DropTargetComponent_1, SegmentBuilderService_1;
    var SbGroupComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (SbCriterionComponent_1_1) {
                SbCriterionComponent_1 = SbCriterionComponent_1_1;
            },
            function (SbSegmentComponent_1_1) {
                SbSegmentComponent_1 = SbSegmentComponent_1_1;
            },
            function (DragDirective_1_1) {
                DragDirective_1 = DragDirective_1_1;
            },
            function (DropTargetComponent_1_1) {
                DropTargetComponent_1 = DropTargetComponent_1_1;
            },
            function (SegmentBuilderService_1_1) {
                SegmentBuilderService_1 = SegmentBuilderService_1_1;
            }],
        execute: function() {
            SbGroupComponent = (function () {
                function SbGroupComponent(segmentBuilder) {
                    this.segmentBuilder = segmentBuilder;
                    this.isOpen = true;
                }
                SbGroupComponent.prototype.onInit = function () {
                    this.level = Number(this.level);
                };
                SbGroupComponent = __decorate([
                    angular2_1.Component({
                        selector: 'sb-group',
                        properties: [
                            'parentgroup',
                            'group',
                            'level'
                        ],
                        host: {
                            '[class]': '\'panel panel-default level-\' + level',
                        }
                    }),
                    angular2_1.View({
                        directives: [angular2_1.NgIf, angular2_1.NgFor, SbCriterionComponent_1.SbCriterionComponent, SbSegmentComponent_1.SbSegmentComponent, SbGroupComponent, DragDirective_1.DragDirective, DropTargetComponent_1.DropTargetComponent],
                        template: "\n        <div class=\"panel-heading\">\n            <button class=\"btn btn-sm btn-default\" (click)=\"isOpen = !isOpen\"><span class=\"glyphicon glyphicon-{{ isOpen ? 'triangle-bottom' : 'triangle-right' }}\"></span></button>\n            <span class=\"badge\">[{{ group.position }}] Group ({{ group.id }})</span>\n            <button class=\"btn btn-sm btn-primary\" (click)=\"segmentBuilder.addElement(group, 'group')\">+ Group</button>\n            <button class=\"btn btn-sm btn-primary\" (click)=\"segmentBuilder.addElement(group, 'criterion')\">+ Criterion</button>\n            <button class=\"btn btn-sm btn-primary\" (click)=\"segmentBuilder.addElement(group, 'segment')\">+ Segment</button>\n            <button class=\"btn btn-sm btn-danger\" *ng-if=\"parentgroup\" (click)=\"segmentBuilder.removeElement(parentgroup, group)\"><span class=\"glyphicon glyphicon-trash\"></span></button>\n        </div>\n        <div class=\"panel-body\" [hidden]=\"!isOpen\">\n          \n            <drop-target *ng-if=\"!group.children.length\"\n                  index=\"0\" [group]=\"group\" [level]=\"level\"></drop-target>\n\n            <drop-target *ng-if=\"group.children.length\"\n                  index=\"0\" [group]=\"group\" [level]=\"level\"  [hidewhenids]=\"[group.children[0].id]\"></drop-target>\n\n            <div *ng-for=\"#m of group.children; #i = index\">\n                <sb-criterion *ng-if=\"m.type == 'criterion'\" \n                      [parentgroup]=\"group\" [criterion]=\"m\" [drag]=\"m\"></sb-criterion>\n\n                <sb-segment *ng-if=\"m.type == 'segment'\" \n                      [parentgroup]=\"group\" [segment]=\"m\" [drag]=\"m\"></sb-segment>\n\n                <sb-group *ng-if=\"m.type == 'group'\" \n                      [parentgroup]=\"group\" [group]=\"m\" [level]=\"level + 1\" [drag]=\"m\"></sb-group>\n\n                <drop-target *ng-if=\"i < group.children.length - 1\"\n                      [index]=\"i + 1\" [group]=\"group\" [level]=\"level\" [hidewhenids]=\"[group.children[i].id, group.children[i + 1].id]\"></drop-target>\n\n                <drop-target *ng-if=\"i == group.children.length - 1\"\n                      [index]=\"i + 1\" [group]=\"group\" [level]=\"level\" [hidewhenids]=\"[group.children[i].id]\"></drop-target>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [SegmentBuilderService_1.SegmentBuilderService])
                ], SbGroupComponent);
                return SbGroupComponent;
            })();
            exports_1("SbGroupComponent", SbGroupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudEJ1aWxkZXIvU2JHcm91cENvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTYkdyb3VwQ29tcG9uZW50IiwiU2JHcm91cENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlNiR3JvdXBDb21wb25lbnQub25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQXlESUEsMEJBQW9CQSxjQUFvQ0E7b0JBQXBDQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBc0JBO29CQUZ4REEsV0FBTUEsR0FBV0EsSUFBSUEsQ0FBQUE7Z0JBRXNDQSxDQUFDQTtnQkFFNURELGlDQUFNQSxHQUFOQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3BDQSxDQUFDQTtnQkE3RExGO29CQUFDQSxvQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBO3dCQUNwQkEsVUFBVUEsRUFBRUE7NEJBQ1JBLGFBQWFBOzRCQUNiQSxPQUFPQTs0QkFDUEEsT0FBT0E7eUJBQ1ZBO3dCQUNEQSxJQUFJQSxFQUFFQTs0QkFDRkEsU0FBU0EsRUFBRUEsd0NBQXdDQTt5QkFFdERBO3FCQUNKQSxDQUFDQTtvQkFDREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFVBQVVBLEVBQUVBLENBQUNBLGVBQUlBLEVBQUVBLGdCQUFLQSxFQUFFQSwyQ0FBb0JBLEVBQUVBLHVDQUFrQkEsRUFBRUEsZ0JBQWdCQSxFQUFFQSw2QkFBYUEsRUFBRUEseUNBQW1CQSxDQUFDQTt3QkFDekhBLFFBQVFBLEVBQUVBLGt5RUFrQ1RBO3FCQUNKQSxDQUFDQTs7cUNBYURBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0E5REEsQUE4RENBLElBQUE7WUE5REQsK0NBOERDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50QnVpbGRlci9TYkdyb3VwQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nSWYsIE5nRm9yLCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcblxyXG5pbXBvcnQge1NiQ3JpdGVyaW9uQ29tcG9uZW50fSBmcm9tICcuL1NiQ3JpdGVyaW9uQ29tcG9uZW50JztcclxuaW1wb3J0IHtTYlNlZ21lbnRDb21wb25lbnR9IGZyb20gJy4vU2JTZWdtZW50Q29tcG9uZW50JztcclxuaW1wb3J0IHtEcmFnRGlyZWN0aXZlfSBmcm9tICcuL0RyYWdEaXJlY3RpdmUnO1xyXG5pbXBvcnQge0Ryb3BUYXJnZXRDb21wb25lbnR9IGZyb20gJy4vRHJvcFRhcmdldENvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge1NiR3JvdXAsIFNlZ21lbnRCdWlsZGVyU2VydmljZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9TZWdtZW50QnVpbGRlclNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzYi1ncm91cCcsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgJ3BhcmVudGdyb3VwJyxcclxuICAgICAgICAnZ3JvdXAnLFxyXG4gICAgICAgICdsZXZlbCdcclxuICAgIF0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzc10nOiAnXFwncGFuZWwgcGFuZWwtZGVmYXVsdCBsZXZlbC1cXCcgKyBsZXZlbCcsXHJcbiAgICAgICAgLy8nW2NsYXNzLnJlY2VudEFjdGlvbl0nOiAnZ3JvdXAucmVjZW50QWN0aW9uJ1xyXG4gICAgfVxyXG59KVxyXG5AVmlldyh7XHJcbiAgICBkaXJlY3RpdmVzOiBbTmdJZiwgTmdGb3IsIFNiQ3JpdGVyaW9uQ29tcG9uZW50LCBTYlNlZ21lbnRDb21wb25lbnQsIFNiR3JvdXBDb21wb25lbnQsIERyYWdEaXJlY3RpdmUsIERyb3BUYXJnZXRDb21wb25lbnRdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFwiIChjbGljayk9XCJpc09wZW4gPSAhaXNPcGVuXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXt7IGlzT3BlbiA/ICd0cmlhbmdsZS1ib3R0b20nIDogJ3RyaWFuZ2xlLXJpZ2h0JyB9fVwiPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZVwiPlt7eyBncm91cC5wb3NpdGlvbiB9fV0gR3JvdXAgKHt7IGdyb3VwLmlkIH19KTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwic2VnbWVudEJ1aWxkZXIuYWRkRWxlbWVudChncm91cCwgJ2dyb3VwJylcIj4rIEdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInNlZ21lbnRCdWlsZGVyLmFkZEVsZW1lbnQoZ3JvdXAsICdjcml0ZXJpb24nKVwiPisgQ3JpdGVyaW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInNlZ21lbnRCdWlsZGVyLmFkZEVsZW1lbnQoZ3JvdXAsICdzZWdtZW50JylcIj4rIFNlZ21lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiICpuZy1pZj1cInBhcmVudGdyb3VwXCIgKGNsaWNrKT1cInNlZ21lbnRCdWlsZGVyLnJlbW92ZUVsZW1lbnQocGFyZW50Z3JvdXAsIGdyb3VwKVwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFwiPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiIFtoaWRkZW5dPVwiIWlzT3BlblwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkcm9wLXRhcmdldCAqbmctaWY9XCIhZ3JvdXAuY2hpbGRyZW4ubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgaW5kZXg9XCIwXCIgW2dyb3VwXT1cImdyb3VwXCIgW2xldmVsXT1cImxldmVsXCI+PC9kcm9wLXRhcmdldD5cclxuXHJcbiAgICAgICAgICAgIDxkcm9wLXRhcmdldCAqbmctaWY9XCJncm91cC5jaGlsZHJlbi5sZW5ndGhcIlxyXG4gICAgICAgICAgICAgICAgICBpbmRleD1cIjBcIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbbGV2ZWxdPVwibGV2ZWxcIiAgW2hpZGV3aGVuaWRzXT1cIltncm91cC5jaGlsZHJlblswXS5pZF1cIj48L2Ryb3AtdGFyZ2V0PlxyXG5cclxuICAgICAgICAgICAgPGRpdiAqbmctZm9yPVwiI20gb2YgZ3JvdXAuY2hpbGRyZW47ICNpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDxzYi1jcml0ZXJpb24gKm5nLWlmPVwibS50eXBlID09ICdjcml0ZXJpb24nXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50Z3JvdXBdPVwiZ3JvdXBcIiBbY3JpdGVyaW9uXT1cIm1cIiBbZHJhZ109XCJtXCI+PC9zYi1jcml0ZXJpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNiLXNlZ21lbnQgKm5nLWlmPVwibS50eXBlID09ICdzZWdtZW50J1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhcmVudGdyb3VwXT1cImdyb3VwXCIgW3NlZ21lbnRdPVwibVwiIFtkcmFnXT1cIm1cIj48L3NiLXNlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNiLWdyb3VwICpuZy1pZj1cIm0udHlwZSA9PSAnZ3JvdXAnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50Z3JvdXBdPVwiZ3JvdXBcIiBbZ3JvdXBdPVwibVwiIFtsZXZlbF09XCJsZXZlbCArIDFcIiBbZHJhZ109XCJtXCI+PC9zYi1ncm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZHJvcC10YXJnZXQgKm5nLWlmPVwiaSA8IGdyb3VwLmNoaWxkcmVuLmxlbmd0aCAtIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2luZGV4XT1cImkgKyAxXCIgW2dyb3VwXT1cImdyb3VwXCIgW2xldmVsXT1cImxldmVsXCIgW2hpZGV3aGVuaWRzXT1cIltncm91cC5jaGlsZHJlbltpXS5pZCwgZ3JvdXAuY2hpbGRyZW5baSArIDFdLmlkXVwiPjwvZHJvcC10YXJnZXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRyb3AtdGFyZ2V0ICpuZy1pZj1cImkgPT0gZ3JvdXAuY2hpbGRyZW4ubGVuZ3RoIC0gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaSArIDFcIiBbZ3JvdXBdPVwiZ3JvdXBcIiBbbGV2ZWxdPVwibGV2ZWxcIiBbaGlkZXdoZW5pZHNdPVwiW2dyb3VwLmNoaWxkcmVuW2ldLmlkXVwiPjwvZHJvcC10YXJnZXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNiR3JvdXBDb21wb25lbnQge1xyXG4gICAgcGFyZW50Z3JvdXA6U2JHcm91cFxyXG4gICAgZ3JvdXA6U2JHcm91cFxyXG4gICAgbGV2ZWw6bnVtYmVyXHJcbiAgICBpc09wZW46Ym9vbGVhbiA9IHRydWVcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlZ21lbnRCdWlsZGVyOlNlZ21lbnRCdWlsZGVyU2VydmljZSkge31cclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IE51bWJlcih0aGlzLmxldmVsKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogIFtuZy1zd2l0Y2hdPVwibS50eXBlXCJcclxuPHNiLWNyaXRlcmlvbiBbbmctc3dpdGNoLXdoZW5dPVwiJ2NyaXRlcmlvbidcIiBbY3JpdGVyaW9uXT1cIm1cIj48L3NiLWNyaXRlcmlvbj5cclxuPHNiLXNlZ21lbnQgW25nLXN3aXRjaC13aGVuXT1cIidzZWdtZW50J1wiIFtzZWdtZW50XT1cIm1cIj48L3NiLXNlZ21lbnQ+XHJcbjxzYi1ncm91cCBbbmctc3dpdGNoLXdoZW5dPVwiJ2dyb3VwJ1wiIFtncm91cF09XCJtXCI+PC9zYi1ncm91cD5cclxuXHJcbjxkaXYgKm5nLWZvcj1cIiNtIG9mIGdyb3VwLmNoaWxkcmVuOyAjaSA9IGluZGV4XCI+XHJcblxyXG48dGVtcGxhdGUgbmctZm9yICNtIFtuZy1mb3Itb2ZdPVwiZ3JvdXAuY2hpbGRyZW5cIiAjaT1cImluZGV4XCI+XHJcbjwvdGVtcGxhdGU+XHJcbiovIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
