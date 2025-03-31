//truthy

let arr = []

if(arr){
    console.log("true");
    
}

else{
    console.log("false");
    
}

//falsy values 
// false, 0, -0, BigInt (0n), "", null, undefined, NaN

//truthy values
// true, " ", "0", "false", [], {}, function(){}

// nullish coalescing Operator(??): null undeefined

let a = 10 ?? 500;
console.log(a);

// if in case during fetching the data from the database if we get a nul or undefined value then we will get a default value
let b = null ?? "default"
console.log(b);

//ternary operator

//syntax
// condition ? true : false

let price = 500

price <=500 ? console.log("Swast") : console.log("Mahaag");
