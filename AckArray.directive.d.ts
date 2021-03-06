import { EventEmitter } from '@angular/core';
export declare class AckArray {
    idKey: any;
    ref: any;
    refChange: EventEmitter<{}>;
    pageAt: number;
    pages: any[];
    pagesChange: EventEmitter<{}>;
    array: any[];
    arrayChange: EventEmitter<{}>;
    keyMap: any;
    keyMapChange: EventEmitter<{}>;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    buildMap(): void;
    only(item: any): void;
    createPages(): void;
    getItemId(item: any, itemIndexName?: string): any;
    getCompareArray(): any[];
    selected(item: any): boolean;
    itemIndex(item: any, itemIndexName?: string): number;
    toggle(item: any): this;
    push(item: any): this;
    unshift(item: any): this;
    splice(x: number, y?: number): this;
    param(): any[];
}
