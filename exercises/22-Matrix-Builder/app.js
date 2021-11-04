// Code goes here
function matrixBuilder(int){
    let matrix=[];

for (let i = 0; i < int; i++) {
    matrix[i] = [];
    for(let p = 0; p<int; p++) {
        matrix[i][p]=Math.floor(Math.random() *2);

    }
}
return matrix;
}

// do not change anything from this line down
console.log(matrixBuilder(5))