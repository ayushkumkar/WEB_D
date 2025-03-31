//for in
//iterating objects using for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//accessing key 
for (let key in myObject){
    console.log(`${key}`);
}

//accessing value
for(let key in myObject){
    console.log(`${key} has value: ${myObject[key]}`);
    
}

let arr = [1, 2, 3, 4, 5, 6]
//arrays
// here we r getting indexes rather than values
for(index in arr){
    console.log(index);
}

console.log();
//for getting values
for(index in arr){
    console.log(arr[index]);
}


//map using for..in

const mp = new Map()

mp.set('1', 'one')
mp.set('2', 'two')
mp.set('3', 'three')

for(let key in mp){
    console.log(key);   
}
//There is no output because Maps are not enumerable using for...in in JavaScript.