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
var aStar = /** @class */ (function (_super) {
    __extends(aStar, _super);
    function aStar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    aStar.prototype.expand = function (node) {
        var neighbours = this._explorer.getNeighbours();
        for (var i = 0; i < neighbours.length; i++) {
            var newNode = neighbours[i];
            if (!this._closedNodes.contains(newNode)) {
                if (!this._openNodes.contains(newNode)) { // create new
                    newNode.previous = null;
                    newNode.exactDistanceFromStart = Number.MAX_VALUE;
                }
                // "else:" just recalculate the distance from the start for the new node
                this.recalcDistToStart(node, newNode);
            }
        }
    };
    aStar.prototype.recalcDistToStart = function (node, newNode) {
        var newDistanceToStart = node.exactDistanceFromStart
            + this._distanceCalculator.getLength(node.fieldPos, newNode.fieldPos, distance_1.DistanceType.Edge);
        if (newDistanceToStart < newNode.exactDistanceFromStart) {
            newNode.previous = node;
            newNode.exactDistanceFromStart = newDistanceToStart;
            this.updateOrAdd(newNode);
        }
    };
    aStar.prototype.updateOrAdd = function (newNode) {
        if (this._openNodes.contains(newNode)) {
            this._openNodes.remove(newNode);
        }
        var estimatedDistance = newNode.exactDistanceFromStart
            + this._distanceCalculator.getLength(newNode.fieldPos, this._finishNode.fieldPos, distance_1.DistanceType.Euclidean);
        this._openNodes.enqueue(newNode, estimatedDistance);
    };
    return aStar;
}(best_first_search_1.default));
exports.default = aStar;
//# sourceMappingURL=a-star.js.map