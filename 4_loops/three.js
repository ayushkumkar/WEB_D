//for_of
//iterating over array

let array = [10, 20 ,30, 40, 50]

for (let element of array) {
    console.log(element);
}


console.log();
//iterating over string

let str = "Hrushi"

for (let element of str) {
    console.log(element);
}


console.log();
// //iterating over objects

// let obj = {
//     a : "ayush",
//     b : "kumkar"
// }

// for(element of obj){
//     console.log(obj.a);
    
// }

// not iterable

//maps 
// are  datatypes

let mp = new Map()
mp.set('IN', 'INDIA')
mp.set('US', 'UNITED STATES')
mp.set('FR', 'FRANCE')

//TO ACCESS THE MAPS 

for([key, value] of mp){
    console.log(`key: ${key} 
value: ${value}` );
    
}

