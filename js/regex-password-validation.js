/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */
function regexp(password) {
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
    let alphanumeric = /^[a-z0-9]+$/i

    if(strongRegex.test(password)){
        if(alphanumeric.test(password)){
            return password
        }
    }

}


//(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)


/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */
// regexp('DSJKHD23', false);
// regexp('dsF43', false);
regexp('4fdg5Fj3', true);
// regexp('DHSJdhjsU', false);
regexp('fjd3IR9.;', false);
regexp('fjd3  IR9', false);