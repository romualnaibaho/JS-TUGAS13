function myArray(array){
    console.log("Sebelum di UnShift: ")
    console.log(array);

    array.unshift('Apel', 'Mangga');

    console.log("\nSetelah di UnShift: ")
    return array;
}

var array = ['Pisang', 'Jeruk'];

console.log(myArray(array));