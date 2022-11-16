/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */


// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//Create letter array
//find each letter in the array of letters
//find the index cause youre going to have to add 13 to that
//how do you loop an array? Since T has to be G?


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function rot13(message){
    let alphabetString = "abcdefghijklmnopqrstuvwxyz"
    let alphabet = alphabetString.split('')
    let newMess = message.toString('')
    let result = [];
        for (let i = 0; i < newMess.length; i++) {
            let code = newMess.toUpperCase().charCodeAt(i)
            if (code > 64 && code < 91) {
                result.push(code - 64 + 13)
            }
        }
    let order = []
    for(let i = 0; i < result.length; i++){
        if(result[i] > 26){
            order.push(result[i] - 26)
        } else {
            order.push(result[i])
        }
    }
    for(let i = 0; i < alphabet.length; i++){

    }
  }

  //didn't get it.... 
  function rot13(message) {
    var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
  }
  //that hurts tho...


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */

rot13(["Test"]) // Grfg