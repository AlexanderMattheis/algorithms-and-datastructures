import { expect } from 'chai';
import 'mocha';

import ArrayStack from '../../../../source/logic/data-structures/stacks/array-stack';

describe('Array Stack', () => {

    it('Adding too many elements.', () => {
        let testStack: ArrayStack<number> = new ArrayStack(5);  // size: 5 !

        expect(testStack.top()).to.equal(null);

        // push 6 elements (too many!)
        testStack.push(1);
        expect(testStack.top()).to.equal(1);

        testStack.push(5);
        testStack.push(6);
        testStack.push(6);
        testStack.push(8);
        testStack.push(9);

        expect(testStack.count).to.equal(5);
        expect(testStack.top()).to.equal(8);
    });

    it('Adding/Removing elements.', () => {
        let testStack: ArrayStack<number> = new ArrayStack(5);

        expect(testStack.isEmpty()).to.equal(true);

        // adding
        testStack.push(1);
        expect(testStack.isEmpty()).to.equal(false);

        testStack.push(5);

        // removing first
        let value: number = testStack.pop();

        expect(testStack.count).to.equal(1);
        expect(value).to.equal(5);
        expect(testStack.isEmpty()).to.equal(false);

        // removing second
        value = testStack.pop();

        expect(testStack.count).to.equal(0);
        expect(value).to.equal(1);
        expect(testStack.isEmpty()).to.equal(true);

        // removing nothing
        value = testStack.pop();

        expect(testStack.count).to.equal(0);
        expect(value).to.equal(null);
        expect(testStack.isEmpty()).to.equal(true);
    });
});
