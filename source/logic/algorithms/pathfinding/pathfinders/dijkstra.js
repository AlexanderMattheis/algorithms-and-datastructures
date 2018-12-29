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
var pathfinder_1 = require("../pathfinder");
var Dijkstra = /** @class */ (function (_super) {
    __extends(Dijkstra, _super);
    function Dijkstra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dijkstra.prototype.getComputed = function (start, end) {
        this.init(start, this._openNodes);
        while (!this._openNodes.isEmpty()) {
            var node = this._openNodes.dequeue();
            this.expand(node);
        }
    };
    Dijkstra.prototype.init = function (start, priorityQueue) {
        var nonBlockedNode = [];
        for (var posY = 0; posY < this._map.height; posY++) {
            for (var posX = 0; posX < this._map.width; posX++) {
                if (!this._map.isBlocked(posX, posY)) {
                    var node = this._map.nodes[posX][posY];
                    if (node === this._startNode) {
                        node.exactDistanceFromStart = 0; // to dequeue this node first
                    }
                    else {
                        node.exactDistanceFromStart = Number.MAX_VALUE;
                    }
                    priorityQueue.enqueue(node, node.exactDistanceFromStart);
                }
            }
        }
    };
    Dijkstra.prototype.expand = function (node) {
        var neighbours = this._explorer.getNeighbours(node);
        for (var i = 0; i < neighbours.length; i++) {
            var newNode = neighbours[i];
            if (this._openNodes.contains(newNode)) {
                this.recalcDistToStart(node, newNode);
            }
        }
    };
    Dijkstra.prototype.recalcDistToStart = function (node, newNode) {
        var newDistanceToStart = node.exactDistanceFromStart;
        if (newDistanceToStart < newNode.exactDistanceFromStart) {
            newNode.previous = node;
            newNode.exactDistanceFromStart = newDistanceToStart;
        }
    };
    return Dijkstra;
}(pathfinder_1.default));
exports.default = Dijkstra;
//# sourceMappingURL=dijkstra.js.map