//Immediateley Invoked Function Expression(IIFE)

//named IIFE
(function chai(){
    console.log("DB conneected successfuly");
    
})();

//UNNNAMMED IIFE
(()=>{
    console.log("hello");
    
})();

//IIFE using parameters
(function chai_(name){
    console.log(`DB__2${name} conneected successfuly`);
    
})("Ayush");