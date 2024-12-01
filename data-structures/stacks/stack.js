class Stack {
    constructor() 
    {
        this.items = []
    }

    push(element)
    {
        this.items.push(element)
    }

    pop()
    {
        if (this.isEmpty()) { console.log('Stack is empty') 
            return false; }
        else { return this.items.pop() }
    }
    
    peek() 
    {
        if (this.isEmpty()) { console.log ('No item') }
        else { return this.items[this.items.length - 1] }
    }

    isEmpty ()
    {
        return this.items.length < 1
    }

    size()
    {
        return this.items.length
    }

    print()
    {
        console.log(this.items)
    }

}


