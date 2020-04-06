import Stack from './Stack'
const stack = new Stack()

describe('Stack class', () => {
  test('push', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.length()).toBe(3)
    expect(stack.peak()).toEqual(3)
  })
  test('pop', () => {
    stack.pop()
    expect(stack.length()).toBe(2)
    expect(stack.peak()).toEqual(2)
  })
  test('clear', () => {
    stack.clear()
    expect(stack.length()).toBe(0)
  })
})
