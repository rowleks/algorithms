/* 
Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found. 

e.g:
    arr = [-5, 2, 10, 4, 6], t = 10 should return 2
    arr = [-5, 2, 10, 4, 6], t = 6 should return 4
    arr = [-5, 2, 10, 4, 6], t = 20 should return -1

*/


function binarySearch(arr, t) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex)
    {
        let midIndex = Math.floor((leftIndex + rightIndex)/2)
        if(t === arr[midIndex]) return midIndex;
        if (t < arr[midIndex]) { rightIndex = midIndex - 1}
        else { leftIndex = midIndex + 1 }
    }

    return -1

}


console.log(binarySearch([1,2,3,4,5,6,7,8,9], 11))