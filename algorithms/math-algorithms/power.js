/* Given a positive integer 'n', determine if the number is a power of 2 or not

NB: An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x

e.g:
    isPowerOfTwo(1) = true (2^0)
    isPowerOfTwo(2) = true (2^1)
    isPowerOfTwo(5) = false
 */

function isPowerOfTwo(n) {
    if (n<1) return false;
    for (let i=0; i<n; i++)  {
    if (Math.pow(2,i) === n) { console.log(i) 
    return true; };
    };

    return false;
};




function isPowerOfTwo2(n) {
    if (n < 1) return false;
        while (n > 1) 
        {
            if (n % 2 !== 0) return false;
            n = n/2
        };
    return true;


}

function isPowerOfTwoBitWise (n) {
    return n > 0 && (n & (n-1)) === 0;
}

console.log(isPowerOfTwoBitWise(1))
console.log(isPowerOfTwoBitWise(2))
console.log(isPowerOfTwoBitWise(3))
console.log(isPowerOfTwoBitWise(5))
console.log(isPowerOfTwoBitWise(8))
console.log(isPowerOfTwoBitWise(10))
console.log(isPowerOfTwoBitWise(20))
console.log(isPowerOfTwoBitWise(32))
console.log(isPowerOfTwoBitWise(100))
console.log(isPowerOfTwoBitWise(128))


