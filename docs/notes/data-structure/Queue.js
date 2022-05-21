class Queue {
  constructor() {
    this.dataStore = []
  }
  enqueue(element) {
    this.dataStore.push(element)
  }
  dequeue() {
    this.dataStore.shift()
  }
  front() {
    return this.dataStore[0]
  }
  back() {
    return this.dataStore[this.dataStore.length - 1]
  }
  isEmpty() {
    return this.dataStore.length === 0
  }
  toString() {
    return this.dataStore
  }
}

export default Queue
