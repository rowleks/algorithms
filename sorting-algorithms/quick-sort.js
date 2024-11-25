/* 
Given an array of integers, sort the array 

e.g: 
    arr = [-6, 20, 8, -2, 4]
    bubbleSort(arr) = [-6, -2, 4, 8, 20]

*/

function quickSort(arr) {
    const splitArr = (arr) =>
    {
        if (arr.length < 2) return arr;
        let pivot = arr[arr.length - 1]
        let leftArr = [];
        let rightArr = [];
        for (let i=0; i<arr.length-1; i++)
        {
            if (pivot > arr[i]) { leftArr.push(arr[i])}
            else {rightArr.push(arr[i])}
        }
        let mergedArr = [...splitArr(leftArr), pivot, ...splitArr(rightArr)]
        return mergedArr
    }
    return splitArr(arr);
        
    }


