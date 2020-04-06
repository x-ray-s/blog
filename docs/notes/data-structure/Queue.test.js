import Queue from './Queue'
const queue = new Queue()

describe('Queue class', () => {
  test('enqueue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.toString()).toEqual([1, 2, 3])
  })
  test('dequeue', () => {
    queue.dequeue()
    expect(queue.toString()).toEqual([2, 3])
  })
  test('empty', () => {
    expect(queue.empty()).toBe(false)
  })
})
