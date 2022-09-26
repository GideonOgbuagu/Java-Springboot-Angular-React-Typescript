// Step 1
// Convert the given JavaScript into ES6 syntax using an arrow function and filter.

const arr1 = [
    {"name":"chevy", "count": 2},
    {"name":"ford", "count": 5},
    {"name":"acura", "count": 3},
    {"name":"honda", "count": 16},
];

// const newArr = [];
// for(let i= 0; i < arr1.length; i++){
//     if(arr1[i].name === "ford" ){
//         newArr.push(arr1[i]);
//     }
// }
const newArr = arr1.filter(car => car.name === "ford");

console.log("Filter results:", newArr);


// Step 2
// Given the function, use the ES6 that was covered to combine the two arrays.

const arr2 = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

// function addNewStudent(array, newArray) {
//     for(let i = 0; i < newArray.length; i++) {
//         array.push(newArray[i]);
//     }
// }

function addNewStudent(array, newArray) {
    return [...array, ...newArray];
}


console.log(addNewStudent(arr2, newStudents));