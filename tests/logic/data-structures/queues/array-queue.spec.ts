import { expect } from 'chai';
import 'mocha';

import ArrayQueue from '../../../../source/logic/data-structures/queues/array-queue';

describe('Array Queue', () => {

    it('Adding too many elements.', () => {
        let testQueue: ArrayQueue<number> = new ArrayQueue(5);  // size: 5 !

        expect(testQueue.front()).to.equal(null);

        // enqueue 6 elements (too many!)
        testQueue.enqueue(1);
        expect(testQueue.front()).to.equal(1);

        testQueue.enqueue(5);
        testQueue.enqueue(6);
        testQueue.enqueue(6);
        testQueue.enqueue(8);
        testQueue.enqueue(9);

        expect(testQueue.count).to.equal(5);
        expect(testQueue.front()).to.equal(1);
    });

    it('Adding/Removing elements.', () => {
        let testQueue: ArrayQueue<number> = new ArrayQueue(5);

        expect(testQueue.isEmpty()).to.equal(true);

        // adding
        testQueue.enqueue(1);
        expect(testQueue.isEmpty()).to.equal(false);

        testQueue.enqueue(5);

        // removing first
        let value: number = testQueue.dequeue();

        expect(testQueue.count).to.equal(1);
        expect(value).to.equal(1);
        expect(testQueue.isEmpty()).to.equal(false);

        // removing second
        value = testQueue.dequeue();

        expect(testQueue.count).to.equal(0);
        expect(value).to.equal(5);
        expect(testQueue.isEmpty()).to.equal(true);

        // removing nothing
        value = testQueue.dequeue();

        expect(testQueue.count).to.equal(0);
        expect(value).to.equal(null);
        expect(testQueue.isEmpty()).to.equal(true);
    });
});
