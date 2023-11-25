// Arrays are sequence of values but in js array can consist of any type of values
// it can be array , object also.The array is also treated as object 

let a = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(a);
// desutrcting the array
let [f, b, c, d] = a;

console.log(b, c, d);
//we have different types of methods in array
// pop push to delete and add element at last
// shift unshift to add and delete the element at first
//is array method to verify wether the array is array of any other object

console.log(Array.isArray(a))

// loops for altering the flow of code
// repeated flow of loop
// entry control loop(for,while) and exit control loop (do-while loop)

//for loop
for (let a = 1; a < 10; a++) {
    if (a % 2 == 0) {
        console.log(a);
    }
}

//while loop
let q =1;
while(q<    =10){
    console.log(q);
    q++;
}


















