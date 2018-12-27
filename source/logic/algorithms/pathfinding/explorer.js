"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Explorer = /** @class */ (function () {
    function Explorer(graph) {
        this._graph = graph;
    }
    return Explorer;
}());
exports.default = Explorer;
var QuadExplorer = /** @class */ (function (_super) {
    __extends(QuadExplorer, _super);
    function QuadExplorer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QuadExplorer;
}(Explorer));
exports.QuadExplorer = QuadExplorer;
var OctaExplorer = /** @class */ (function (_super) {
    __extends(OctaExplorer, _super);
    function OctaExplorer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OctaExplorer;
}(Explorer));
exports.OctaExplorer = OctaExplorer;
//# sourceMappingURL=explorer.js.map