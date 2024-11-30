/* 
Given an array of integers, sort the array 

e.g: 
    arr = [-6, 20, 8, -2, 4]
    mergeSort(arr) = [-6, -2, 4, 8, 20]
*/


function mergeSort(arr) {
    const merge = (leftArr, rightArr) =>
    {
        const sortedArr = [];

        while (leftArr.length && rightArr.length)
        {
            if (leftArr[0] <= rightArr[0])
            {
                sortedArr.push(leftArr.shift())
            } else 
            {
                sortedArr.push(rightArr.shift())
            }

        }
        return [...sortedArr, ...leftArr, ...rightArr]
    }

    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))

}

const arr = [-6, 20, 8, -2, 4]

console.log(mergeSort(arr))

