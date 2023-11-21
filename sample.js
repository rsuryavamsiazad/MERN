// function evenorodd(e) {
//     if(e%2==0) console.log('even number')
//     else console.log(`odd number`)
// }
// evenorodd(54);

// function large(a,b) {
//     if (a>b) {
//         console.log(`${a} is larger`)
//     }
//     else 
//     console.log(`${b} is larger`)
// }
// large(15,8);

// function celToFar(a) {
//    console.log(`${a}c degree's is ${ (9/5)*a +32}f Farenheit`)
// }
// celToFar(100);

// let a ={
//     name:`surya`,
//     age:56,
//     role:'frontend',
//     $sal:{      //nested object
//         base:4000,
//         allowance:1000},
//     'tech-stack': `html-css`,
//     tsal:e =>{
//         return `total salary ${a.$sal['base']+a.$sal['allowance']}$`
//     },
//     insurane:``,
// };
// //we use bracket notation to include any varible name so that we can call them
// let designation = 'role';
// console.log(a[designation])
// console.log(a['name'])
// console.log(a.name)
// console.log(a.role)
// console.log(a[`$sal`])
// console.log(a['tech-stack'])
// a.role='backend';
// console.log(a.role+" "+ a.age +" " + a.name)

// console.log(a.$sal['allowance'])
// console.log(a.$sal[`base`])
// console.log(a.tsal())
// console.log(a.insurane)
// console.log(a)


// delete a.$sal;//sal deleted
// console.log(a)

// let btn = document.querySelectorAll('.btn');
// console.log(btn);
// console.log(5);


let a=document.querySelector('.inbox');
console.log(a.length)