/* 
Given two finite non-empty sets, find their Cartesian Product.

In mathematics, specifically set theory, the Cartesian product of two sets A and B denoted by AxB is the set of all ordered pairs (a, b) where a is in A and b is in B

e.g:
    const A = [1,2]
    const B = [3,4,5]
    AxB = [ [1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]
*/

function cartesianProduct(arr1, arr2) {
    const result = []
    for (let i=0; i<arr1.length; i++)
    {
        for (let j=0; j<arr2.length; j++)
        {
            const pairs = []
            pairs.push(arr1[i], arr2[j])
            result.push(pairs)
        }
    }
    return result;
}

