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
    var DropTargetComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (SegmentBuilderService_1_1) {
                SegmentBuilderService_1 = SegmentBuilderService_1_1;
            }],
        execute: function() {
            DropTargetComponent = (function () {
                function DropTargetComponent(segmentBuilder) {
                    this.segmentBuilder = segmentBuilder;
                    this.hidewhenids = [];
                    this.isHover = false;
                }
                DropTargetComponent.prototype.onInit = function () {
                    console.log(this.hidewhenids);
                };
                DropTargetComponent.prototype._showMe = function () {
                    return !!this.segmentBuilder.draggingElement && this.hidewhenids.indexOf(this.segmentBuilder.draggingElement.id) == -1;
                };
                DropTargetComponent.prototype.onDragEnter = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.isHover = true;
                };
                DropTargetComponent.prototype.onDragLeave = function (e) {
                    e.stopPropagation();
                    this.isHover = false;
                };
                DropTargetComponent.prototype.onDragOver = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                };
                DropTargetComponent.prototype.onDragOut = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                };
                DropTargetComponent.prototype.onDrop = function (e) {
                    this.isHover = false;
                    this.segmentBuilder.moveElement(this.segmentBuilder.draggingElement, this.group, this.index);
                };
                DropTargetComponent = __decorate([
                    angular2_1.Component({
                        selector: 'drop-target',
                        properties: [
                            'group',
                            'index',
                            'hidewhenids'
                        ],
                        host: {
                            '[class.showMe]': '_showMe()',
                            '[class.hoverMe]': 'isHover',
                            '(dragenter)': 'onDragEnter($event)',
                            '(dragleave)': 'onDragLeave($event)',
                            '(dragover)': 'onDragOver($event)',
                            '(dragout)': 'onDragOut($event)',
                            '(drop)': 'onDrop($event)'
                        }
                    }),
                    angular2_1.View({
                        directives: [],
                        template: "\n        <div class=\"glyphicon glyphicon-arrow-right\"></div>\n    "
                    }), 
                    __metadata('design:paramtypes', [SegmentBuilderService_1.SegmentBuilderService])
                ], DropTargetComponent);
                return DropTargetComponent;
            })();
            exports_1("DropTargetComponent", DropTargetComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudEJ1aWxkZXIvRHJvcFRhcmdldENvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJEcm9wVGFyZ2V0Q29tcG9uZW50IiwiRHJvcFRhcmdldENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkRyb3BUYXJnZXRDb21wb25lbnQub25Jbml0IiwiRHJvcFRhcmdldENvbXBvbmVudC5fc2hvd01lIiwiRHJvcFRhcmdldENvbXBvbmVudC5vbkRyYWdFbnRlciIsIkRyb3BUYXJnZXRDb21wb25lbnQub25EcmFnTGVhdmUiLCJEcm9wVGFyZ2V0Q29tcG9uZW50Lm9uRHJhZ092ZXIiLCJEcm9wVGFyZ2V0Q29tcG9uZW50Lm9uRHJhZ091dCIsIkRyb3BUYXJnZXRDb21wb25lbnQub25Ecm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQThCSUEsNkJBQW9CQSxjQUFvQ0E7b0JBQXBDQyxtQkFBY0EsR0FBZEEsY0FBY0EsQ0FBc0JBO29CQUh4REEsZ0JBQVdBLEdBQWlCQSxFQUFFQSxDQUFBQTtvQkFDOUJBLFlBQU9BLEdBQVdBLEtBQUtBLENBQUFBO2dCQUVvQ0EsQ0FBQ0E7Z0JBRTVERCxvQ0FBTUEsR0FBTkE7b0JBQ0lFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO2dCQUNsQ0EsQ0FBQ0E7Z0JBRU9GLHFDQUFPQSxHQUFmQTtvQkFDSUcsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsSUFBSUEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzNIQSxDQUFDQTtnQkFFREgseUNBQVdBLEdBQVhBLFVBQVlBLENBQU9BO29CQUNmSSxDQUFDQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtvQkFDbkJBLENBQUNBLENBQUNBLGVBQWVBLEVBQUVBLENBQUNBO29CQUNwQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkFFREoseUNBQVdBLEdBQVhBLFVBQVlBLENBQU9BO29CQUNmSyxDQUFDQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtvQkFDcEJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBRURMLHdDQUFVQSxHQUFWQSxVQUFXQSxDQUFPQTtvQkFDZE0sQ0FBQ0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7b0JBQ25CQSxDQUFDQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQTtnQkFDeEJBLENBQUNBO2dCQUVETix1Q0FBU0EsR0FBVEEsVUFBVUEsQ0FBT0E7b0JBQ2JPLENBQUNBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO29CQUNuQkEsQ0FBQ0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkFFRFAsb0NBQU1BLEdBQU5BLFVBQU9BLENBQU9BO29CQUNWUSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDckJBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLGVBQWVBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNqR0EsQ0FBQ0E7Z0JBaEVMUjtvQkFBQ0Esb0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTt3QkFDdkJBLFVBQVVBLEVBQUVBOzRCQUNSQSxPQUFPQTs0QkFDUEEsT0FBT0E7NEJBQ1BBLGFBQWFBO3lCQUNoQkE7d0JBQ0RBLElBQUlBLEVBQUVBOzRCQUNGQSxnQkFBZ0JBLEVBQUVBLFdBQVdBOzRCQUM3QkEsaUJBQWlCQSxFQUFFQSxTQUFTQTs0QkFDNUJBLGFBQWFBLEVBQUVBLHFCQUFxQkE7NEJBQ3BDQSxhQUFhQSxFQUFFQSxxQkFBcUJBOzRCQUNwQ0EsWUFBWUEsRUFBRUEsb0JBQW9CQTs0QkFDbENBLFdBQVdBLEVBQUVBLG1CQUFtQkE7NEJBQ2hDQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3lCQUM3QkE7cUJBQ0pBLENBQUNBO29CQUNEQSxlQUFJQSxDQUFDQTt3QkFDRkEsVUFBVUEsRUFBRUEsRUFBRUE7d0JBQ2RBLFFBQVFBLEVBQUVBLHVFQUVUQTtxQkFDSkEsQ0FBQ0E7O3dDQTJDREE7Z0JBQURBLDBCQUFDQTtZQUFEQSxDQWpFQSxBQWlFQ0EsSUFBQTtZQWpFRCxxREFpRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NlZ21lbnRCdWlsZGVyL0Ryb3BUYXJnZXRDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgRWxlbWVudFJlZiwgRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XHJcblxyXG5pbXBvcnQge1NiR3JvdXAsIFNiQ3JpdGVyaW9uLCBTZWdtZW50QnVpbGRlclNlcnZpY2V9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvU2VnbWVudEJ1aWxkZXJTZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHJvcC10YXJnZXQnLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgICdncm91cCcsXHJcbiAgICAgICAgJ2luZGV4JyxcclxuICAgICAgICAnaGlkZXdoZW5pZHMnXHJcbiAgICBdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3Muc2hvd01lXSc6ICdfc2hvd01lKCknLFxyXG4gICAgICAgICdbY2xhc3MuaG92ZXJNZV0nOiAnaXNIb3ZlcicsXHJcbiAgICAgICAgJyhkcmFnZW50ZXIpJzogJ29uRHJhZ0VudGVyKCRldmVudCknLFxyXG4gICAgICAgICcoZHJhZ2xlYXZlKSc6ICdvbkRyYWdMZWF2ZSgkZXZlbnQpJyxcclxuICAgICAgICAnKGRyYWdvdmVyKSc6ICdvbkRyYWdPdmVyKCRldmVudCknLFxyXG4gICAgICAgICcoZHJhZ291dCknOiAnb25EcmFnT3V0KCRldmVudCknLFxyXG4gICAgICAgICcoZHJvcCknOiAnb25Ecm9wKCRldmVudCknXHJcbiAgICB9XHJcbn0pXHJcbkBWaWV3KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1hcnJvdy1yaWdodFwiPjwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERyb3BUYXJnZXRDb21wb25lbnQge1xyXG4gICAgZ3JvdXA6U2JHcm91cFxyXG4gICAgaW5kZXg6bnVtYmVyXHJcbiAgICBoaWRld2hlbmlkczpBcnJheTxudW1iZXI+ID0gW11cclxuICAgIGlzSG92ZXI6Ym9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWdtZW50QnVpbGRlcjpTZWdtZW50QnVpbGRlclNlcnZpY2UpIHt9XHJcblxyXG4gICAgb25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGlkZXdoZW5pZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Nob3dNZSgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLnNlZ21lbnRCdWlsZGVyLmRyYWdnaW5nRWxlbWVudCAmJiB0aGlzLmhpZGV3aGVuaWRzLmluZGV4T2YodGhpcy5zZWdtZW50QnVpbGRlci5kcmFnZ2luZ0VsZW1lbnQuaWQpID09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhZ0VudGVyKGU6RXZlbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmlzSG92ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhZ0xlYXZlKGU6RXZlbnQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaXNIb3ZlciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhZ092ZXIoZTpFdmVudCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhZ091dChlOkV2ZW50KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ecm9wKGU6RXZlbnQpIHtcclxuICAgICAgICB0aGlzLmlzSG92ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRCdWlsZGVyLm1vdmVFbGVtZW50KHRoaXMuc2VnbWVudEJ1aWxkZXIuZHJhZ2dpbmdFbGVtZW50LCB0aGlzLmdyb3VwLCB0aGlzLmluZGV4KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
