import { expect } from 'chai';
import 'mocha';

import Stack from '../../../source/logic/data-structures/stack';

describe('Stack Unit-Tests', () => {

    it('Testing all functionality.', () => {
        let testStack: Stack<number> = new Stack(5);
        testStack.push(1);
        testStack.push(5);

        
    });
});
