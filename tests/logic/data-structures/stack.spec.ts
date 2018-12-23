import { expect } from 'chai';
import 'mocha';

import Stack from '../../../source/logic/data-structures/stack';

describe('Stack', () => {

    it('Adding too many elements.', () => {
        let testStack: Stack<number> = new Stack(5);  // size: 5 !

        expect(testStack.peek()).to.equal(null);

        // push 6 elements (too many!)
        testStack.push(1);
        expect(testStack.peek()).to.equal(1);

        testStack.push(5);
        testStack.push(6);
        testStack.push(6);
        testStack.push(8);
        testStack.push(9);

        expect(testStack.top).to.equal(5);
        expect(testStack.peek()).to.equal(8);
    });

    it('Adding/Removing elements.', () => {
        let testStack: Stack<number> = new Stack(5);

        expect(testStack.isEmpty()).to.equal(true);

        // adding
        testStack.push(1);
        expect(testStack.isEmpty()).to.equal(false);

        testStack.push(5);
        expect(testStack.isEmpty()).to.equal(false);

        // removing first
        let value: number = testStack.pop();

        expect(testStack.top).to.equal(1);
        expect(value).to.equal(5);
        expect(testStack.isEmpty()).to.equal(false);

        // removing second
        value = testStack.pop();

        expect(testStack.top).to.equal(0);
        expect(value).to.equal(1);
        expect(testStack.isEmpty()).to.equal(true);

        // removing nothing
        value = testStack.pop();

        expect(testStack.top).to.equal(0);
        expect(value).to.equal(null);
        expect(testStack.isEmpty()).to.equal(true);
    });
});
