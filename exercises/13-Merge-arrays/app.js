var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        const element = firstArray[i];
        newArray.push(element)
        
    }
    for (let i = 0; i < secondArray.length; i++) {
        const element = secondArray[i];
        newArray.push(element)
    }
   
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));