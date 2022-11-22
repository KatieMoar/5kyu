/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true), 
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false), 
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true], 
// productFib(800) # should return [34, 55, false], 
// -----
// productFib(714) # should return {21, 34, 1}, 
// productFib(800) # should return {34, 55, 0},        
// -----
// productFib(714) # should return {21, 34, true}, 
// productFib(800) # should return {34, 55, false}, 

//PREP
//Parameters: Taking in a number
//Return : The two fib numbers that equal it and true or false if it is divisible. The numbers have to be concequative which makes this easier

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function productFib(prod){
    //find all the fib number less than the product
    let fib = [0, 1]
    for(let i = 2; fib.slice(-1) < prod; i++){
        fib[i] = fib[i - 2] + fib[i - 1]
        fib.push(fib[i])
    }
    fib.splice(-2)
    //push them to an array
    //reduce the array as long as its less than the product
    let newArr = []
    let fibResult = []
    for(let i = 0; newArr.slice(-1) <= prod - 1; i++){
        newArr.push(fib[i] * fib[i +1])
        if(newArr.slice(-1) == prod){
            fibResult.push(fib[i])
            fibResult.push(fib[i + 1])
            fibResult.push(true)
        } else if (newArr.slice(-1) > prod){
            fibResult.push(fib[i])
            fibResult.push(fib[i + 1])
            fibResult.push(false)
        }
    }
    console.log(fibResult)
    //return a true or false

  }

  //TECHINCALLY I GOT IT...... but I got it wrong because I hate way to much code...
  function productFib(prod){
    var n = 0;
    var nPlus = 1;  
    while(n*nPlus < prod) {
      nPlus = n + nPlus;
      n = nPlus - n;
    }
    return [n, nPlus, n*nPlus===prod];
  }
  //RELALY???????
/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */

productFib(4895)    // [55, 89, true])
productFib(5895)    // [89, 144, false])
productFib(74049690)    // [6765, 10946, true])
productFib(84049690)    // [10946, 17711, false])
productFib(193864606)    // [10946, 17711, true])
productFib(447577)    // [610, 987, false])
productFib(602070)    // [610, 987, true])