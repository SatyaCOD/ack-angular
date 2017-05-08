import { TemplateRef, EventEmitter, ElementRef } from "@angular/core";
export declare class FocusOn {
    element: ElementRef;
    focusOn: any;
    focusOnDelay: number;
    focusThen: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(changes: any): void;
}
export declare class SelectOn {
    element: ElementRef;
    selectOn: any;
    selectOnDelay: number;
    selectThen: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(changes: any): void;
}
export declare class VarDirective {
    var: any;
}
export declare class AckModal {
    element: ElementRef;
    onClose: EventEmitter<{}>;
    wrapStyle: any;
    allowClose: boolean;
    backgroundColor: any;
    backgroundColorChange: EventEmitter<{}>;
    private ref;
    refChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    clickListenForClose(): void;
    ngOnInit(): void;
    close(): void;
}
export declare class AckOptions {
    array: any[];
    stylize: boolean;
    multiple: boolean;
    toggleable: boolean;
    model: any;
    modelChange: EventEmitter<{}>;
    templateRef: TemplateRef<any>;
    private ref;
    refChange: EventEmitter<{}>;
    ngOnInit(): void;
    selectItem(item: any): void;
    modelIndex(item: any): number;
}
export declare class AckOptionsModal extends AckOptions {
    element: ElementRef;
    ackModal: any;
    ackOptions: any;
    allowClose: boolean;
    onClose: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngAfterViewInit(): void;
}
/** onEnterKey - on-enter-key attribute will be evaluated when element event onkeydown fires with enter-key */
export declare class OnEnterKey {
    element: ElementRef;
    onEnterKey: EventEmitter<{}>;
    constructor(element: ElementRef);
}
/** Disallow keyboard access to the backspace key */
export declare class PreventBackKey {
    element: ElementRef;
    preventBackKey: EventEmitter<{}>;
    constructor(element: ElementRef);
}
/** Disallow keyboard access to the enter keys */
export declare class PreventEnterKey {
    element: ElementRef;
    preventEnterKey: EventEmitter<{}>;
    constructor(element: ElementRef);
}
export declare class InputHint {
    hintStyle: {
        'font-size': string;
        'color': string;
    };
}
export declare class StatusOnlineModel {
    onChange: any;
    statusOnlineModel: any;
    statusOnlineModelChange: EventEmitter<{}>;
    constructor();
    ngOnDestroy(): void;
}
export declare class StatusOfflineModel {
    onChange: any;
    statusOfflineModel: any;
    statusOfflineModelChange: EventEmitter<{}>;
    constructor();
    ngOnDestroy(): void;
}
/** adds form element onchange listener via addEventListener('change') that calls onFormChanged scope argument */
export declare class OnFormChanged {
    element: ElementRef;
    onChange: any;
    onFormChanged: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
export declare class OnFormAlter {
    element: ElementRef;
    onChange: any;
    onFormAlter: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
}
export declare class ReaderHeaderBody {
}
export declare class ReaderHeader {
}
export declare class ReaderBody {
    element: ElementRef;
    constructor(element: ElementRef);
}
export declare class InnerHtmlModel {
    element: ElementRef;
    onChange: any;
    observer: any;
    timeout: any;
    innerHtmlModel: any;
    innerHtmlModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
export declare class ElementHeightModel {
    element: ElementRef;
    onResize: any;
    observer: any;
    timeout: any;
    elementHeightModel: any;
    elementHeightModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
export declare class ElementWidthModel {
    element: ElementRef;
    onResize: any;
    timeout: any;
    elementWidthModel: any;
    elementWidthModelChange: EventEmitter<{}>;
    constructor(element: ElementRef);
    ngOnChanges(): void;
    setModel(): void;
    ngOnDestroy(): void;
}
export declare class ScreenScrollModelY {
    onScroll: any;
    screenScrollModelY: any;
    screenScrollModelYChange: EventEmitter<{}>;
    constructor();
    ngOnDestroy(): void;
}
export declare class ScreenWidthModel {
    window: any;
    onResize: any;
    screenWidthModel: any;
    screenWidthModelChange: EventEmitter<{}>;
    constructor();
    setModel(): void;
    ngOnDestroy(): void;
}
export declare class ScreenHeightModel {
    onResize: any;
    screenHeightModel: any;
    screenHeightModelChange: EventEmitter<{}>;
    constructor();
    setModel(): void;
    ngOnDestroy(): void;
}
export declare class AbsoluteOverflowX {
    scrollBars: any;
}
export declare class ErrorWell {
    message: string;
    error: any;
    cssClasses: string;
    ngOnInit(): void;
    getErrorMessage(error: any): any;
}
/** runs shake instructions when condition returns a truthy value */
export declare class ShakeOn {
    element: ElementRef;
    timeout: any;
    shakeConstant: boolean;
    shakeOn: any;
    shakeThen: EventEmitter<{}>;
    shakeForMs: any;
    shakeForMsChange: EventEmitter<{}>;
    shakeType: any;
    shakeTypeChange: EventEmitter<{}>;
    shakeRef: any;
    shakeRefChange: EventEmitter<{}>;
    shakeTypes: string[];
    constructor(element: ElementRef);
    ngOnInit(): void;
    update(): void;
    ngOnChanges(changes: any): void;
    onFalse(): void;
    removeType(): void;
    applyType(): void;
    onTrue(): void;
}
export declare function hasClass(el: any, className: any): any;
export declare function addClass(el: any, className: any): void;
export declare function removeClass(el: any, className: any): void;
export declare const declarations: (typeof ReaderHeaderBody | typeof ReaderBody)[];