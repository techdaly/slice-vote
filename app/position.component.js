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
var PositionComponent = (function () {
    function PositionComponent() {
    }
    PositionComponent = __decorate([
        core_1.Component({
            selector: 'position',
            template: "\n            <div id=\"position\">\n              <label for=\"position\">Position</label>\n              <br>\n              <select name=\"position\">\n                <option value=\"mayor\">Mayor</option>\n                <option value=\"county-commissioner-D1\">County Commissioner, District #1</option>\n                <option value=\"county-commissioner-D3\">County Commissioner, District #3</option>\n                <option value=\"county-commissioner-D4\">County Commissioner, District #4</option>\n                <option value=\"city-commissioner-P1\">City Commissioner, Position 1</option>\n                <option value=\"city-commissioner-P4\">City Commissioner, Position 4</option>\n                <option value=\"metro-councilor-D5\">Metro Councilor, 5th District</option>\n                <option value=\"metro-councilor-D6\">Metro Councilor, 6th District</option>\n              </select>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], PositionComponent);
    return PositionComponent;
}());
exports.PositionComponent = PositionComponent;
//# sourceMappingURL=position.component.js.map