 
/**
 Author: Nikhil Sidhaye.
 Purpose: Create Pattern function so you can use it from other files.
 TODO: Create an Pattern object and move all constatnts on object level.
*/

var debug = require('debug')('myApp:pattern')


function RegEx() {

	var  REPLACE_CHAR = 'X';
	var LEADING_MASK_LENGTH = 6;
	var TRAILING_MASK_LENGTH = 4;
	var VISA_REG_EX = "4[0-9]{3}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}";
	var MASTERCARD_REG_EX = "5[1-5][0-9]{2}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}";
	//private String AMEX_REG_EX = "3[47][0-9]{2}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{3}";
	var  AMEX_REG_EX = "((3[47][0-9]{2}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{3})|" + "(3[47][0-9]{2}[-|\\s]??[0-9]{6}[-|\\s]??[0-9]{5}))";
	var DINERSCLUB_REG_EX = "3(?:0[0-5]|[68][0-9])[0-9][-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{2}";
	var DISCOVER_REG_EX = "6(?:011|5[0-9]{2})[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}";
	//private static String JCB_REG_EX = "(?:2131|1800|35\\d{3})[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{3}";

	var JCB_REG_EX = "((?:2131|1800)[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{3})|" + "(35\\d{2}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4}[-|\\s]??[0-9]{4})";

	var strPattern = "(?:"
	strPattern += VISA_REG_EX
	strPattern += "|"
	strPattern += MASTERCARD_REG_EX
	strPattern += "|"
	strPattern += AMEX_REG_EX
	strPattern += "|"
	strPattern += DINERSCLUB_REG_EX
	strPattern += "|"
	strPattern += DISCOVER_REG_EX
	strPattern += "|"
	strPattern += JCB_REG_EX

	strPattern += ")"

	debug("Pattern : " + strPattern)

	var regPattern = new RegExp(strPattern,'g')

	return regPattern;
}


/**
 * This will actually find matches...
 */
 function findMatches(error, regexPattern, testStr) {

 	var totalHits = 0
 	var foundInstances = []

 	if (error) {
        console.error("Error: " + error.stack || error.message)    
        return
    }

    // All your logic with the result.
    // console.log("In findMatches: " + regexPattern)


    var myArray

    while((myArray = regexPattern.exec(testStr)) !== null) {
    	var msg = "Found " + myArray[0] + "."

    	msg += " Next Match starts at " + (myArray.index+1)

    	debug(msg)

    	totalHits++
    	foundInstances.push(myArray[0])
    	
    }

    return {
    	totalHits: totalHits,
    	foundInstances: foundInstances
    }
}


module.exports.RegEx=RegEx
module.exports.findMatches=findMatches
