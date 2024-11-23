/* Given an integer 'n', find the factorial of that integer 

In mathematics, the factorial of a non-negative integer 'n', denoted by n!, is the product of all the positive integers less than or equal to 'n'

    NB: factorial of zero is 1.

eg: 
    factorial(4) = 4*3*2*1 = 24
     factorial(5) =  *5*4*3*2*1 = 120 

*/

/* 
    PSEUDOCODE
1.  create a function that accepts n (the number to solve the factorial)

2. within the function, create an array and initialize the first item as n

3. create a for loop and start populating the array create above from the second item

4. subtract 1 from the current item value and set the return value as the next item

5. use arr.reduce to multiply each element of the array from above and return the result.




*/

function factorial(n) {
    /*   
    // alternate function to arr.reduce();
    
        const sumFactorial = (arr) => {
        console.log(arr);
        let result = 1;
        for (let i=0; i<arr.length; i++) {
            result = arr[i] * result
        }
        return result
    
    
    } */

    const num = [];
    for (let i = n; i>0; i--) {
        num.push(i)
    }

    
    const result = num.reduce((acc, cur) => acc * cur)
    console.log(num)
    return result;
    
    // return sumFactorial(num);

}

function factorial2(n) {
    if (n === 0) return 1
    if (n < 0) return "Please insert a positive number"
    let result = n
    for (let i=n-1; i>0; i--) {
        result *= i 
    };

    return result.toLocaleString();
}




