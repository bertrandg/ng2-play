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
    var DragDirective;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (SegmentBuilderService_1_1) {
                SegmentBuilderService_1 = SegmentBuilderService_1_1;
            }],
        execute: function() {
            DragDirective = (function () {
                function DragDirective(segmentBuilder, elRef) {
                    this.segmentBuilder = segmentBuilder;
                    this.elRef = elRef;
                    this.isDraggingMe = false;
                }
                DragDirective.prototype.onInit = function () { };
                DragDirective.prototype.onDragStart = function (e) {
                    this.segmentBuilder.draggingElement = this.drag;
                    this.isDraggingMe = true;
                    this.elRef.nativeElement.style.opacity = .5;
                    this.elRef.nativeElement.style.outline = '1px solid red';
                    e.dataTransfer.setData('text/plain', 'go');
                    e.dataTransfer.effectAllowed = 'move';
                    e.stopPropagation();
                };
                DragDirective.prototype.onDragEnd = function (e) {
                    var _this = this;
                    setTimeout(function () {
                        _this.segmentBuilder.draggingElement = null;
                        _this.isDraggingMe = false;
                    });
                    this.elRef.nativeElement.style.opacity = 1;
                    this.elRef.nativeElement.style.outline = 0;
                    e.stopPropagation();
                };
                DragDirective = __decorate([
                    angular2_1.Directive({
                        selector: '[drag]',
                        inputs: [
                            'drag'
                        ],
                        host: {
                            'draggable': 'true',
                            '[class.draggingMe]': 'isDraggingMe',
                            '(dragstart)': 'onDragStart($event)',
                            '(dragend)': 'onDragEnd($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [SegmentBuilderService_1.SegmentBuilderService, angular2_1.ElementRef])
                ], DragDirective);
                return DragDirective;
            })();
            exports_1("DragDirective", DragDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VnbWVudEJ1aWxkZXIvRHJhZ0RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6WyJEcmFnRGlyZWN0aXZlIiwiRHJhZ0RpcmVjdGl2ZS5jb25zdHJ1Y3RvciIsIkRyYWdEaXJlY3RpdmUub25Jbml0IiwiRHJhZ0RpcmVjdGl2ZS5vbkRyYWdTdGFydCIsIkRyYWdEaXJlY3RpdmUub25EcmFnRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQWdCSUEsdUJBQW9CQSxjQUFvQ0EsRUFBVUEsS0FBaUJBO29CQUEvREMsbUJBQWNBLEdBQWRBLGNBQWNBLENBQXNCQTtvQkFBVUEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBWUE7b0JBRm5GQSxpQkFBWUEsR0FBV0EsS0FBS0EsQ0FBQUE7Z0JBRTBEQSxDQUFDQTtnQkFFdkZELDhCQUFNQSxHQUFOQSxjQUFVRSxDQUFDQTtnQkFFWEYsbUNBQVdBLEdBQVhBLFVBQVlBLENBQVdBO29CQUNuQkcsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsR0FBR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBRWhEQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFFekJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLGFBQWFBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLEVBQUVBLENBQUNBO29CQUM1Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsR0FBR0EsZUFBZUEsQ0FBQ0E7b0JBRXpEQSxDQUFDQSxDQUFDQSxZQUFZQSxDQUFDQSxPQUFPQSxDQUFDQSxZQUFZQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDM0NBLENBQUNBLENBQUNBLFlBQVlBLENBQUNBLGFBQWFBLEdBQUdBLE1BQU1BLENBQUNBO29CQUN0Q0EsQ0FBQ0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkFFREgsaUNBQVNBLEdBQVRBLFVBQVVBLENBQVdBO29CQUFyQkksaUJBVUNBO29CQVRHQSxVQUFVQSxDQUFDQTt3QkFDUEEsS0FBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZUFBZUEsR0FBR0EsSUFBSUEsQ0FBQ0E7d0JBQzNDQSxLQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDOUJBLENBQUNBLENBQUNBLENBQUNBO29CQUVIQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxhQUFhQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDM0NBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLGFBQWFBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLENBQUNBO29CQUUzQ0EsQ0FBQ0EsQ0FBQ0EsZUFBZUEsRUFBRUEsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkEzQ0xKO29CQUFDQSxvQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsTUFBTUEsRUFBRUE7NEJBQ0pBLE1BQU1BO3lCQUNUQTt3QkFDREEsSUFBSUEsRUFBRUE7NEJBQ0ZBLFdBQVdBLEVBQUVBLE1BQU1BOzRCQUNuQkEsb0JBQW9CQSxFQUFFQSxjQUFjQTs0QkFDcENBLGFBQWFBLEVBQUVBLHFCQUFxQkE7NEJBQ3BDQSxXQUFXQSxFQUFFQSxtQkFBbUJBO3lCQUNuQ0E7cUJBQ0pBLENBQUNBOztrQ0FpQ0RBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0E1Q0EsQUE0Q0NBLElBQUE7WUE1Q0QseUNBNENDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zZWdtZW50QnVpbGRlci9EcmFnRGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcclxuXHJcbmltcG9ydCB7U2JFbGVtZW50LCBTZWdtZW50QnVpbGRlclNlcnZpY2V9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvU2VnbWVudEJ1aWxkZXJTZXJ2aWNlJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2RyYWddJyxcclxuICAgIGlucHV0czogW1xyXG4gICAgICAgICdkcmFnJ1xyXG4gICAgXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnZHJhZ2dhYmxlJzogJ3RydWUnLFxyXG4gICAgICAgICdbY2xhc3MuZHJhZ2dpbmdNZV0nOiAnaXNEcmFnZ2luZ01lJyxcclxuICAgICAgICAnKGRyYWdzdGFydCknOiAnb25EcmFnU3RhcnQoJGV2ZW50KScsXHJcbiAgICAgICAgJyhkcmFnZW5kKSc6ICdvbkRyYWdFbmQoJGV2ZW50KSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdEaXJlY3RpdmUge1xyXG4gICAgZHJhZzpTYkVsZW1lbnRcclxuICAgIGlzRHJhZ2dpbmdNZTpib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlZ21lbnRCdWlsZGVyOlNlZ21lbnRCdWlsZGVyU2VydmljZSwgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgICBvbkluaXQoKSB7fVxyXG5cclxuICAgIG9uRHJhZ1N0YXJ0KGU6RHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50QnVpbGRlci5kcmFnZ2luZ0VsZW1lbnQgPSB0aGlzLmRyYWc7XHJcblxyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ01lID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAuNTtcclxuICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUub3V0bGluZSA9ICcxcHggc29saWQgcmVkJztcclxuXHJcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsICdnbycpO1xyXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYWdFbmQoZTpEcmFnRXZlbnQpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50QnVpbGRlci5kcmFnZ2luZ0VsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdNZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLm91dGxpbmUgPSAwO1xyXG5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
