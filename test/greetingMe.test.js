const { greetingTo } = require('../lib/function');

describe('Give greeting to user', () => {
  test('Give greeting to Ahmed', () => {
    expect(greetingTo('Ahmed')).toEqual(`Hello Ahmed!`);
  });

  test(`Give greeting to Bryan`, () => {
    expect(greetingTo(`Bryan`)).toEqual(`Hello Bryan!`);
  });

  test(`Give greeting to Osman`, () => {
    expect(greetingTo(`Osman`)).toEqual(`Hello Osman!`);
  });
});
