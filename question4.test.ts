import {question4} from './question4'

describe('question4 test', () => {
    it('returns "Rating is null" when rating is null', () => {
        const result = question4();
        expect(result).toEqual('Rating is null');
    });
});