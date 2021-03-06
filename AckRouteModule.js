"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var RouteWatchReporter_1 = require("./RouteWatchReporter");
var RouteReporter_component_1 = require("./RouteReporter.component");
var AckRouteModule = /** @class */ (function () {
    function AckRouteModule() {
    }
    AckRouteModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [RouteReporter_component_1.RouteReporter],
                    providers: [RouteWatchReporter_1.RouteWatchReporter],
                    exports: [RouteReporter_component_1.RouteReporter]
                },] },
    ];
    /** @nocollapse */
    AckRouteModule.ctorParameters = function () { return []; };
    return AckRouteModule;
}());
exports.AckRouteModule = AckRouteModule;
