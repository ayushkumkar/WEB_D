//reduce function
//The .reduce() method reduces an array to a single value (sum, product, object, string, etc.). It iterates over the array and applies a function that accumulates the result.

let arr = [1,2,3,4,5,6,7,8,9]
//accumulator → Stores the accumulated result.
//  currentValue → The current element being processed.
//initialValue → The initial value of the accumulator (important!)

let reduced_arr = arr.reduce((accumulator, curr_val, )=>{
    return accumulator+curr_val, 0
})

console.log(reduced_arr);

// Example 3: Find the Maximum Value