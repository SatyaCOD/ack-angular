export const strapTime = Date.now()

import {
  ElementRef,
  Input,
  Component,
  NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouteWatchReporter } from "./ack-angular/RouteWatchReporter"
import { RouteReporter } from "./ack-angular/RouteReporter.component"

//import { pipes, components as ackComponents } from "ack-angular"
import { AckModule } from "./ack-angular"

import * as packJson from "../../package.json"
//const packJson = {version:'0.0.0'}

import * as ackFx from 'ack-angular-fx'
import { fxArray } from './prefx'

import {
  Ng2PageScrollModule,
  PageScrollService,
  PageScrollInstance
} from 'ng2-page-scroll'

import { ProviderExamples } from "./ProviderExamples.component"

import {string as ackAppStageTemplate} from './templates/ack-app-stage.pug'
import {string as animationExamples} from './templates/animation-examples.pug'
import {string as overviewExamples} from './templates/overview-examples.pug'
//import {string as servicesExamples} from './templates/services-examples.pug'

import { declarations as states, routing } from "./states.object"

@Component({
  selector: 'ack-app-stage'
  ,template: ackAppStageTemplate
  ,animations:fxArray
  //,animations:[]
  //,template:'Hello World<router-outlet></router-outlet>'
  //,template:'Hello World<div *ngIf="show" [@500]="\'slideInRight\'">Inner Content</div>'
}) export class AppComponent {
  public panelAnim = 'slideInRight'
  public version = packJson['version']

  ngAfterViewInit(){
    console.log('Total Wire Time:', Date.now()-strapTime+'ms')
    if( window['startAckTime'] ){
      console.log('Overall Load Time:', Date.now()-window['startAckTime']+'ms', '@', getServerTime())
    }
  }
}

@Component({
  selector: 'animation-examples'
  ,template: animationExamples
  ,animations:fxArray
  //,animations:[]
}) export class AnimationExamples {
  public list = ['abc','defg','hij','klm','opq','rst','uvx','yz']
  public delayArray = ackFx.delayArray
}

import {string as jjsWoz} from './templates/jjs-woz.pug'
@Component({
  selector: 'jjs-woz'
  ,template: jjsWoz
  //,animations:fxArray
  //,animations:[]
}) export class JjsWoz {
  constructor(public ElementRef:ElementRef){}

  ngOnInit(){
    this.ElementRef.nativeElement.getElementsByTagName('audio')[0].play()
  }
}

@Component({
  selector: 'overview-examples'
  ,template: overviewExamples
}) export class OverviewExamples {}

import {string as componentsExamples} from './templates/components-examples.pug'
@Component({
  selector: 'components-examples'
  ,template: componentsExamples
  ,animations:fxArray
}) export class ComponentsExamples {
  public error
  public contentArray = []
  public modalBackgroundColor = 'rgba(255,255,255,0.95)'
  public modalWrapStyle

  constructor(public PageScrollService:PageScrollService){}
  
  causeError(){
    this.error = new Error( 'An intended error was caused @ '+getServerTime() )
  }

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, '#Import AckModule');
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }

  setModalWrapStyle(v){
    try{
      this.modalWrapStyle = JSON.parse(v)
    }catch(e){}
  }
}

import {string as pipesExamples} from './templates/pipes-examples.pug'
@Component({
  selector: 'pipes-examples'
  ,template: pipesExamples
  ,animations:fxArray
}) export class PipesExamples {
  public simpleArray = ['a','b','c']

  constructor(public PageScrollService:PageScrollService){}

  scrollToModuleImport(){
    setTimeout(()=>{
      const pageScrollInstance = PageScrollInstance.simpleInstance(document, '#Import AckModule');
      this.PageScrollService.start(pageScrollInstance);
    }, 600)
  }
}

/*@Component({
  selector: 'services-examples'
  ,template: servicesExamples
}) export class ServicesExamples {}*/

export const declarations = [
  AppComponent
  //,UiRouteReporter
  ,RouteReporter
  ,AnimationExamples
  ,OverviewExamples
  ,ComponentsExamples
  ,PipesExamples
  //,ServicesExamples
  ,ProviderExamples
  ,JjsWoz
  ,...states
]

//const fxLoadTime = Date.now()
//ackFx.upgradeComponents(declarations)
//console.log('FX Load Time', Date.now()-fxLoadTime+'ms')
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:[
    BrowserModule
    ,BrowserAnimationsModule
    ,FormsModule
    ,HttpModule
    //,UIRouterModule.forRoot(routeConfig)
    ,routing
    ,Ng2PageScrollModule.forRoot()
    ,AckModule//.forRoot()
    //,AckModule//.forRoot()
  ]
  ,declarations: declarations
  ,providers:[
    RouteWatchReporter
    //,UiRouteWatchReporter
  ]
  ,bootstrap: [ AppComponent ]
  //,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
}) export class AppModule {}

console.log('Ng Define Time', Date.now()-strapTime+'ms', '@', getServerTime())

function getServerTime(d?){
  d = d || new Date()
  var h=d.getHours(),t='AM',m=d.getMinutes();m=m<10?'0'+m:m;h=h>=12?(t='PM',h-12||12):h==0?12:h;return ('0'+h).slice(-2)+':'+m+':'+('0'+d.getSeconds()).slice(-2)+'.'+d.getMilliseconds()+' '+t
}