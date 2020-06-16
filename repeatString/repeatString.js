function repeatString(rWord, num) {

    let i;
    let newWord = "";
    if (num < 0) {
        return 'ERROR';
    } else {
        for (i = 0; i < num; i++) {
            newWord += rWord;
        };
        return newWord;
    };
}

module.exports = repeatString
