const calc = require('./index.js')

test('ToBeGreaterThan', () => {
  expect(calc(2,'+',4)).toBeGreaterThan(2)
})
