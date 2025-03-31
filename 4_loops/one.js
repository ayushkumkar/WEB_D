// // for loop

// for(let i=1; i<=10; i++){
//     console.log(`10 * ${i} = ${i*10}`);
// }

// for(let i=1; i<=10; i++){
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log("");
    
    
// }

// //comented above

let my_arr = ['Om', 'Ayush', 'Rushi']

for (let i = 0; i<my_arr.length; i++) {
    console.log(my_arr[i]);
}

//break and continue

for(let i = 0; i<5; i++){
    if(i==3){
        break;
    }
    console.log(i);
}

console.log("  ");

for(let i = 0; i<5; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}

