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
var LanguageComponent = (function () {
    function LanguageComponent() {
    }
    LanguageComponent = __decorate([
        core_1.Component({
            selector: 'language',
            template: "\n            <div id=\"language\">\n              <select>\n                <option value=\"english\">English</option>\n                <option class=\"dim\" value=\"spanish\">Espa\u00F1ol</option>\n                <option class=\"dim\" value=\"russian\">\u0440\u0443\u0441\u0441\u043A\u0438\u0439</option>\n                <option class=\"dim\" value=\"vietnamese\">Ti\u1EBFng Vi\u1EC7t</option>\n                <option class=\"dim\" value=\"ukrainian\">\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439</option>\n                <option class=\"dim\" value=\"hmong\">\u0E0A\u0E32\u0E27\u0E21\u0E49\u0E07</option>\n              </select>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], LanguageComponent);
    return LanguageComponent;
}());
exports.LanguageComponent = LanguageComponent;
//# sourceMappingURL=language.component.js.map