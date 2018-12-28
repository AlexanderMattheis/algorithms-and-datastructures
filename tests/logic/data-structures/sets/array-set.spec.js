"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var array_set_1 = require("../../../../source/logic/data-structures/sets/array-set");
var vector_1 = require("../../../../source/logic/math/vector");
describe('Array Set', function () {
    it('Adding duplicates.', function () {
        var testSet = new array_set_1.default(); // size: 5 !
        // push 1 duplicate
        testSet.add(new vector_1.default(5, 5));
        testSet.add(new vector_1.default(5, 4));
        testSet.add(new vector_1.default(6, 5));
        testSet.add(new vector_1.default(5, 6));
        testSet.add(new vector_1.default(4, 5));
        testSet.add(new vector_1.default(5, 5));
        chai_1.expect(testSet.count).to.equal(5);
    });
    it('Clearing Set.', function () {
        var testSet = new array_set_1.default(); // size: 5 !
        // add elements and clear
        testSet.add(new vector_1.default(5, 5));
        testSet.add(new vector_1.default(5, 4));
        testSet.add(new vector_1.default(6, 5));
        testSet.add(new vector_1.default(5, 6));
        testSet.add(new vector_1.default(4, 5));
        testSet.clear();
        chai_1.expect(testSet.count).to.equal(0);
    });
    it('Testing Contains.', function () {
        var testSet = new array_set_1.default(); // size: 5 !
        // add elements
        testSet.add(new vector_1.default(5, 5));
        testSet.add(new vector_1.default(5, 4));
        testSet.add(new vector_1.default(6, 5));
        testSet.add(new vector_1.default(5, 6));
        testSet.add(new vector_1.default(4, 5));
        var centerContained = testSet.contains(new vector_1.default(5, 5));
        var topContained = testSet.contains(new vector_1.default(5, 4));
        var rightContained = testSet.contains(new vector_1.default(6, 5));
        var bottomContained = testSet.contains(new vector_1.default(5, 6));
        var leftContained = testSet.contains(new vector_1.default(4, 5));
        var notContained = testSet.contains(new vector_1.default(6, 6));
        chai_1.expect(centerContained).to.equal(true);
        chai_1.expect(topContained).to.equal(true);
        chai_1.expect(rightContained).to.equal(true);
        chai_1.expect(bottomContained).to.equal(true);
        chai_1.expect(leftContained).to.equal(true);
        chai_1.expect(notContained).to.equal(false);
    });
});
//# sourceMappingURL=array-set.spec.js.map