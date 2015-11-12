System.register(['angular2/angular2', 'angular2/router', './loop/LoopComponent'], function(exports_1) {
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
    var angular2_1, router_1, router_2, LoopComponent_1;
    var LoopRouteComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (LoopComponent_1_1) {
                LoopComponent_1 = LoopComponent_1_1;
            }],
        execute: function() {
            LoopRouteComponent = (function () {
                function LoopRouteComponent() {
                }
                LoopRouteComponent = __decorate([
                    angular2_1.Component({
                        selector: 'loop-route'
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: LoopComponent_1.LoopComponent, as: 'LooperHome' },
                        { path: '/looper/...', component: LoopRouteComponent, as: 'Looper' }
                    ]),
                    angular2_1.View({
                        directives: [router_2.RouterOutlet, router_2.RouterLink],
                        template: "\n        <div style=\"border: 1px solid #000; margin: 5px; padding: 5px;\">\n            <h2>We are inside the looper!!</h2>\n            <button [router-link]=\"['./Looper/LooperHome']\">Click on the button to go deeper..</button>\n            <button [router-link]=\"['./LooperHome']\">Back here</button>\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoopRouteComponent);
                return LoopRouteComponent;
            })();
            exports_1("LoopRouteComponent", LoopRouteComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9vcFJvdXRlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkxvb3BSb3V0ZUNvbXBvbmVudCIsIkxvb3BSb3V0ZUNvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBc0JJQTtnQkFBZUMsQ0FBQ0E7Z0JBdEJwQkQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7cUJBQ3pCQSxDQUFDQTtvQkFFREEsb0JBQVdBLENBQUNBO3dCQUNUQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSw2QkFBYUEsRUFBRUEsRUFBRUEsRUFBRUEsWUFBWUEsRUFBRUE7d0JBQ3pEQSxFQUFFQSxJQUFJQSxFQUFFQSxhQUFhQSxFQUFFQSxTQUFTQSxFQUFFQSxrQkFBa0JBLEVBQUVBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBO3FCQUN2RUEsQ0FBQ0E7b0JBRURBLGVBQUlBLENBQUNBO3dCQUNGQSxVQUFVQSxFQUFFQSxDQUFDQSxxQkFBWUEsRUFBRUEsbUJBQVVBLENBQUNBO3dCQUN0Q0EsUUFBUUEsRUFBRUEsd1hBT1RBO3FCQUNKQSxDQUFDQTs7dUNBSURBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0F2QkEsQUF1QkNBLElBQUE7WUF2QkQsbURBdUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9Mb29wUm91dGVDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBMb2NhdGlvbiwgUm91dGV9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7Um91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtMb29wQ29tcG9uZW50fSBmcm9tICcuL2xvb3AvTG9vcENvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xvb3Atcm91dGUnXHJcbn0pXHJcblxyXG5AUm91dGVDb25maWcoW1xyXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogTG9vcENvbXBvbmVudCwgYXM6ICdMb29wZXJIb21lJyB9LFxyXG4gICAgeyBwYXRoOiAnL2xvb3Blci8uLi4nLCBjb21wb25lbnQ6IExvb3BSb3V0ZUNvbXBvbmVudCwgYXM6ICdMb29wZXInIH1cclxuXSlcclxuXHJcbkBWaWV3KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmtdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgIzAwMDsgbWFyZ2luOiA1cHg7IHBhZGRpbmc6IDVweDtcIj5cclxuICAgICAgICAgICAgPGgyPldlIGFyZSBpbnNpZGUgdGhlIGxvb3BlciEhPC9oMj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBbcm91dGVyLWxpbmtdPVwiWycuL0xvb3Blci9Mb29wZXJIb21lJ11cIj5DbGljayBvbiB0aGUgYnV0dG9uIHRvIGdvIGRlZXBlci4uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gW3JvdXRlci1saW5rXT1cIlsnLi9Mb29wZXJIb21lJ11cIj5CYWNrIGhlcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvb3BSb3V0ZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHt9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
