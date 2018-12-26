"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelpers = /** @class */ (function () {
    function TestHelpers() {
    }
    TestHelpers.getLinkedListValues = function (startNode, count) {
        var values = new Array(count);
        var currentNode = startNode;
        for (var i = 0; i < values.length; i++) {
            values[i] = currentNode.value;
            currentNode = currentNode.next;
        }
        return values;
    };
    TestHelpers.getDoublyLinkedListValues = function (list, count, fromRightEnd) {
        var values = new Array(count);
        if (fromRightEnd) {
            var currentNode = list.leaf;
            for (var i = values.length - 1; i >= 0; i--) {
                values[i] = currentNode.value;
                currentNode = currentNode.previous;
            }
        }
        else {
            var currentNode = list.root;
            for (var i = 0; i < values.length; i++) {
                values[i] = currentNode.value;
                currentNode = currentNode.next;
            }
        }
        return values;
    };
    return TestHelpers;
}());
exports.default = TestHelpers;
//# sourceMappingURL=test-helpers.js.map