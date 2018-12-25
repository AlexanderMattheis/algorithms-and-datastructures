"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var stack_1 = require("../../../../source/logic/data-structures/finite/stack");
describe('Stack', function () {
    it('Adding too many elements.', function () {
        var testStack = new stack_1.default(5); // size: 5 !
        chai_1.expect(testStack.top()).to.equal(null);
        // push 6 elements (too many!)
        testStack.push(1);
        chai_1.expect(testStack.top()).to.equal(1);
        testStack.push(5);
        testStack.push(6);
        testStack.push(6);
        testStack.push(8);
        testStack.push(9);
        chai_1.expect(testStack.count).to.equal(5);
        chai_1.expect(testStack.top()).to.equal(8);
    });
    it('Adding/Removing elements.', function () {
        var testStack = new stack_1.default(5);
        chai_1.expect(testStack.isEmpty()).to.equal(true);
        // adding
        testStack.push(1);
        chai_1.expect(testStack.isEmpty()).to.equal(false);
        testStack.push(5);
        // removing first
        var value = testStack.pop();
        chai_1.expect(testStack.count).to.equal(1);
        chai_1.expect(value).to.equal(5);
        chai_1.expect(testStack.isEmpty()).to.equal(false);
        // removing second
        value = testStack.pop();
        chai_1.expect(testStack.count).to.equal(0);
        chai_1.expect(value).to.equal(1);
        chai_1.expect(testStack.isEmpty()).to.equal(true);
        // removing nothing
        value = testStack.pop();
        chai_1.expect(testStack.count).to.equal(0);
        chai_1.expect(value).to.equal(null);
        chai_1.expect(testStack.isEmpty()).to.equal(true);
    });
});
//# sourceMappingURL=stack.spec.js.map