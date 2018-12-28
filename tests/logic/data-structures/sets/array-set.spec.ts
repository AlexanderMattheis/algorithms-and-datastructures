import { expect } from 'chai';
import 'mocha';

import ArraySet from '../../../../source/logic/data-structures/sets/array-set';
import Vector from "../../../../source/logic/math/vector";

describe('Data-Structure - Array Set', () => {
    it('Adding duplicates.', () => {
        let testSet: ArraySet<Vector> = new ArraySet();  // size: 5 !

        let duplicate: Vector = new Vector(5,5);

        // push 1 duplicate
        testSet.add(duplicate);

        testSet.add(new Vector(5,4));
        testSet.add(new Vector(6,5));
        testSet.add(new Vector(5,6));
        testSet.add(new Vector(4,5));

        testSet.add(duplicate);

        expect(testSet.count).to.equal(5);
    });

    it('Clearing Set.', () => {
        let testSet: ArraySet<Vector> = new ArraySet();  // size: 5 !

        // add elements and clear
        testSet.add(new Vector(5,5));

        testSet.add(new Vector(5,4));
        testSet.add(new Vector(6,5));
        testSet.add(new Vector(5,6));
        testSet.add(new Vector(4,5));

        testSet.clear();

        expect(testSet.count).to.equal(0);
    });

    it('Testing Contains.', () => {
        let testSet: ArraySet<Vector> = new ArraySet();  // size: 5 !

        let vectors: Vector[] = [
            new Vector(5,5),
            new Vector(5,4),
            new Vector(6,5),
            new Vector(5,6),
            new Vector(4,5)
        ];

        // add elements
        testSet.add(vectors[0]);
        testSet.add(vectors[1]);
        testSet.add(vectors[2]);
        testSet.add(vectors[3]);
        testSet.add(vectors[4]);

        let centerContained: boolean = testSet.contains(vectors[0]);
        let topContained: boolean = testSet.contains(vectors[1])
        let rightContained: boolean = testSet.contains(vectors[2]);
        let bottomContained: boolean = testSet.contains(vectors[3]);
        let leftContained: boolean = testSet.contains(vectors[4]);
        let notContained: boolean = testSet.contains(new Vector(6, 6));

        expect(centerContained).to.equal(true);
        expect(topContained).to.equal(true);
        expect(rightContained).to.equal(true);
        expect(bottomContained).to.equal(true);
        expect(leftContained).to.equal(true);
        expect(notContained).to.equal(false);
    });
});