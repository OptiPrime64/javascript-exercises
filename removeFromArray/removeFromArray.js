

// function removeFromArray(arr, whichArr){
//     let whereArr = arr.indexOf(whichArr);
//     arr.splice(whereArr, 1);
//     return arr;
// }

function removeFromArray(...argmts) {
    //console.log(argmts);
    let i;
    let whereArr;
    let howLong = argmts.length;
    let argOne = argmts[0];
    //console.log(howLong);

    for (i = howLong; i > 1; i--) {
        whereArr = argOne.indexOf(argmts[i - 1]);
        //console.log(whereArr);
        if (whereArr === -1) {
            continue;
        }
        argOne.splice(whereArr, 1);
    };
    return argOne;
}


module.exports = removeFromArray