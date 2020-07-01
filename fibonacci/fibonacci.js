function fibonacci(num6) {

    num6 = +num6;
    let nextNum = 1;
    let currentNum = 1;
    let lastNum = 1;
    let i;
    
    if (num6 < 0){
        return "OOPS";
    }
    
    for (i=1;i<num6-1;i++){
    
    nextNum += lastNum;
    lastNum = currentNum;
    currentNum = nextNum;
    
    };
    return currentNum;
    }

module.exports = fibonacci
