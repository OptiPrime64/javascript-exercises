//My solution for the first part

// const removeFromArray = function (array, loc) {
//     array.splice(array.indexOf(loc), 1);
//     return array;
// }

// module.exports = removeFromArray

//I had to look up the rest.

const removeFromArray = function (...args){

    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
    };
    
    module.exports = removeFromArray