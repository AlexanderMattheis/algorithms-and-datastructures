import { expect } from 'chai';
import 'mocha';

import ListQueue from '../../../../source/logic/data-structures/queues/list-queue';

describe('Data-Structure - List Queue', () => {

    it('Adding elements.', () => {
        let testQueue: ListQueue<number> = new ListQueue();  // size: 5 !

        expect(testQueue.front()).to.equal(null);

        // enqueue 6 elements (too many!)
        testQueue.enqueue(1);
        expect(testQueue.front()).to.equal(1);

        testQueue.enqueue(5);
        testQueue.enqueue(6);
        testQueue.enqueue(6);
        testQueue.enqueue(8);

        expect(testQueue.count).to.equal(5);
        expect(testQueue.front()).to.equal(1);
    });

    it('Adding/Removing elements.', () => {
        let testQueue: ListQueue<number> = new ListQueue();

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
