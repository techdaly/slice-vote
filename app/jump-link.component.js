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
var JumpLinkComponent = (function () {
    function JumpLinkComponent() {
    }
    JumpLinkComponent = __decorate([
        core_1.Component({
            selector: 'jump-link',
            template: "\n            <div id=\"jumplink\">\n            <h3>Jump-To Links</h3>\n            <ul>\n              <li><a href=\"#\">Languages</a></li>\n              <li><a href=\"#\">Site Authors</a></li>\n              <li><a href=\"#\">Voting Reminders</a></li>\n              <li><a href=\"#\">Voter Registration</a></li>\n              <li><a href=\"#\">Donate</a></li>\n              <li><a href=\"#\">Table Navigation</a></li>\n              <li><a href=\"#\">Main Table</a></li>\n            </ul>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], JumpLinkComponent);
    return JumpLinkComponent;
}());
exports.JumpLinkComponent = JumpLinkComponent;
//# sourceMappingURL=jump-link.component.js.map