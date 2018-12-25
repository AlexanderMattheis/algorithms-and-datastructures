import { expect } from 'chai';
import 'mocha';

import LinkedList from "../../../source/logic/data-structures/linked-list";

describe('Linked List', () => {

    it('Inserting somewhere inside.', () => {
        let testList: LinkedList<number> = new LinkedList();  // size: 5 !

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.insert(10, 1);

        expect(testList.getAllValues()).to.deep.equal([5, 6, 10, 8]);
    });

    it('Inserting in an empty list.', () => {
        let testList:LinkedList<number> = new LinkedList();

        testList.insert(10, 0);

        expect(testList.getAllValues()).to.deep.equal([10]);
    });

    it('Inserting after the last position.', () => {
        let testList:LinkedList<number> = new LinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.insert(10, 2);

        expect(testList.getAllValues()).to.deep.equal([5, 6, 8, 10]);
    });

    it('Inserting at a non-existent too high position.', () => {
        let testList:LinkedList<number> = new LinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.insert(10, 3);

        expect(testList.getAllValues()).to.deep.equal([5, 6, 8]);
    });

    it('Delete somewhere inside.', () => {
        let testList:LinkedList<number> = new LinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.delete(1);

        expect(testList.getAllValues()).to.deep.equal([5, 8]);
    });

    it('Delete at the start.', () => {
        let testList:LinkedList<number> = new LinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.delete(0);

        expect(testList.getAllValues()).to.deep.equal([6, 8]);
    });

    it('Delete at the end.', () => {
        let testList:LinkedList<number> = new LinkedList();

        testList.append(5);
        testList.append(6);
        testList.append(8);
        testList.delete(2);

        expect(testList.getAllValues()).to.deep.equal([5, 6]);
    });
});