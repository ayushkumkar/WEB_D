const time = document.getElementById("clock");

setInterval(function(){
    let date = new Date;
    time.innerText = date.toLocaleTimeString()
    
}, 1000)

//important for interview setInterval function
