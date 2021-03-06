System.register(["angular2/core", './hero-pipe.component', "./hero.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_pipe_component_1, hero_service_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_pipe_component_1_1) {
                hero_pipe_component_1 = hero_pipe_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(_heroService) {
                    this._heroService = _heroService;
                    this.pageTitle = "Hero List";
                    this.imageWidth = 100;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.listFilter = '';
                }
                HeroListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                HeroListComponent.prototype.ngOnInit = function () {
                    this.heros = this._heroService.getHeros();
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: 'super-heros',
                        templateUrl: 'app/avengers/hero-list.component.html',
                        styleUrls: ['app/avengers/hero-list.component.css'],
                        pipes: [hero_pipe_component_1.HeroFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroListComponent);
                return HeroListComponent;
            }());
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
//# sourceMappingURL=hero-list.component.js.map