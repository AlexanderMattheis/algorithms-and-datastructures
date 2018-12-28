"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_set_1 = require("./data-structures/sets/array-set");
var distance_1 = require("./math/distance");
var list_priority_queue_1 = require("./data-structures/queues/list-priority-queue");
var explorer_1 = require("./algorithms/pathfinding/arrangement/explorer");
/**
 * Allows to change the Pathfinder and many more.
 */
var PathingManager = /** @class */ (function () {
    function PathingManager(map) {
        this._tools = new Tools(map);
    }
    Object.defineProperty(PathingManager.prototype, "tools", {
        get: function () {
            return this._tools;
        },
        enumerable: true,
        configurable: true
    });
    return PathingManager;
}());
exports.default = PathingManager;
var Tools = /** @class */ (function () {
    //</editor-fold>
    function Tools(map) {
        this._closedNodes = new array_set_1.default();
        this._openNodes = new list_priority_queue_1.default();
        this._distanceCalculator = new distance_1.default();
        this._explorer = new explorer_1.default(map);
    }
    Object.defineProperty(Tools.prototype, "closedNodes", {
        // data structures
        get: function () {
            return this._closedNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tools.prototype, "openNodes", {
        get: function () {
            return this._openNodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tools.prototype, "distanceCalculator", {
        // tools
        get: function () {
            return this._distanceCalculator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tools.prototype, "explorer", {
        get: function () {
            return this._explorer;
        },
        enumerable: true,
        configurable: true
    });
    return Tools;
}());
exports.Tools = Tools;
//# sourceMappingURL=pathing-manager.js.map