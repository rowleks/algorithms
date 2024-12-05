class Node {
    constructor(value)
    {
        this.value = value;
        this.next = null;
        
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value) {
        const newNode = new Node(value)
        if (!this.size) 
        {
            this.head = newNode
            this.tail = newNode
        }
        else 
        {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++
    }

    append(value) {
        const newNode = new Node(value)
        if (!this.size) 
        {
            this.head = newNode
            this.tail = newNode
        }
        else 
        {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    removeFirst() 
    {
        if (!this.size) {return false;}
        else if (this.size === 1) 
        { 
            this.head = null
            this.tail = null
        }
        else 
        {
            const removedNode = this.head.value
            this.head = this.head.next;
            this.size--
            return removedNode;
        }
    }

    
    removeLast() 
    {
        const removedNode = this.tail.value;
        if (!this.size) {return false;}
        else if (this.size === 1) 
        {
            this.head = null;
            this.tail = null;
        }
        else 
        {
            let currNode = this.head
            while (currNode.next !== this.tail)
            {
                currNode = currNode.next
            }
            currNode.next = null
            this.tail = currNode
        }
        this.size--
        return removedNode
    }
}

