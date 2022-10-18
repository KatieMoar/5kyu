/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

//32 , 5 , 49 , 11


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

// function primeFactors(n){
//     // let startCounter = 0
//     // while(n % 2 === 0){
//     //     n = n / 2 
//     //     startCounter ++
//     // }
//     let counter = 0
//     for(let i = 2; i < n; i++){
//         n = n / i
//         while ((n - Math.floor(n)) !== 0){
//             console.log(n)
//             counter++
//         }


//     }
// console.log(counter)    
// }

const primeFactors = n => {
    if (n < 2) return `(${n})`;
    let factors = '';
    for ( let i = 2; i <= n; i++) {
      let count = 0;
      while ( n%i === 0 ) {
        count++; 
        n /= i;
      }
      if (count) {
        factors += `(${i}`;
        if (count > 1) factors += `**${count}`;
        factors += `)`;
      }
    }
    return factors;
  }


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */

primeFactors(86240) // "(2**5)(5)(7**2)(11)"

// primeFactors(7775460) // "(2**2)(3**3)(5)(7)(11**2)(17)"

// I didn't get this, I was close? kinda...