import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core"

import {string as readerHeaderBody} from "./templates/reader-header-body.pug"

/** adds form element onchange listener via addEventListener('change') that calls onFormChanged scope argument */
@Directive({
  selector:'[onFormChanged]'
}) export class OnFormChanged{
  static parameters = [[ElementRef]]
  public onChange

  @Output() public onFormChanged = new EventEmitter()

  constructor(public element:ElementRef){
    this.onChange = function(event){
      this.onFormChanged.emit(event)
    }.bind(this)

    element.nativeElement.addEventListener('change',this.onChange)
  }

  ngOnDestroy(){
    this.element.nativeElement.removeEventListener('change',this.onChange)
  }
}

@Directive({
  selector:'[onFormAlter]'
}) export class OnFormAlter{
  static parameters = [[ElementRef]]
  public onChange

  @Output() public onFormAlter = new EventEmitter()

  constructor(public element:ElementRef){
    this.onChange = function(event){
      this.onFormAlter.emit(event)
    }.bind(this)

    element.nativeElement.addEventListener('input',this.onChange)
  }

  ngOnDestroy(){
    this.element.nativeElement.removeEventListener('input',this.onChange)
  }
}


@Component({
  selector:'reader-header-body',
  template:readerHeaderBody
}) export class ReaderHeaderBody {}

@Directive({
  selector:'reader-header'
}) export class ReaderHeader {}

@Directive({
  selector:"reader-body"
  //,parameters:[[ElementRef]]
}) export class ReaderBody {
  static parameters = [[ElementRef]]

  constructor(public element: ElementRef){
    element.nativeElement.style.height = '100%';
    element.nativeElement.style.display = 'block';
  }
}

