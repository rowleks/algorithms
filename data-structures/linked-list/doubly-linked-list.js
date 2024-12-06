class Node {
    constructor(value)
    {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList 
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    //30 20 10

    prepend(value)
    {
        const newNode = new Node(value)
        if(!this.size)
        {
            this.head = newNode
            this.tail = newNode
        }
        else 
        {
            newNode.next = this.head;
            this.head.prev = newNode
            this.head = newNode;
        }
        this.size++
    }
    //10 20 30 40

    append()
    {
        const newNode = new Node(value)
        if(!this.size)
        {
            this.head = newNode
            this.tail = newNode
        }
        else
        {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.size++
    }

    reverse()
    {
        if (!this.size) { return null }
        else 
        // <--40 --> <--30 --> <-- 20 --> <--10 -->
        {
            let currNode = this.head;
            let temp = null;
            while (currNode)
            {
                temp = currNode.prev; 
                currNode.prev = currNode.next; 
                currNode.next = temp;
                currNode = currNode.prev
            }
            this.tail = this.head
            this.head = temp

        }
    }

    print()
    {
        if(!this.size) { return null}
        else 
        {
            const arr = [];
            let currNode = this.head
            while (currNode)
            {
                arr.push(currNode.value)
                currNode = currNode.next
            }
            console.log(arr.join(' \u27FA  '))
        }
    }
}

/* const list = new DoublyLinkedList();
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
// list.prepend(50)
list.print()
list.reverse()
list.print() */