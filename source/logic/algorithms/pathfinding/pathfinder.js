"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pathfinder = /** @class */ (function () {
    function Pathfinder(map, tools) {
        this._map = map;
        this._closedNodes = tools.closedNodes;
        this._openNodes = tools.openNodes;
        this._distanceCalculator = tools.distanceCalculator;
        this._explorer = tools.explorer;
    }
    Pathfinder.prototype.empty = function (closedNodes, openNodes) {
        closedNodes.clear();
        openNodes.clear();
    };
    Pathfinder.prototype.initNodes = function (start, end) {
        this._startNode = this._map.nodes[start.x][start.y];
        this._startNode.previous = this._startNode;
        this._finishNode = this._map.nodes[end.x][end.y];
    };
    return Pathfinder;
}());
exports.default = Pathfinder;
//# sourceMappingURL=pathfinder.js.map