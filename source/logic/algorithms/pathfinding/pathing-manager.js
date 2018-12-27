"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Allows to change the Pathfinder and many more.
 */
var PathingManager = /** @class */ (function () {
    function PathingManager() {
        this.tools = new Tools();
    }
    return PathingManager;
}());
exports.default = PathingManager;
var Tools = /** @class */ (function () {
    function Tools() {
    }
    Object.defineProperty(Tools.prototype, "closedNodes", {
        //</editor-fold>
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