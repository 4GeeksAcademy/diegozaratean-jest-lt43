const sum = require('./sum');

test('cuando sumo 2 + 2 debe ser 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('cuando sumo 1 + 5 debe ser 6', () => {
    expect(sum(1, 5)).toBe(6);
});

test('cuando sumo 0 + 9 debe ser 9', () => {
    expect(sum(0, 9)).toBe(9);
});

test('cuando sumo 7 + 3 debe ser 10', () => {
    expect(sum(7, 3)).toBe(10);
});