@Directive({
  //inputs:['screen-height-model'],
  selector: '[screenWidthModel]'
}) export class ScreenWidthModel{
  public window
  public onResize

  @Input() public screenWidthModel
  @Output() public screenWidthModelChange = new EventEmitter()

  constructor(){
    this.window = window

    this.onResize = function(){
      if(this.screenWidthModel !== window.innerWidth){
        this.screenWidthModel = window.innerWidth
        this.screenWidthModelChange.emit(this.screenWidthModel)
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
  }

  ngAfterViewInit(){
    this.screenWidthModel = this.window.innerWidth
    this.screenWidthModelChange.emit(this.screenWidthModel)
  }

  ngOnDestroy(){
    window.removeEventListener(this.onResize)
  }
}

@Directive({
  //inputs:['screen-height-model'],
  selector: '[screenScrollModelY]'
}) export class ScreenScrollModelY{
  public window
  public onScroll

  @Input() public screenScrollModelY
  @Output() public screenScrollModelYChange = new EventEmitter()

  constructor(){
    this.onScroll = function(){
      this.screenScrollModelY = window['pageYOffset']
      this.screenScrollModelYChange.emit(this.screenScrollModelY)
    }.bind(this)
  }
  
  ngOnInit(){
    this.onScroll()
    window['addEventListener']("scroll", this.onScroll)
  }

  ngOnDestroy(){
    window['removeEventListener']("scroll", this.onScroll)
  }
}

@Directive({
  //inputs:['screen-height-model'],
  selector: '[screenHeightModel]'
}) export class ScreenHeightModel{
  public window
  public onResize

  @Input() public screenHeightModel
  @Output() public screenHeightModelChange = new EventEmitter()

  constructor(){
    this.window = window

    this.onResize = function(){
      if(this.screenHeightModel !== window.innerHeight){
        this.screenHeightModel = window.innerHeight
        this.screenHeightModelChange.emit(this.screenHeightModel)
      }
    }.bind(this)

    window.addEventListener('resize', this.onResize)
  }

  ngAfterViewInit(){
    this.screenHeightModel = this.window.innerHeight
    this.screenHeightModelChange.emit(this.screenHeightModel)
  }

  ngOnDestroy(){
    window.removeEventListener(this.onResize)
  }
}

/** runs shake instructions when condition returns a truthy value */
@Directive({
  selector:'[shakeOn]'
}) export class ShakeOn {
  @Input() public shakeOn
  @Output() public shakeThen = new EventEmitter()

  @Input() public shakeForMs
  @Output() public shakeForMsChange = new EventEmitter()

  @Input() public shakeType
  @Output() public shakeTypeChange = new EventEmitter()
  
  @Input() public shakeRef
  @Output() public shakeRefChange = new EventEmitter()
  
  public shakeTypes = ['shake-slow','shake-hard','shake-little','shake-horizontal','shake-vertical','shake-rotate','shake-opacity','shake-crazy']

  constructor(public element:ElementRef){}

  ngOnInit(){
    this.shakeForMs = this.shakeForMs || 2000
    this.shakeRef = this
    this.shakeType = this.shakeType || 'shake-slow'
    
    this.shakeRefChange.emit( this.shakeRef )
    this.shakeTypeChange.emit( this.shakeType )
    this.shakeForMsChange.emit( this.shakeForMs )
  }

  ngOnChanges(changes){
    if(changes.shakeOn && changes.shakeOn.currentValue && changes.shakeOn.currentValue!=changes.shakeOn.previousValue){
      this.onTrue()
    }
  }

  onFalse(){
    removeClass(this.element.nativeElement, 'shake-constant')
    removeClass(this.element.nativeElement, this.shakeType||'shake-slow')
  }

  onTrue(){
    addClass(this.element.nativeElement, 'shake-constant')
    addClass(this.element.nativeElement, this.shakeType||'shake-slow')

    setTimeout(()=>{
      //$scope.shakeOnController.shakeOn = false
      this.onFalse()
      this.shakeThen.emit(this)
    }, this.shakeForMs);
  }

}
/** runs shake instructions when model changes to a truthy value */
//.directive('shakeModel', shakeModel)
/*
function shakeOnDirective($timeout) {
  return {
    restrict:'A',
    scope:{},
    bindToController:{
      shakeOn:'=?', shakeForMs:'=?', shakeType:'=?', shakeThen:'&', shakeRef:'=?'
    },
    controller:shakeOn,
    controllerAs:'shakeOnController',
    link: function($scope, element, attrs){}
  };
}
shakeOnDirective.$inject=['$timeout']
*/

/** runs shake instructions when model changes to a truthy value */
/*
function shakeModel($timeout) {
  return {
    restrict:'A',
    scope:{},
    bindToController:{
      shakeModel:'=?', shakeForMs:'=?', shakeType:'=?', shakeRef:'=?'
    },
    controller:shakeOn,
    controllerAs:'shakeModelController',
    link: function($scope, element, attrs) {
      $scope.shakeModelController.shakeForMs = $scope.shakeModelController.shakeForMs || 2000
      $scope.shakeModelController.shakeType = $scope.shakeModelController.shakeType || 'shake-slow'

      function onTrue(){
        element.addClass('shake-constant')
        element.addClass($scope.shakeModelController.shakeType)

        $timeout(function() {
          $scope.shakeModelController.shakeModel = false
          element.removeClass('shake-constant')
          element.removeClass($scope.shakeModelController.shakeType)
          $scope.$apply()
        }, $scope.shakeModelController.shakeForMs);
      }

      function onChange(value) {
        if(value) {
          onTrue()
        }else{
          element.removeClass('shake-constant')
          element.removeClass($scope.shakeModelController.shakeType)
        }
      }

      function watch(){
        return $scope.shakeModelController.shakeModel
      }

      $scope.$watch(watch, onChange);
    }
  };
}
shakeModel.$inject = ['$timeout']
*/

export function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

export function addClass(el, className) {
  if (el.classList){
    el.classList.add(className)
  }
  else if (!hasClass(el, className)) el.className += " " + className
}

export function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

export const declarations = [
  OnFormChanged,
  ScreenScrollModelY,
  ScreenHeightModel,
  ScreenWidthModel,
  ReaderHeaderBody,
  ReaderHeader,
  ReaderBody,
  ShakeOn,
  OnFormAlter
]