class Node {
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor()
    {
        this.head = null
        this.size = 0;
    }

    length()
    {
        console.log(this.size)
        return this.size
    }

    peek() 
    {
        if (this.size) { console.log(this.head)}
        else { console.log('List is Empty')}
    }

    prepend(value)
    {
        const newNode = new Node(value);
        if (!this.size) { this.head = newNode}
        else 
        { 
            newNode.next = this.head
            this.head = newNode;
        }
        this.size++
        return true;
    }

    append(value)
    {
        const newNode = new Node(value);
        if (!this.size) { this.head = newNode}
        else
        {
            let lastNode = this.head;
            while (lastNode.next)
            {
                lastNode = lastNode.next;
            }
            lastNode.next = newNode;
        }
        this.size++
        return true;
    }

    insert(value, index)
    {
        if (index < 0 || index > this.size) { console.log('Invalid location')
            return false;
        }
        else if (index === 0) { this.prepend(value)}
        else if (index === this.size) {this.append(value)}
        else 
        {
            const newNode = new Node(value)
            let currNode = this.head;
            let i = 0
            while (i < index - 1)
            {
                currNode = currNode.next;
                i++
            }
            newNode.next = currNode.next
            currNode.next = newNode;
            this.size++
            return true; 
        }
    }

     remove(value)
    {
        if (!this.size) { console.log('List is empty')
            return false;
        }
        if (this.head.value === value) 
        { 
            let removedNode = this.head
            this.head = removedNode.next
            this.size-- 
            return removedNode.value;
        }
        else 
        {
            let currNode = this.head;
            while (currNode.next.value !== value && currNode.next)
            {
                currNode = currNode.next;
            }
            if (currNode.next) 
            {
                let removedNode = currNode.next;
                currNode.next = removedNode.next;
                this.size--
                return removedNode.value;
            }
            else { console.log('Item not in the list')
                return false;
            }
        }
    }

    removeFrom(index)
    {
        if (index < 0 || index >= this.size ) { console.log('Invalid location')
            return false;
        }
        else if (index === 0) 
        { 
            let removedNode = this.head
            this.head = removedNode.next;
            this.size--
            return removedNode.value;
        }
        else 
        {
            let currNode = this.head
            let i = 0
            while (i < index - 1)
            {
                currNode = currNode.next
                i++
            }
            let removedNode = currNode.next;
            currNode.next = removedNode.next;
            this.size--
            return removedNode
        }
    }

    search(value)
    {
        if (!this.size) { console.log('List is empty')
            return -1;
        }
        else 
        {
            let currNode = this.head;
            let i = 0
        /*     
            while (currNode)
            {
                if (currNode.value === value) { return i } 
                currNode = currNode.next;
                i++
            }
            return -1
         */

            while (currNode?.value !== value && currNode) 
            {
                currNode = currNode.next;
                i++
            }
            if (currNode && currNode.value === value)
            {
                console.log(`${currNode.value} is at index ${i}`)
                return i;
            }
            else { console.log('Not found')
                return -1;
            }
        }

    }

    searchAt(index)
    {
        if (index < 0 || index >= this.size ) { console.log('Invalid location')
            return false;
        }
        else if (index === 0) { return this.head.value }
        else 
        {
            let currNode = this.head;
            let i = 0
            while (i < index)
            {
                currNode = currNode.next
                i++
            }
            console.log(`${currNode.value} is at location ${index}`)
            return currNode.value
        }
    }

    reverse()
    {
        if (!this.size) { console.log('List is empty')}
        else if(this.size===1) { return this.head}
        else 
        {
            let prevNode = null;
            let currNode = this.head; 
            while (currNode)
            {
                let nextNode = currNode.next;
                currNode.next = prevNode;
                prevNode = currNode;
                currNode = nextNode;
            }
            this.head = prevNode;
        }

    }

    print()
    {
        if (!this.size) { console.log('List is empty')}
        else
        {
            const items = [];
            let nodes = this.head;
            while (nodes)
            {
                items.push(nodes.value);
                nodes = nodes.next;
            }
            console.log(items.join(' --> '))
        }
    }
}

const list = new LinkedList

/* list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.print();
list.searchAt(3)
list.reverse()
list.print();
list.searchAt(3)
list.length(); */