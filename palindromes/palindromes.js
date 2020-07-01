const palindromes = function(normString) {
	normString = normString.toLowerCase();
	normString = normString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    let revString = normString.split('').reverse().join('');
    console.log(normString, revString);
    return normString === revString;
};

module.exports = palindromes
