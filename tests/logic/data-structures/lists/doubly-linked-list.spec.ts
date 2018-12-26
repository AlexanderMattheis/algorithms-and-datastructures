import { expect } from 'chai';
import 'mocha';

import DoublyLinkedList from "../../../../source/logic/data-structures/lists/doubly-linked-list";
import TestHelpers from "./test-helpers";

describe('Doubly Linked List', () => {

    it('Inserting somewhere inside.', () => {
        let testList: DoublyLinkedList<number> = new DoublyLinkedList();  // size: 5 !

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.insert(10, 1);

        expect(TestHelpers.getDoublyLinkedListValues(testList, 4)).to.deep.equal([5, 6, 10, 8]);
        expect(TestHelpers.getDoublyLinkedListValues(testList, 4, true)).to.deep.equal([5, 6, 10, 8]);
    });

    it('Inserting in an empty list.', () => {
        let testList: DoublyLinkedList<number> = new DoublyLinkedList();

        testList.insert(10, 0);

        expect(TestHelpers.getDoublyLinkedListValues(testList, 1)).to.deep.equal([10]);
        expect(TestHelpers.getDoublyLinkedListValues(testList, 1, true)).to.deep.equal([10]);
    });

    it('Inserting after the last position.', () => {
        let testList: DoublyLinkedList<number> = new DoublyLinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.insert(10, 2);

        expect(TestHelpers.getDoublyLinkedListValues(testList, 4)).to.deep.equal([5, 6, 8, 10]);
        expect(TestHelpers.getDoublyLinkedListValues(testList, 4, true)).to.deep.equal([5, 6, 8, 10]);
    });

    it('Inserting at a non-existent too high position.', () => {
        let testList: DoublyLinkedList<number> = new DoublyLinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.insert(10, 3);

        expect(TestHelpers.getDoublyLinkedListValues(testList, 3)).to.deep.equal([5, 6, 8]);
        expect(TestHelpers.getDoublyLinkedListValues(testList, 3, true)).to.deep.equal([5, 6, 8]);
    });

    it('Delete somewhere inside.', () => {
        let testList: DoublyLinkedList<number> = new DoublyLinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.delete(1);

        expect(TestHelpers.getDoublyLinkedListValues(testList, 2)).to.deep.equal([5, 8]);
        expect(TestHelpers.getDoublyLinkedListValues(testList, 2, true)).to.deep.equal([5, 8]);
    });

    it('Delete at the start.', () => {
        let testList: DoublyLinkedList<number> = new DoublyLinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.delete(0);

        expect(TestHelpers.getDoublyLinkedListValues(testList, 2)).to.deep.equal([6, 8]);
        expect(TestHelpers.getDoublyLinkedListValues(testList, 2, true)).to.deep.equal([6, 8]);
    });

    it('Delete at the end.', () => {
        let testList: DoublyLinkedList<number> = new DoublyLinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.delete(2);

        expect(TestHelpers.getDoublyLinkedListValues(testList, 2)).to.deep.equal([5, 6]);
        expect(TestHelpers.getDoublyLinkedListValues(testList, 2, true)).to.deep.equal([5, 6]);
    });
});