function sayMyName(){
    console.log("Ayush");
    
}
//call
sayMyName()

//writing only func name gives you refrence and adding a () calls the func

function add_2_nos(num1, num2){
    return num1+num2
}
console.log(add_2_nos(5,2));  // if parameters not passed gives NaN
//undefined + undefined in JavaScript results in NaN (Not a Number).


function user_login(username){
    console.log(`${username} has successfully logged in`);
    
}

user_login("Sam") //if not passed any parameters return undefined
//When using string interpolation (${username}), undefined is treated as a string ("undefined").
//The function does not perform any mathematical operation, so NaN never appears.

function sumOfCart(...num){
    return num
}

console.log(sumOfCart(10,20,30))

//interview
function sumOfCart_2(val_1, val_2, ...num){
    return num
}

console.log(sumOfCart_2(10,20,30))

//
obj ={
    name: 'A',
    roll: 22
}

function retrieve_vals(anyObject){
    console.log(`the name is ${anyObject.name} and roll is ${anyObject.roll}`);
    
}

retrieve_vals(obj);