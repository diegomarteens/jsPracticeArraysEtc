var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];
var accumulator = 0;

for (var index in myArray){
	var element = myArray[index]
	accumulator = accumulator + element;
	
}
var avg = accumulator / myArray.length;
console.log(avg);



// 1. declare a variable;
// 2. loop the array to add all the numbers;
// 3. inside the loop, add elements to accomulator;
// 4. after the loop, create a var that has the average - the sum and divide by the length;
// 5. print average