"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Path = /** @class */ (function () {
    function Path() {
    }
    Path.prototype.reconstructTo = function (node) {
        var path = [];
        while (!node.previous.equals(node)) {
            path.push(node);
            node = node.previous;
        }
        path.push(node);
        return path;
    };
    return Path;
}());
exports.default = Path;
//# sourceMappingURL=path.js.map