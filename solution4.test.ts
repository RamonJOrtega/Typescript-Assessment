import { question4 } from './solution4'

describe('solution4 test', () => {
    it('Returns "Rating is null" when rating is null', () => {
        const result = question4();
        expect(result).toEqual('Rating is null');
    });
});