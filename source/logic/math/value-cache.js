"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValueCache = /** @class */ (function () {
    function ValueCache() {
    }
    Object.defineProperty(ValueCache, "sqrt2", {
        get: function () {
            return ValueCache._sqrt2;
        },
        enumerable: true,
        configurable: true
    });
    ValueCache._sqrt2 = 1.414213562;
    return ValueCache;
}());
exports.default = ValueCache;
//# sourceMappingURL=value-cache.js.map