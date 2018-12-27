"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var xmlhttprequest_1 = require("xmlhttprequest");
var FileReader = /** @class */ (function () {
    function FileReader() {
    }
    FileReader.prototype.readInFile = function (path) {
        var request = new xmlhttprequest_1.default();
        request.open("GET", path, false);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && (request.status === 200 || request.status == 0)) {
                return request.responseText;
            }
        };
        return undefined;
    };
    return FileReader;
}());
exports.default = FileReader;
//# sourceMappingURL=file-reader.js.map