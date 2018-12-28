"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var doubly_linked_list_1 = require("../../../../source/logic/data-structures/lists/doubly-linked-list");
var test_helpers_1 = require("../../../test-helpers");
describe('Data-Structure - Doubly Linked List', function () {
    it('Inserting somewhere inside.', function () {
        var testList = new doubly_linked_list_1.default(); // size: 5 !
        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.insert(10, 1);
        chai_1.expect(testList.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 4)).to.deep.equal([5, 6, 10, 8]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 4, true)).to.deep.equal([5, 6, 10, 8]);
    });
    it('Inserting in an empty list.', function () {
        var testList = new doubly_linked_list_1.default();
        testList.insert(10, 0);
        chai_1.expect(testList.count).to.equal(1);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 1)).to.deep.equal([10]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 1, true)).to.deep.equal([10]);
    });
    it('Inserting after the last position.', function () {
        var testList = new doubly_linked_list_1.default();
        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.insert(10, 2);
        chai_1.expect(testList.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 4)).to.deep.equal([5, 6, 8, 10]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 4, true)).to.deep.equal([5, 6, 8, 10]);
    });
    it('Inserting at a non-existent too high position.', function () {
        var testList = new doubly_linked_list_1.default();
        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.insert(10, 3);
        chai_1.expect(testList.count).to.equal(3);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 3)).to.deep.equal([5, 6, 8]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 3, true)).to.deep.equal([5, 6, 8]);
    });
    it('Delete somewhere inside.', function () {
        var testList = new doubly_linked_list_1.default();
        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.delete(1);
        chai_1.expect(testList.count).to.equal(2);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 2)).to.deep.equal([5, 8]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 2, true)).to.deep.equal([5, 8]);
    });
    it('Delete at the start.', function () {
        var testList = new doubly_linked_list_1.default();
        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.delete(0);
        chai_1.expect(testList.count).to.equal(2);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 2)).to.deep.equal([6, 8]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 2, true)).to.deep.equal([6, 8]);
    });
    it('Delete at the end.', function () {
        var testList = new doubly_linked_list_1.default();
        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.delete(2);
        chai_1.expect(testList.count).to.equal(2);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 2)).to.deep.equal([5, 6]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testList, 2, true)).to.deep.equal([5, 6]);
    });
});
//# sourceMappingURL=doubly-linked-list.spec.js.map