// let a = [5, 6];
// a.unshift(4);
// console.log(a);
// a.push(7);
// console.log(a);
// let b = a.slice(0, a.length);
// console.log(b);

// function position(p) {
//     for (let index = 0; index < b.length; index++) {
//         if (index == p || p < b.length) {
//             return b[index];
//         }
//         else {
//             return `index out of bound it has only ${b.length} elements`
//         }
//     }

// }

// console.log(position(2));


// function reverse() {
//     let a = 10;
//     while (a >= 0) {
//         console.log(a);
//         a--;
//     }
// }

// reverse();

// let pnum = [1, -6, 5, 7, -98]

// function onlyPositive() {
//     for (let i = 0; i < pnum.length; i++) {
//         if (pnum[i] < 0) continue;
//         else console.log(pnum[i]);
//     }
// }

// onlyPositive();

// let code = ['kg', 'coding', 'javascript', 'course', 'is', 'best'];
// let s = '';
// let sentence = () => {
//     for (let index = 0; index < code.length; index++) {
//         s += code[index] + " ";

//     }
// };
// sentence()
// console.log(s);



function prime(m) {
    let num = 2;
    while (num < m) {
        if (m % num == 0) {
            return false;
        }
        num++;
    }
    return true;

};

// console.log(prime(4));

let m =2;
let i=0;
while (true) {
    if(prime(m)){
        console.log(m);
        i++;
        if(i>=5)break;
    }
    m++;
}


// for (let index = 2; index < 10; index++) {
//     if (prime(index)) {
//         console.log(index);
//     }
    
// }