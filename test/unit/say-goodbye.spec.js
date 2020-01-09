import sayGoodbye from '../../src/say-goodbye'

import {expect} from 'chai';
import Chance from 'chance';

describe('Say Goodbye', () => {
    let chance;

    beforeEach(() => {
        chance = new Chance();
    });

    it('should say goodbye when given a name', () => {
        const randomName = chance.first(),
            greeting = sayGoodbye(randomName);

        expect(greeting).to.equal(`Goodbye, ${randomName}!`);
    });
});