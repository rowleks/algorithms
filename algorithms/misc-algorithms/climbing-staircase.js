/* 

Given a staircse of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.

e.g:
    n=1, stairCase(1) = 1   [[1]]
    n=2, stairCase(2) = 2   [[1,1], [2]] 
    n=3, stairCase(3) = 3   [[1,1,1], [1,2], [2,1]] 
    n=4, stairCase(4) = 5   [[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]] 

*/

function stairCase(n) {
    if (n<3) return n;
    return stairCase(n-1) + stairCase(n-2);
}


function stairCase2(n) {
    const nOfWays = [1,2]
    for (let i=2; i<n; i++)
    {
        const next = nOfWays[i-1] + nOfWays[i-2];
        nOfWays.push(next);
    }
    return nOfWays;
}

console.log(stairCase2(5))

