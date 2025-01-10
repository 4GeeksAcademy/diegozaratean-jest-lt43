const sum = require('./sum');

test('cuando sumo 10 + 12 debe ser 22', () => {
  expect(sum(10, 12)).toBe(22);
});