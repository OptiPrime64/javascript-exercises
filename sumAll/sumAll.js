function sumAll(num1, num2){
    let minNum, maxNum;
    
    if (num1<0 || num2<0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    };
    
        if(num1 < num2){
          minNum=num1, maxNum=num2;
        }else{
            minNum=num2, maxNum=num1;
        };
    
        let i = minNum;
        let tNum = minNum;
        for (;i < maxNum;i++){
        
            tNum += ++minNum;
        
        };
        return tNum;
    }
    
module.exports = sumAll
