import { question1_removeSmallNumbers, solution1_removeSmallNumbers } from "./question1";

describe('solution1_removeSmallNumbers', () => {
    it('removes small numbers using list input that has failed before fixing', () => {
      let list = [5, 10, 15, 3, 8, undefined];;
      const expected = [10, 15, undefined];
      solution1_removeSmallNumbers(list);
      expect(list).toEqual(expected);
    });
  
    it('handles empty array', () => {
      let list: (number | undefined)[] = [];
      const expected: (number | undefined)[] = [];
      solution1_removeSmallNumbers(list);
      expect(list).toEqual(expected);
    });
  
    it('handles array with no small numbers', () => {
      let list = [10, undefined, 12];
      const expected = [10, undefined, 12];
      solution1_removeSmallNumbers(list);
      expect(list).toEqual(expected);
    });
  });