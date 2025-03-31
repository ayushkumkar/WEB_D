let arr = [0,1,2,3,4,5];
console.log(arr)

let arr2 = new Array('Ayush', 'Narendra', 'Kumkar')
console.log(arr2)

arr.push(10)
arr.push(50)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(500,5000)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.includes(5000));
console.log(arr.indexOf(5000));

let newarr = arr.join(arr2);  //returns a string not array
console.log(newarr)

//slicee
//Extracts a portion of an array without modifying the original arra
console.log(arr)

console.log("Slice", arr.slice(0,3)) //start_index, end_index(exclude)

//splice
//  removes/replaces/adds elements in an array, modifying the original array.
console.log(arr)

console.log("Splice", arr.splice(2,2)) //start_index, delete_count
console.log(arr)

console.log("Splice", arr.splice(1,0,50)) // adds use 0
console.log(arr)


console.log("Splice", arr.splice(1,1,50000)) // replaces use 1
console.log(arr)