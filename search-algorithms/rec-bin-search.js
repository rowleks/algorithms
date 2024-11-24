/* 
Given a SORTED array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found. 

e.g:
    arr = [-5, 2, 4, 6, 10], t = 10 should return 2
    arr = [-5, 2, 4, 6, 10], t = 6 should return 4
    arr = [-5, 2, 4, 6, 10], t = 20 should return -1

*/

function recBinSearch(arr, t) {

// create a helper function 

const search = (arr, t, leftIndex, rightIndex ) => 
{
 if (leftIndex > rightIndex) return -1;
 let midIndex = Math.floor((leftIndex + rightIndex)/2);
 if (t === arr[midIndex]) return midIndex;
 if (t < arr[midIndex]) 
    {
        return search(arr, t, leftIndex, midIndex - 1)
    }
 if (t > arr[midIndex]) 
    { 
        return search(arr, t, midIndex + 1, rightIndex)
    }
}

return search(arr, t, 0, arr.length - 1);

}
