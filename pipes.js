"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function yesno(input) {
    if (input == null)
        return input;
    return input ? 'yes' : 'no';
}
exports.yesno = yesno;
function yesNo(input) {
    if (input == null)
        return input;
    return input ? 'Yes' : 'No';
}
exports.yesNo = yesNo;
function numbers(input) {
    return input ? String(input).replace(/[^0-9]/g, '') : input;
}
exports.numbers = numbers;
function capitalizeWords(input) {
    var reg = /[^\W_]+[^\s-]* */g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
exports.capitalizeWords = capitalizeWords;
/** each sentence word is capitalized */
function capitalize(input) {
    input = capitalizeOne(input);
    var reg = /[.?!][\s\r\t]+\w/g;
    return (!!input) ? input.replace(reg, capitalizeAfterSentence) : '';
}
exports.capitalize = capitalize;
function capitalizeAfterSentence(input) {
    var reg = /[\s\r\t]\w/g;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0) + txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase(); }) : '';
}
function capitalizeOne(input) {
    var reg = /[^\W_]+[^\s-]*/;
    return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
}
var Capitalize = (function () {
    function Capitalize() {
    }
    Capitalize.prototype.transform = function (input) {
        return capitalize(input);
    };
    return Capitalize;
}());
Capitalize = __decorate([
    core_1.Pipe({ name: 'capitalize' })
], Capitalize);
exports.Capitalize = Capitalize;
var CapitalizeWords = (function () {
    function CapitalizeWords() {
    }
    CapitalizeWords.prototype.transform = function (input) {
        return capitalizeWords(input);
    };
    return CapitalizeWords;
}());
CapitalizeWords = __decorate([
    core_1.Pipe({ name: 'capitalizeWords' })
], CapitalizeWords);
exports.CapitalizeWords = CapitalizeWords;
var Yesno = (function () {
    function Yesno() {
    }
    Yesno.prototype.transform = function (input) {
        return yesno(input);
    };
    return Yesno;
}());
Yesno = __decorate([
    core_1.Pipe({ name: 'yesno' })
], Yesno);
exports.Yesno = Yesno;
var YesNo = (function () {
    function YesNo() {
    }
    YesNo.prototype.transform = function (input) {
        return yesNo(input);
    };
    return YesNo;
}());
YesNo = __decorate([
    core_1.Pipe({ name: 'YesNo' })
], YesNo);
exports.YesNo = YesNo;
var Numbers = (function () {
    function Numbers() {
    }
    Numbers.prototype.transform = function (input) {
        return numbers(input);
    };
    return Numbers;
}());
Numbers = __decorate([
    core_1.Pipe({ name: 'numbers' })
], Numbers);
exports.Numbers = Numbers;
var Keys = (function () {
    function Keys() {
    }
    Keys.prototype.transform = function (input) {
        if (input)
            return Object.keys(input);
    };
    return Keys;
}());
Keys = __decorate([
    core_1.Pipe({ name: 'keys' })
], Keys);
exports.Keys = Keys;
var TypeofPipe = (function () {
    function TypeofPipe() {
    }
    TypeofPipe.prototype.transform = function (input) {
        return typeof (input);
    };
    return TypeofPipe;
}());
TypeofPipe = __decorate([
    core_1.Pipe({ name: 'typeof' })
], TypeofPipe);
exports.TypeofPipe = TypeofPipe;
var ConsolePipe = (function () {
    function ConsolePipe() {
    }
    ConsolePipe.prototype.transform = function () {
        return console.log.apply(console, arguments);
    };
    return ConsolePipe;
}());
ConsolePipe = __decorate([
    core_1.Pipe({ name: 'console' })
], ConsolePipe);
exports.ConsolePipe = ConsolePipe;
exports.declarations = [
    Capitalize,
    CapitalizeWords,
    Yesno,
    YesNo,
    Numbers,
    Keys,
    TypeofPipe,
    ConsolePipe
];
//# sourceMappingURL=pipes.js.map