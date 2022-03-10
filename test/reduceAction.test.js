const { reduceAction } = require('../lib/function');

describe('Reduce action, The simplest way to sum an array!', () => {
  test(`Sum 3 index array`, () => {
    const numberCollection = [1, 2, 3];
    expect(reduceAction(numberCollection)).toEqual(6);
  });

  test(`Sum 10 index array`, () => {
    const numberCollection = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(reduceAction(numberCollection)).toEqual(10);
  });
});
