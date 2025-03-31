// for each
//The .forEach() method is used to iterate over arrays and execute a function for each element. 

const marks = [44, 54, 30, 88, 99]

marks.forEach(function fun1(){
    console.log("these are just iterations for each val");
    
})

//taking parameters

marks.forEach(function fun1(mark){
    console.log(mark);
    
})

//using arrow function
marks.forEach((mark)=>{
    console.log(mark);
    
})

marks.forEach((item , index , arr)=>{
    console.log(item , index , arr);
    
})


//objects in array

let myObj = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myObj.forEach((item)=> {
    console.log(item);  
})

//does foreach return any value
// answer no
const ans = myObj.forEach((item)=> {
    return item;  
})

console.log(ans);
