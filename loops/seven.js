//The .map() method is used to create a new array by applying a function to each element of an existing array.

//map transforms the existing array and returns a new array
//it applies transformation on each element

nums = [1,2,3,4,5,5,6]

const map_nums = nums.map((num)=>{
    return num+10;
})

console.log(map_nums);
