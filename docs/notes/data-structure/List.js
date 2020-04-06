class List {
  constructor() {
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
  }
  append(element) {
    this.dataStore[this.listSize++] = element
  }
  find(element) {
    return this.dataStore.find((item) => item === element)
  }
  remove(element) {
    const index = this.dataStore.findIndex((item) => item === element)
    if (index !== -1) {
      this.dataStore.splice(index, 1)
      this.listSize--
      return true
    }
    return false
  }
  length() {
    return this.listSize
  }
  toString() {
    return this.dataStore
  }
  insert(element, after) {
    const insertIndex = this.find(after)
    if (insertIndex > -1) {
      this.dataStore.splice(insertIndex + 1, 0, element)
      this.listSize++
      return true
    }
    return false
  }
  clear() {
    this.dataStore = []
    this.listSize = 0
  }
  contains(element) {
    return this.find(element) > -1
  }
  getElement() {
    return this.dataStore[this.pos]
  }
  front() {
    this.pos = 0
  }
  end() {
    this.pos = this.listSize - 1
  }
  prev() {
    if (this.pos > 0) {
      this.pos--
      return true
    }
    return false
  }
  next() {
    if (this.pos < this.listSize - 1) {
      this.pos++
      return true
    }
    return false
  }
  currPos() {
    return this.pos
  }
  moveTo(pos) {
    if (pos < 0 || pos > this.listSize - 1) {
      return false
    }
    this.pos = pos
    return true
  }
}

export default List
