/* 
    Given a natural number 'n', determine if the number is prime or not

    NB: A prime number is a natural number greater than 1 that is not a product of two smaller natural number (i.e only has a factor of 1 and itself)

    e.g:
        isPrime(5) = true (1*5 or 5*1)
        isPrime(4) = false (1*4 or 2*2 or 4*1)
*/

/* 
        PSEUDOCODE
1.  initialize an empty array to store the factors of the input number n
2. create a loop of numbers from 1 to n

3. check if the modulus of n/each number of the loop == 0

4. if so push that number to the earlier initialized empty array

5. finally check if the factors array is exactly 2, if so then the number IS prime, if not the number is NOT prime.
    
 */

function isPrime(n) 
{
    if (n<=0) return "Please insert a natural number"
    const factors = [];
    for (let i = 1; i<=n; i++) {
        if (n % i == 0) {
            factors.push(i)
        }
    }
    console.log(`Factors of ${n}: ${factors}`)

    if (factors.length === 2) { console.log(`${n} IS a Prime number`)}
    else { console.log(`${n} is NOT a prime number`)}

};


function isPrime2(n)
{
    if (n<2) return false;
    for (let i=2; i < n; i++) 
    {
        if (n % i === 0) return false;
    };
    return true;
};
