let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let auxVar = function(array_element){

    if(array_element ===0){
        return "woko";
    }else {
        return "wiki";
    }
};
var newArray = theBools.map(auxVar);
console.log(newArray);