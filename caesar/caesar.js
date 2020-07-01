const caesar = function (word, shift) {

    let i;
    let letter;
    let letterNum;
    let codeShift;
    let codeWord = "";
    shift -= (26 * Math.floor(shift / 26));
    for (i = 0; i < word.length; i++) {
        letter = word[i];
        letterNum = letter.charCodeAt();

        codeShift = letterNum + shift;

        if (codeShift > 122) { //wraps past z
            codeShift = 96 + (codeShift - 122);
        };

        if (codeShift > 90 && (letterNum < 97 || letterNum > 122)) { //wraps past Z
            codeShift = 64 + (codeShift - 90);
        }

        if (codeShift < 65) { //wraps before A
            codeShift = 91 - (65 - codeShift);
        }

        if (codeShift < 97 && (letterNum < 65 || letterNum > 90)) { //wraps before a
            codeShift = 123 - (97 - codeShift);
        }

        if (letterNum < 65 || (letterNum > 90 && letterNum < 97) || letterNum > 122) { //skips non letters
            codeWord += letter;
        } else {
            codeWord += String.fromCharCode(codeShift);
        };
    };
    return codeWord;
};

//a-z = 97-122
//A-Z = 65-90 if letterNum < 97 && letterNum >122

// String.fromCharCode(122); 'z'
//'z'.charCodeAt(); 122



//26 letters in the alphabet

//  shift = shift - (26 * Math.floor(shift / 26))

//a-z = 97-122
//A-Z = 65-90 if letterNum < 97 && letterNum >122

// String.fromCharCode(122); 'z'
//'z'.charCodeAt(); 122



module.exports = caesar
