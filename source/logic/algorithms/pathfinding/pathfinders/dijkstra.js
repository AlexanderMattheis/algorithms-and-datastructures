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
var path_1 = require("../arrangement/path");
var distance_1 = require("../../../math/distance");
var Dijkstra = /** @class */ (function (_super) {
    __extends(Dijkstra, _super);
    function Dijkstra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * If an end-vector is specified,
     * the path to the end-vector is returned.
     * Else an associative array with all distances of
     * non-blocked nodes is returned.
     */
    Dijkstra.prototype.getComputed = function (start, end) {
        this.init(this._openNodes, start, end);
        // let i: number = 1;
        while (!this._openNodes.isEmpty()) {
            var node = this._openNodes.dequeue();
            if (end !== undefined) {
                if (this._finishNode.equals(node)) {
                    return new path_1.default().reconstructTo(node);
                }
            }
            this.expand(node);
            // console.log(i);
            // i++;
        }
        return this.getDistances(this._map.nodes);
    };
    Dijkstra.prototype.init = function (priorityQueue, start, end) {
        for (var posY = 0; posY < this._map.height; posY++) {
            for (var posX = 0; posX < this._map.width; posX++) {
                if (!this._map.isBlocked(posX, posY)) {
                    var node = this._map.nodes[posX][posY];
                    if (node.fieldPos.x === start.x && node.fieldPos.y === start.y) {
                        node.exactDistanceFromStart = 0; // to dequeue this node first
                    }
                    else {
                        node.exactDistanceFromStart = Number.MAX_VALUE;
                    }
                    priorityQueue.enqueue(node, node.exactDistanceFromStart);
                }
            }
        }
        this._startNode = this._map.nodes[start.x][start.y];
        this._startNode.previous = this._startNode;
        if (end !== undefined) {
            this._finishNode = this._map.nodes[end.x][end.y];
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
        var newDistanceToStart = node.exactDistanceFromStart +
            this._distanceCalculator.getLength(node.fieldPos, newNode.fieldPos, distance_1.DistanceType.Edge);
        // if (node.fieldPos.x === 8 && node.fieldPos.y === 5) {
        //     console.log(node.exactDistanceFromStart);
        // }
        if (newDistanceToStart < newNode.exactDistanceFromStart) {
            newNode.previous = node;
            newNode.exactDistanceFromStart = newDistanceToStart;
            this.update(newNode);
        }
    };
    Dijkstra.prototype.update = function (newNode) {
        if (this._openNodes.contains(newNode)) {
            this._openNodes.remove(newNode);
            this._openNodes.enqueue(newNode, newNode.exactDistanceFromStart);
        }
    };
    Dijkstra.prototype.getDistances = function (nodes) {
        var distanceForPosition = {};
        for (var x = 0; x < nodes.length; x++) {
            for (var y = 0; y < nodes[0].length; y++) {
                if (!this._map.isBlocked(x, y)) {
                    distanceForPosition[[x, y].toString()] = nodes[x][y].exactDistanceFromStart;
                }
            }
        }
        return distanceForPosition;
    };
    return Dijkstra;
}(pathfinder_1.default));
exports.default = Dijkstra;
//# sourceMappingURL=dijkstra.js.map