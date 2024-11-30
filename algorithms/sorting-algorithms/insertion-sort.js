/* 
Given an array of integers, sort the array 

e.g: 
    arr = [-6, 20, 8, -2, 4]
    bubbleSort(arr) = [-6, -2, 4, 8, 20]

*/




function inSort(arr) {
    for (let i=1; i<arr.length; i++)
    {
        let numToInsert = arr[i];
        let j = i - 1;
        while (arr[j] > numToInsert && j>=0)
        {
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = numToInsert;
    }

}
