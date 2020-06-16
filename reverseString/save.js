const reverseString = function (word) {
    let revWord = "";
    let wordShift=1;
    for (let i = 0; i < word.length; i++) {
        
        revWord += word.slice(word.length - wordShift, word.length - i);
        ++wordShift;

    }
    return revWord;
}

module.exports = reverseString

//revWord = ""
//i = 0
//word = "Toy"
//word.length = 3
//wordShift= 1