class CircularQueue {
    constructor(maxSize)
    {
        this.size = maxSize
        this.items = new Array(maxSize)
        this.rear = 0
        this.front = 0
        this.count = 0
    }

    isFull()
    {
        return this.count === this.size;
    }

    isEmpty()
    {
        return this.count === 0;
    }

    enqueue(element)
    {
        if(this.isFull()) { console.log('Queue is full')
            return false;
        }
        this.items[this.rear] = element;
        this.rear = (this.rear + 1) % this.size;
        this.count++
        return true;
    }

    dequeue()
    {
        if(this.isEmpty()) { console.log('Queue is empty')
            return false;
        }
        const removedItem = this.items[this.front]
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.size;
        this.count--;
        return removedItem;
    }

    print() {
        console.log(this.items);
    }

    peek() 
    {
        return this.items[this.front];
    }

    capacity()
    {
        return this.count;
    }
}

/* const cirQueue = new CircularQueue(5)
cirQueue.enqueue(10)
cirQueue.enqueue(20)
cirQueue.enqueue(30)
cirQueue.enqueue(40)
cirQueue.print()
console.log(cirQueue.capacity())
console.log(cirQueue.peek()) */