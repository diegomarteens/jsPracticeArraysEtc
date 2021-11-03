

var myNumbers = [23,234,345,4356234,243,43,56,2];

let myFunction = function(number){
    return number *3;
};
let newArray = myNumbers.map(myFunction);
    
console.log(newArray);

// 1. Create function named myFunction;
// 2. multiply each number By 3; 
// 3. 