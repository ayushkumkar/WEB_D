// //addding keys after declaring the object

// const tinderUser_1 = {}

// tinderUser_1.name = "Ayush"
// tinderUser_1.age = "22"
// tinderUser_1.isLoggedIn = false

// console.log(tinderUser_1);


// //nested objects

// let regularUser = {
//     name:{
//         firsstName:"Ayush",
//         LastName:"Kumkar"
//     },
//     Qualification:{
//         "10th":98,
//         "12th":88,
//         "BE":9.9
//     }
// }
// console.log(regularUser);

// console.log(regularUser.name.LastName);

// //comented above

//combining two or more objects

//method 1 same as push in array
//has problem as it copies 2nd obj same
let obj_1 = {1:'a', 2:'b', 3:'c'}
let obj_2 = {4:'a', 5:'b', 6:'c'}

let obj_3 = {obj_1, obj_2}
console.log(obj_3);

//method 2
let obj_4 = Object.assign({},obj_1, obj_2)  //additional {} is given because it gives guaranteee of giving a single {} it is optional but a good practice
console.log(obj_4);

//method 3 using spread
let obj_5 = {...obj_1, ...obj_2}
console.log(obj_5);

//some more methods
console.log(Object.keys(obj_1));
console.log(Object.values(obj_1));  // these 3 methods returns an array
console.log(Object.entries(obj_1));

console.log(obj_1.hasOwnProperty('1'));  //cheaks if key is there or not


 

