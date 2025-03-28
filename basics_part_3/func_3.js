// //arrow function was introduced in ES6 in 2015

// user = {
//     userName : "hit",
//     price : 500,

//     welcomeMessage : function(){
//         console.log(`hello ${this.userName}, welcome to our website`)
//         //console.log(this);
//         //above this refers to the current context
        
//     }

// }

// user.welcomeMessage()

// // if u dont use this keyword u will get error ReferenceError: userName is not defined

// user.userName = "Ak"
// user.welcomeMessage()
// console.log(this); //refeers to {} but in brower global this refers to the window

// //comented above

// function chai_1(){
//     console.log(this);
    
// }

// chai_1() // this gives global object as output

// function chai_2(){
//     let username = "AKK"
//     console.log(this.username);
    
// }

// chai_2()  //we cant use this keyword in function we can use it in object only

// //comented above

//arrow function

const chai = () =>{
    let userName = "Ak"
    console.log(this.userName);
    
}
chai()

//we are not able to use this keyword in arrow function 


//following is the example of explicit return
const add_two_nos = (num1,num2) =>{
    return num1+num2
}

console.log(add_two_nos(1,2));

//following is the example of implicit return (in this we didnt use return and {} explicitly)
const add_three_nos = (num1,num2,num3) => (num1+num2+num3)

console.log(add_three_nos(1,2,3));