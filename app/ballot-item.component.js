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
var BallotItemComponent = (function () {
    function BallotItemComponent() {
    }
    BallotItemComponent = __decorate([
        core_1.Component({
            selector: 'ballot-item',
            template: "\n            <div id=\"ballot-item\">\n              <label for=\"ballot-item\">Item</label>\n              <br>\n              <select name=\"ballot-item\">\n                <option value=\"candidates\">Candidates</option>\n                <option value=\"measure\">Measure</option>\n              </select>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], BallotItemComponent);
    return BallotItemComponent;
}());
exports.BallotItemComponent = BallotItemComponent;
//# sourceMappingURL=ballot-item.component.js.map