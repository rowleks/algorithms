
class Node {
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class Queue {
    constructor() 
    {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(node) 
    {
        const newNode = { value: node, next: null }
        if(!this.size) { this.head = this.tail = newNode }
        else 
        {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++
    }

    dequeue()
    {
        if(!this.size) { return null}
        const removedNode = this.head
        this.head = this.head.next;
        if(!this.head) { this.tail = null }
        this.size--
        return removedNode.value
    }

    capacity() { return this.size }
}


class BinarySearchTree {
    constructor()
    {
        this.root = null;
    }

    insert(value)
    {
        const newNode = new Node(value)
        if(!this.root) { this.root = newNode }
        else { this.insertNode(this.root, newNode)}
    }

    insertNode(root, newNode)
    {
        if(!root) { return false}
        else 
        {
            if(newNode.value < root.value)
            {
                if(!root.left) { root.left = newNode }
                else { this.insertNode(root.left, newNode)}
            } 
            else if (newNode.value > root.value) 
            {
                if(!root.right) { root.right = newNode}
                else { this.insertNode(root.right, newNode)}
            }
        }
    }


    search(value, root = this.root)
    {
        if(!root) { return false }
        else
        {
            if(root.value === value) { return true }
            else
            {
                if(value < root.value) { return this.search( value, root.left)}
                else { return this.search(value, root.right) }
            }
        }
    }

    // Depth First Search Traversal Methods
    
    preOrderDFS(node = this.root, result = [])
    {
        if(node)
        {
            result.push(node.value)
            this.preOrderDFS(node.left, result)
            this.preOrderDFS(node.right, result)
        }
        return result;
    }

    inOrderDFS(node = this.root, result = [])
    {
        if(node)
        {
            this.inOrderDFS(node.left, result)
            result.push(node.value)
            this.inOrderDFS(node.right, result)
        }
        return result;
    }

    postOrderDFS(node = this.root, result = [])
    {
        if(node)
        {
            this.postOrderDFS(node.left, result)
            this.postOrderDFS(node.right, result)
            result.push(node.value)
        }
        return result;
    }

    //Bredth First Search Traversal Methods


    //O(n^2)
    levelOrderBFS()
    {
        const queue = []
        const result = []
        queue.push(this.root)
        while (queue.length)
        {
            let curr = queue.shift()
            result.push(curr.value)
            if(curr.left) { queue.push(curr.left)}
            if(curr.right) { queue.push(curr.right)}
        }
        return result;
    }

    //O(n)
    bfs()
    {
        const queue = new Queue();
        const result = []
        queue.enqueue(this.root)
        while(queue.capacity())
        {
            const curr = queue.dequeue()
            result.push(curr.value)
            if(curr.left) {queue.enqueue(curr.left)}
            if(curr.right) {queue.enqueue(curr.right)}
        }
        return result;
    }

    min(node)
    {
        if(!node) { return null }
        while(node.left) { node = node.left }
        return node;
    }

    max(node)
    {
        if(!node) { return null }
        while(node.right) { node = node.right}
        return node;
    }

    delete(value)
    {
        return this.deleteNode(value, this.root)
    }

    deleteNode(value, node)
    {
        if(!node) { return null }
        if(value < node.value) 
        { node.left = this.deleteNode(value, node.left) }
        else if(value > node.value)
        { node.right = this.deleteNode(value, node.deleteNode)}
        else 
        {
            if(!node.right && !node.left) { return null}
            if(!node.left) { return node.right}
            if(!node.right) { return node.left}
            if(node.right && node.left)
            {
                let succ = this.min(node.right)
                node.value = succ.value
                node.right = this.deleteNode(succ.value, node.right)
            }
            return node;
        }
    }
}

/* const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7); */




/* 

            10
            /\
        5        15
        /\       /\
    3       7
    /\      /\     

*/