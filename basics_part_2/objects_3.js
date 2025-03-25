//destructuring of objects

let obj = {
    name : "ayush",
    class : "TE",
    roll : 88
}

// to access the proprtties of the above object
console.log(obj.name);

//2nd method
const {name:n} = obj;   //used name as n from obj and stored in n only  // same in react
console.log(n);

//json
//JSON (JavaScript Object Notation) is a text-based format for storing and exchanging data
//{name: AK,
//roll: 11}
//or in array
//[{}, {}]