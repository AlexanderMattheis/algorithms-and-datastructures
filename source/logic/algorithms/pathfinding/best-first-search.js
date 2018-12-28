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
var path_1 = require("./arrangement/path");
var pathfinder_1 = require("./pathfinder");
var distance_1 = require("../../math/distance");
var BestFirstSearch = /** @class */ (function (_super) {
    __extends(BestFirstSearch, _super);
    function BestFirstSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BestFirstSearch.prototype.getRoute = function (start, end) {
        if (this._map.collision[end.x][end.y])
            return null;
        this.empty(this._closedNodes, this._openNodes);
        this.initNodes(start, end);
        this._startNode.exactDistanceFromStart = 0;
        this._openNodes.enqueue(this._startNode, 0);
        while (!this._openNodes.isEmpty()) {
            var node = this._openNodes.dequeue();
            this._closedNodes.add(node);
            if (this._finishNode.equals(node)) {
                return new path_1.default().reconstructTo(node);
            }
            this.expand(node);
        }
        return null;
    };
    BestFirstSearch.prototype.expand = function (node) {
        var neighbours = this._explorer.getNeighbours(node);
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
    BestFirstSearch.prototype.updateDistance = function (node, newNode, newDistanceToStart) {
        if (newDistanceToStart < newNode.exactDistanceFromStart) {
            newNode.previous = node;
            newNode.exactDistanceFromStart = newDistanceToStart;
            this.updateOrAdd(newNode);
        }
    };
    BestFirstSearch.prototype.updateOrAdd = function (newNode) {
        if (this._openNodes.contains(newNode)) {
            this._openNodes.remove(newNode);
        }
        var estimatedDistance = newNode.exactDistanceFromStart
            + this._distanceCalculator.getLength(newNode.fieldPos, this._finishNode.fieldPos, distance_1.DistanceType.Euclidean);
        this._openNodes.enqueue(newNode, estimatedDistance);
    };
    return BestFirstSearch;
}(pathfinder_1.default));
exports.default = BestFirstSearch;
//# sourceMappingURL=best-first-search.js.map