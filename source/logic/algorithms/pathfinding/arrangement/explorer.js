"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Explorer = /** @class */ (function () {
    function Explorer(map) {
        this._map = map;
    }
    Explorer.prototype.getNeighbours = function (node) {
        var blockedTop = this._map.isBlocked(node.fieldPos.x, node.fieldPos.y - 1);
        var blockedRight = this._map.isBlocked(node.fieldPos.x + 1, node.fieldPos.y);
        var blockedBottom = this._map.isBlocked(node.fieldPos.x, node.fieldPos.y + 1);
        var blockedLeft = this._map.isBlocked(node.fieldPos.x - 1, node.fieldPos.y);
        return this.getCardinalNeighbours(node, blockedTop, blockedRight, blockedBottom, blockedLeft);
    };
    Explorer.prototype.getCardinalNeighbours = function (node, blockedTop, blockedRight, blockedBottom, blockedLeft) {
        var neighbours = [];
        //  | |o| |
        //  -------
        //  | | | |
        //  -------
        //  | | | |
        if (!blockedTop) {
            neighbours.push(this._map.nodes[node.fieldPos.x][node.fieldPos.y - 1]);
        }
        //  | | | |
        //  -------
        //  | | |o|
        //  -------
        //  | | | |
        if (!blockedRight) {
            neighbours.push(this._map.nodes[node.fieldPos.x + 1][node.fieldPos.y]);
        }
        //  | | | |
        //  -------
        //  | | | |
        //  -------
        //  | |o| |
        if (!blockedBottom) {
            neighbours.push(this._map.nodes[node.fieldPos.x][node.fieldPos.y + 1]);
        }
        //  | | | |
        //  -------
        //  |o| | |
        //  -------
        //  | | | |
        if (!blockedLeft) {
            neighbours.push(this._map.nodes[node.fieldPos.x - 1][node.fieldPos.y]);
        }
        return neighbours;
    };
    return Explorer;
}());
exports.default = Explorer;
//# sourceMappingURL=explorer.js.map