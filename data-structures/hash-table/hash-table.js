class HashTable {
    constructor(size)
    {
        this.size = size;
        this.table = new Array(size)
    }

  /* 
    Simple hash function
    hash(key)
    {
        let tableIndex = 0
        for (let i = 0; i<key.length; i++)
        {
            tableIndex += key.charCodeAt(i)
        }
        return tableIndex % this.size;

    } */

    //DJB2 hash function
    hash(key)
    {
        let hash = 5381;
        for(let i=0; i<key.length; i++)
        {
            hash = (hash * 33) + key.charCodeAt(i)
        }
        return hash % this.size
    }

    set(key, value)
    {
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket) { this.table[index] = [[key, value]] }
        else
        {
            const sameKeyArr = bucket.find(arr => arr[0] === key)
            if(sameKeyArr) { sameKeyArr[1] = value}
            else { bucket.push([key, value])}
        }
    }

    get(key)
    {
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket) { return undefined}
        else 
        {
            const match = bucket.find(arr => arr[0] === key)
            if(match) { return match[1] }
            else { return undefined }
            
        }
    }

    remove(key)
    {
        const index = this.hash(key)
        bucket = this.table[index]
        if(!bucket) { return null}
        else
        {
            const match = bucket.find(arr => arr[0] === key)
            const valueOfMatch = match[1]
            const indexOfMatch = bucket.indexOf(match);
            bucket.splice(indexOfMatch, 1);
            return valueOfMatch
        }
    }
}
const hashTable = new HashTable(50)