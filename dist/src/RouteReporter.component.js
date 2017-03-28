"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { TransitionService } from "ui-router-ng2";
var core_1 = require("@angular/core");
var RouteWatchReporter_class_1 = require("./RouteWatchReporter.class");
var router_1 = require("@angular/router");
var RouteReporter = (function () {
    function RouteReporter(RouteWatchReporter) {
        var _this = this;
        this.RouteWatchReporter = RouteWatchReporter;
        //public isBackButton
        //public isNotBackButton
        //public mouseover
        this.stateChanger = new core_1.EventEmitter();
        this.beforeChanger = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
        this.$document = document;
        this.docCallbacks = RouteWatchReporter.getDocumentCallbacks();
        /*TransitionService.onStart({to:'*'}, transition=>{
          this.beforeChanger.emit( this.RouteWatchReporter )
        })
    
        TransitionService.onSuccess({to:'*'}, transition=>{
          //ensure smallest gap in digest occurs for things like animation swapping
          setTimeout(()=>this.stateChanger.emit( this.RouteWatchReporter ), 0)
        })*/
        RouteWatchReporter.router.events.subscribe(function (event) {
            if (event.constructor == router_1.NavigationEnd) {
                _this.stateChanger.emit(_this.RouteWatchReporter);
            }
        });
        RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks);
        this.ref = this.RouteWatchReporter;
    }
    RouteReporter.prototype.ngOnDestroy = function () {
        this.RouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks);
    };
    RouteReporter.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.refChange.emit(_this.ref); }, 0);
        if (this.onLoad) {
            this.onLoad({
                state: this.RouteWatchReporter.current,
                params: this.RouteWatchReporter.current.params,
                current: this.RouteWatchReporter.current
            });
        }
    };
    RouteReporter.prototype.goBackTo = function (name, params) {
        this.RouteWatchReporter.goBackTo(name, params);
    };
    RouteReporter.prototype.tryBack = function (name, params) {
        this.RouteWatchReporter.tryBack(name, params);
    };
    return RouteReporter;
}());
RouteReporter.parameters = [[
        RouteWatchReporter_class_1.RouteWatchReporter
    ]];
__decorate([
    core_1.Output("onChange"),
    __metadata("design:type", Object)
], RouteReporter.prototype, "stateChanger", void 0);
__decorate([
    core_1.Output("beforeChange"),
    __metadata("design:type", Object)
], RouteReporter.prototype, "beforeChanger", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "onLoad", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "ref", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "refChange", void 0);
RouteReporter = __decorate([
    core_1.Directive({
        //inputs:['ref'],
        selector: 'route-reporter'
    }),
    __metadata("design:paramtypes", [RouteWatchReporter_class_1.RouteWatchReporter])
], RouteReporter);
exports.RouteReporter = RouteReporter;
//# sourceMappingURL=RouteReporter.component.js.map