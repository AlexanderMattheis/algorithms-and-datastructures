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
var best_first_search_1 = require("../best-first-search");
var distance_1 = require("../../../math/distance");
var GreedyBestFirstSearch = /** @class */ (function (_super) {
    __extends(GreedyBestFirstSearch, _super);
    function GreedyBestFirstSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreedyBestFirstSearch.prototype.recalcDistToStart = function (node, newNode) {
        var newDistanceToStart = this._distanceCalculator.getLength(node.fieldPos, newNode.fieldPos, distance_1.DistanceType.Edge);
        this.updateDistance(node, newNode, newDistanceToStart);
    };
    return GreedyBestFirstSearch;
}(best_first_search_1.default));
exports.default = GreedyBestFirstSearch;
//# sourceMappingURL=greedy-best-first-search.js.map