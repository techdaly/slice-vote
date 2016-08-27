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
var core_1 = require('@angular/core');
var PartyComponent = (function () {
    function PartyComponent() {
    }
    PartyComponent = __decorate([
        core_1.Component({
            selector: 'party',
            template: "\n            <div id=\"party\">\n              <label for=\"party\">Party</label>\n              <br>\n              <select name=\"party\">\n                <option value=\"non-affiliated\">Non-affiliated</option>\n                <option value=\"democratic\">Democratic</option>\n                <option value=\"republican\">Republican</option>\n                <option value=\"independent\">Independent</option>\n                <option value=\"working-families\">Working Families</option>\n                <option value=\"pacific-green\">Pacific Green</option>\n                <option value=\"constitution\">Constitution</option>\n                <option value=\"progressive\">Progressive</option>\n                <option value=\"americans-elect\">Americans Elect</option>\n                <option value=\"all\">All Parties</option>\n              </select>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], PartyComponent);
    return PartyComponent;
}());
exports.PartyComponent = PartyComponent;
//# sourceMappingURL=party.component.js.map