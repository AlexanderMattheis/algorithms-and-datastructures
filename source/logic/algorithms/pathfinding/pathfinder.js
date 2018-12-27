"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pathfinder = /** @class */ (function () {
    function Pathfinder(graph, tools) {
        this._graph = graph;
        this._closedNodes = tools.closedNodes;
        this._openNodes = tools.openNodes;
        this._distanceCalculator = tools.distanceCalculator;
        this._explorer = tools.explorer;
    }
    Pathfinder.prototype.clearDataStructures = function () {
        this._closedNodes.clear();
        this._openNodes.clear();
    };
    return Pathfinder;
}());
exports.default = Pathfinder;
//# sourceMappingURL=pathfinder.js.map