
function reverseString(str) {

    str = str.split("");
    str = str.reverse();
    str = str.join("");

    return str;
}

// SOLUTION
// var reverseString = function(string) {
//     return string.split('').reverse().join('') 
//    }




module.exports = reverseString
