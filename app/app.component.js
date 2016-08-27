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
var jump_link_component_1 = require('./jump-link.component');
var language_component_1 = require('./language.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n            <header>\n            <div class=\"left-header\">\n              <jump-link></jump-link>\n              <language></language>\n            </div>\n\n            <div class=\"center-header\">\n              <h1 id=\"site-title\">Slice Vote</h1>\n              <site-author></site-author>\n            </div>\n\n            <div class=\"right-header\">\n              <email-me></email-me>\n              <vote-reg></vote-reg>\n              <donate></donate>\n            </div>\n            </header>\n            ",
            directives: [jump_link_component_1.JumpLinkComponent, language_component_1.LanguageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map