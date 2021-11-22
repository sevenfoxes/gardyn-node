import { pages } from './helpers';

describe('simple page data generator', () => {
  test('It works with even numbers', () => {
    const items = new Array(6).fill('ping');
    expect(pages(items, 2).length).toEqual(3);
  });

  test('It works with odd numbers', () => {
    const items = new Array(7).fill('ping');
    expect(pages(items, 2).length).toEqual(4);
  });
});
