let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here

var nameWithr = function(name){
    return(name[0] === "R")
}
var resultingNames = allNames.filter(nameWithr)

console.log(resultingNames);