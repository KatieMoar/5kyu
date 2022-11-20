/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//What is the question asking of you 
//Finding the largest sum in an array, the numbers have to be in order




/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        console.log(currentSum)
        console.log(maxSum)
        console.log(number)
        currentSum = Math.max(currentSum + number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */

maxSequence([-2, 1, -3]) // 6