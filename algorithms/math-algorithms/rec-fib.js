/* 
Given a number 'n', find the nth element of the fibonacci sequence

In mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceeding ones.

The first two numbers in the sequence are 0 and 1.

e.g: 
    (0,1,1,2,3,5,8,13...)
    recFib(0) = 0
    recFib(1) = 1
    recFib(6) = 8
*/

function recFib(n) {
    if (n<2) return n
    return recFib(n-1) + recFib(n-2)
}
