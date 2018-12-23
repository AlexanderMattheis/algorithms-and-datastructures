"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var stack_1 = require("../../../source/logic/data-structures/stack");
describe('Stack Unit-Tests', function () {
    it('Testing all functionality.', function () {
        var testStack = new stack_1.default(5);
        testStack.push(1);
        testStack.push(5);
    });
});
//# sourceMappingURL=stack.spec.js.map