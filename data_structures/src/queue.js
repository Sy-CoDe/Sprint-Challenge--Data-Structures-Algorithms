class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    return this.storage.shift();
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

module.exports = Queue;