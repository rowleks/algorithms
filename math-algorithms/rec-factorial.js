/* Given an integer 'n', find the factorial of that integer 

In mathematics, the factorial of a non-negative integer 'n', denoted by n!, is the product of all the positive integers less than or equal to 'n'

    NB: factorial of zero is 1.

eg: 
    factorial(4) = 4*3*2*1 = 24
     factorial(5) =  *5*4*3*2*1 = 120 

*/


function recFactorial(n) {
    if (n===0) return 1;
    return n * recFactorial(n-1)
}

console.log(recFactorial(4))
console.log(recFactorial(5))
console.log(recFactorial(7))