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
var best_first_search_1 = require("./best-first-search");
var UniformCostSearch = /** @class */ (function (_super) {
    __extends(UniformCostSearch, _super);
    function UniformCostSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UniformCostSearch.prototype.updateOrAdd = function (newNode) {
        if (this._openNodes.contains(newNode)) {
            this._openNodes.remove(newNode);
        }
        this._openNodes.enqueue(newNode, newNode.exactDistanceFromStart);
    };
    return UniformCostSearch;
}(best_first_search_1.default));
exports.default = UniformCostSearch;
//# sourceMappingURL=uniform-cost-search.js.map