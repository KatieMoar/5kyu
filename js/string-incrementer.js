/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


//PREP
//Parameters: Taking in a string 
//Returns: The string with the number on the very end incrimented by 1

//Steps
//Select the number at the end. How do we not count the 0's? Like we can't do every 0 doesn't count because then thinsg like 20 wouldn't work... Maybe select the number as a whole?
//To do that we'd need to split the str 

/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function incrementString (str) {
    if(/\d/.test(str) === false){
        str = str + "1"
        console.log(str)
    } else {
        let match = str.match(/\d+$/)
        let test = (match[0])
        console.log(match)
        let newNum = Number(match[0]) + 1
        let result = str.replace(match[0], newNum)
        console.log(result)

    }
  }

/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
// incrementString("foo")  // "foo1");
// incrementString("foobar001")  // "foobar002");
// incrementString("foobar1")  // "foobar2");
// incrementString("1")  // "2");
incrementString("009")  // "010");
incrementString("fo99obar99")  // "fo99obar100");