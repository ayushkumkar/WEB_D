//declare using constructor --> Singleton
let obj = new Object()

//object literals  --> not Singleton

let Js_user1 = {
    name: "Ayush",
    age: 21,
    loc: "Pune",
    email: "ak@gmail.com",
    isActive: false
}
//accessing
console.log(Js_user1.name)    //problematic when u declare a string itsself as a key
console.log(Js_user1["name"])  //preffered


//using symbol as a key

mySyml = Symbol("")

let Js_user2 = {
    name: "Ayush",
    age: 21,
    loc: "Pune",
    email: "ak@gmail.com",
    isActive: false,
    [mySyml]: "KEyy"
}

// console.log(Js_user2[mySyml])

// //changing the values
// Js_user2.name = "Chiku"
// console.log(Js_user2)

// // freezing the object to avoid changing the values
// Object.freeze(Js_user2)
// //noow if u try to change it will not
// Js_user2.name = "Ayu"
// console.log(Js_user2)

// //commented above

//declaring function
Js_user1.greet1 = function(){
    console.log("hello user 1"); 
}


Js_user1.greet2 = function(){
    console.log(`hello user 1,${this.name}`);   //using this u can access the keys of the objects
}

//
console.log(Js_user1.greet1());
console.log(Js_user1.greet2());