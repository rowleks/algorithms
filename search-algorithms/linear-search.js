/* 
Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found. 

e.g:
    arr = [-5, 2, 10, 4, 6], t = 10 should return 2
    arr = [-5, 2, 10, 4, 6], t = 6 should return 4
    arr = [-5, 2, 10, 4, 6], t = 20 should return -1

*/

function searchArr(arr, t) {
    for (let i = 0; i<arr.length; i++)
    {
        if ( arr[i] === t) { return  i}
    }
    return -1
}
