import LinkedList from "../linked-list/tailed-linked-list.js"

class QueueList {
    constructor() { this.list = new LinkedList()}
    enqueue(value) { this.list.append(value)}
    dequeue(value) { this.list.removeFirst(value)}
    peek() { this.list.peekHead()}
    size() { this.list.length() }
    print() { this.list.print() }
}

/* const queueList = new QueueList;
queueList.enqueue(1)
queueList.enqueue(2)
queueList.enqueue(3)
queueList.enqueue(4)
queueList.enqueue(5)
queueList.print()
queueList.peek()
queueList.size()
queueList.dequeue()
queueList.print()
queueList.peek()
queueList.size() */