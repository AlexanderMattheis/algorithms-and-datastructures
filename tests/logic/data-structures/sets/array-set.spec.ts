import { expect } from 'chai';
import 'mocha';

import ArraySet from '../../../../source/logic/data-structures/sets/array-set';
import Vector from "../../../../source/logic/math/vector";

describe('Array Set', () => {
    it('Adding duplicates.', () => {
        let testSet: ArraySet<Vector> = new ArraySet();  // size: 5 !

        // push 1 duplicate
        testSet.add(new Vector(5,5));

        testSet.add(new Vector(5,4));
        testSet.add(new Vector(6,5));
        testSet.add(new Vector(5,6));
        testSet.add(new Vector(4,5));

        testSet.add(new Vector(5,5));

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

        // add elements
        testSet.add(new Vector(5,5));
        testSet.add(new Vector(5,4));
        testSet.add(new Vector(6,5));
        testSet.add(new Vector(5,6));
        testSet.add(new Vector(4,5));

        let centerContained: boolean = testSet.contains(new Vector(5, 5));
        let topContained: boolean = testSet.contains(new Vector(5, 4))
        let rightContained: boolean = testSet.contains(new Vector(6, 5));
        let bottomContained: boolean = testSet.contains(new Vector(5, 6));
        let leftContained: boolean = testSet.contains(new Vector(4, 5));
        let notContained: boolean = testSet.contains(new Vector(6, 6));

        expect(centerContained).to.equal(true);
        expect(topContained).to.equal(true);
        expect(rightContained).to.equal(true);
        expect(bottomContained).to.equal(true);
        expect(leftContained).to.equal(true);
        expect(notContained).to.equal(false);
    });
});