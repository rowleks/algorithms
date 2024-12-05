import LinkedList from "../linked-list/tailed-linked-list.js"

class StackLinkedList {
    constructor() { this.list = new LinkedList }

    push(value) { this.list.prepend(value) }
    pop() { this.list.removeFirst() }
    peek() { this.list.peekHead() }
    size() { this.list.length() }
    print() { this.list.print() }

}

/* const stackList = new StackLinkedList()


stackList.print()

stackList.push(1)
stackList.push(2)
stackList.push(3)
stackList.push(4)
stackList.push(5)

stackList.print()
stackList.pop()
stackList.print() */