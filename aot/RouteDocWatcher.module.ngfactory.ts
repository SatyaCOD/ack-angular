/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './RouteDocWatcher.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/common/src/localization';
import * as import4 from './RouteWatcher.class';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/i18n/tokens';
import * as import7 from 'ui-router-core/lib/state/stateService';
import * as import8 from 'ui-router-core/lib/transition/transitionService';
class RouteDocWatcherClassInjector extends import0.NgModuleInjector<import1.RouteDocWatcherClass> {
  _CommonModule_0:import2.CommonModule;
  _RouteDocWatcherClass_1:import1.RouteDocWatcherClass;
  __NgLocalization_2:import3.NgLocaleLocalization;
  __RouteWatcher_3:import4.RouteWatcher;
  constructor(parent:import5.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import6.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  get _RouteWatcher_3():import4.RouteWatcher {
    if ((this.__RouteWatcher_3 == null)) { (this.__RouteWatcher_3 = new import4.RouteWatcher(this.parent.get(import7.StateService),this.parent.get(import8.TransitionService))); }
    return this.__RouteWatcher_3;
  }
  createInternal():import1.RouteDocWatcherClass {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouteDocWatcherClass_1 = new import1.RouteDocWatcherClass();
    return this._RouteDocWatcherClass_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.RouteDocWatcherClass)) { return this._RouteDocWatcherClass_1; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_2; }
    if ((token === import4.RouteWatcher)) { return this._RouteWatcher_3; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const RouteDocWatcherClassNgFactory:import0.NgModuleFactory<import1.RouteDocWatcherClass> = new import0.NgModuleFactory(RouteDocWatcherClassInjector,import1.RouteDocWatcherClass);