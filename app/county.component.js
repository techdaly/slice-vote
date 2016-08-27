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
var CountyComponent = (function () {
    function CountyComponent() {
    }
    CountyComponent = __decorate([
        core_1.Component({
            selector: 'county',
            template: "\n            <div id=\"county\">\n              <label for=\"county\">County</label>\n              <br>\n              <select name=\"county\">\n                <option value=\"baker\">Baker County</option>\n                <option value=\"benton\">Benton County</option>\n                <option value=\"clackamas\">Clackamas County</option>\n                <option value=\"clatsop\">Clatsop County</option>\n                <option value=\"columbia\">Columbia County</option>\n                <option value=\"coos\">Coos County</option>\n                <option value=\"crook\">Crook County</option>\n                <option value=\"curry\">Curry County</option>\n                <option value=\"deschutes\">Deschutes County</option>\n                <option value=\"douglas\">Douglas County</option>\n                <option value=\"gilliam\">Gilliam County</option>\n                <option value=\"grant\">Grant County</option>\n                <option value=\"harney\">Harney County</option>\n                <option value=\"hood-river\">Hood River County</option>\n                <option value=\"jackson\">Jackson County</option>\n                <option value=\"jefferson\">Jefferson County</option>\n                <option value=\"josephine\">Josephine County</option>\n                <option value=\"klamath\">Klamath County</option>\n                <option value=\"lake\">Lake County</option>\n                <option value=\"lane\">Lane County</option>\n                <option value=\"lincoln\">Lincoln County</option>\n                <option value=\"linn\">Linn County</option>\n                <option value=\"malheur\">Malheur County</option>\n                <option value=\"marion\">Marion County</option>\n                <option value=\"morrow\">Morrow County</option>\n                <option value=\"multnomah\">Multnomah County</option>\n                <option value=\"polk\">Polk County</option>\n                <option value=\"sherman\">Sherman County</option>\n                <option value=\"tillamook\">Tillamook County</option>\n                <option value=\"umatilla\">Umatilla County</option>\n                <option value=\"union\">Union County</option>\n                <option value=\"wallowa\">Wallowa County</option>\n                <option value=\"wasco\">Wasco County</option>\n                <option value=\"washington\">Washington County</option>\n                <option value=\"wheeler\">Wheeler County</option>\n                <option value=\"yamhill\">Yamhill County</option>\n              </select>\n            </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], CountyComponent);
    return CountyComponent;
}());
exports.CountyComponent = CountyComponent;
//# sourceMappingURL=county.component.js.map