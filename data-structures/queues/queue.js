class Queue {
    constructor()
    {
        this.items = []
    }

    enqueue(element)
    {
        this.items.push(element);
    }

    dequeue()
    {
        if (this.isEmpty()) { console.log('Nothing to remove') 
            return false; }
        else { return this.items.shift() }
    }

    peek()
    {
        if (this.isEmpty()) { console.log('Nothing to see') }
        else { return this.items[0] }
    }

    isEmpty()
    {
        return this.items.length < 1
    }

    size()
    {
        return this.items.length
    }

    print()
    {
        console.log(this.items.toString())
    }
}
