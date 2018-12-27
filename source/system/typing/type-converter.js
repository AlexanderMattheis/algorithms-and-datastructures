"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeConverter = /** @class */ (function () {
    function TypeConverter() {
    }
    TypeConverter.prototype.to2DArray = function (obj, height, width) {
        var array2D = this.init(height);
        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                array2D[i][j] = obj[[i, j].toString()];
            }
        }
        return array2D;
    };
    TypeConverter.prototype.init = function (height) {
        var array2D = [];
        for (var i = 0; i < height; i++) {
            array2D[i] = [];
        }
        return array2D;
    };
    return TypeConverter;
}());
exports.default = TypeConverter;
//# sourceMappingURL=type-converter.js.map