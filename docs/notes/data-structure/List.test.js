import List from './List'
const list = new List()
describe('List class', () => {
  test('append', () => {
    list.append(1)
    expect(list.length()).toBe(1)
    expect(list.toString()).toEqual([1])
  })
  test('find', () => {
    expect(list.find(1)).toBe(1)
  })
  test('insert', () => {
    list.insert(2, 1)
    expect(list.length()).toBe(2)
    expect(list.toString()).toEqual([1, 2])
  })
  test('remove', () => {
    list.remove(1)
    expect(list.length()).toBe(1)
    expect(list.toString()).toEqual([2])
  })
  test('contains', () => {
    expect(list.contains(1)).toBe(false)
    expect(list.contains(2)).toBe(true)
  })
  test('clear', () => {
    list.clear()
    expect(list.toString()).toEqual([])
  })
  test('front', () => {
    list.append(1)
    list.append(2)
    list.append(3)
    list.front()
    expect(list.currPos()).toBe(0)
    expect(list.getElement()).toBe(1)
  })
  test('end', () => {
    list.end()
    expect(list.currPos()).toBe(2)
    expect(list.getElement()).toBe(3)
  })
  test('prev', () => {
    list.prev()
    expect(list.currPos()).toBe(1)
    expect(list.getElement()).toBe(2)
  })
  test('next', () => {
    list.next()
    expect(list.currPos()).toBe(2)
    expect(list.getElement()).toBe(3)
  })
  test('moveTo', () => {
    list.moveTo(0)
    expect(list.currPos()).toBe(0)
    expect(list.getElement()).toBe(1)
  })
})
