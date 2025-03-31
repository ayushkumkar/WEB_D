//scopes

//nested scope
function fun_1(){

    const a = 10;

    function fun_2(){
        const b = 20
        console.log(a)
    }

fun_2()
console.log() //if u give b error will occur
}

fun_1()