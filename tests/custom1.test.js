const stack = require('../src/stack');

beforeEach(() => {
  while (stack.pop() !== undefined) {}
});

test('pop should return the correct element (failar först)', () => {
    stack.push('apple');
    stack.push('banana');
    const popped = stack.pop();
    expect(popped).toBe('banana'); 
});