export default class Queue<T> {
  private queue: T[];

  public constructor(capacity = 10) {
    this.queue = [];
  }

  public Enqueue(item: T): void {
    this.queue.push(item);
  }

  public Dequeue(): T {
    const [first, ...rest] = this.queue;

    this.queue = rest;

    return first;
  }

  public Peek(): T {
    return this.queue[0];
  }
}
