/* -------------------------------------------- */
/*                   QUESTION                   */
/* -------------------------------------------- */

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


/* -------------------------------------------- */
/*                    ANSWER                    */
/* -------------------------------------------- */

function domainName(url){
    url = url.replace('http://', '')
    url = url.replace('www.', '')
    url = url.replace('https://', '')

    return url.split('.')[0]
  }



/* -------------------------------------------- */
/*                  TEST CASES                  */
/* -------------------------------------------- */

domainName("http://google.com")  // "google"
domainName("http://google.co.jp")  // "google"
// domainName("www.xakep.ru")  //, "xakep"
// domainName("https://youtube.com")  // "youtube"


//PREP
//PARAMETERS: Taking in a string that is a url
//RETURNS : The name of the url only